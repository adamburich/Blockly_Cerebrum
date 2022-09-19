
  var int_inputs = ["AgeInYears", "HR", "BPSys", "PainScore", "PatientModel", "Temperature", "Respiration", "SpO2"];

  var cerebrumGenerator = new Blockly.Generator('JSON');

  cerebrumGenerator['goandreturn'] = function(block){
    var fileName = block.getFieldValue("file_todo");
    var functionName = block.getFieldValue("fname");
    var code = "$" + functionName + " = '" + fileName + "'\n";
    code += "Do $" + functionName + "\n";
    return code;
  };

  cerebrumGenerator.finish = function(code){
    
    code = code.replaceAll("TRUE", "true");
    code = code.replaceAll("FALSE", "false");
    code = code.replaceAll("  ", " ");

    return code;
    
  }

  cerebrumGenerator.scrub_ = function(block, code, opt_thisOnly) {
    const lastBlock = block.getParent();
    if(!lastBlock){
      code = "\n" + code;
    }
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !opt_thisOnly){
      if((block.type == "param") && (nextBlock.type == "param")){
        code = code + ' ' + cerebrumGenerator.blockToCode(nextBlock);
      }
      else{
        code = code + '\n' + cerebrumGenerator.blockToCode(nextBlock);
      }
    }
    //code = code.trimStart("\n");
    return code;
    //return code;
  };

  cerebrumGenerator['gotolabelreturn'] = function(block){
    var label = block.getField("label").selectedOption_[0];
    var code = "Goto '" + label + "'\n";
    return code;
  };

  cerebrumGenerator['gotolabelnoreturn'] = function(block){
    //console.log(block);
    var tt_block = block.childBlocks_[0];
    var tt = "";
    var name = "";
    if(tt_block != null){
      tt = tt_block.tooltip;
      name = tt.substring(tt.indexOf('"')+1, tt.lastIndexOf('"'))
    }
    //var label = block.childBlocks_[0].tooltip;
    var code = "Goto '" + name + "'\n";
    //var code = label;
    return code;
  };

  cerebrumGenerator['controls_if'] = function(block){
    var cond = cerebrumGenerator.valueToCode(block, "IF0", Blockly.JavaScript.ORDER_CONDITIONAL);
    var body = cerebrumGenerator.statementToCode(block, "DO0");
    var code = "If\n  " + cond + "\n" + "Then\n" + body + "\n" + "Endif";
    return code;
  };

  cerebrumGenerator['controls_ifelse'] = cerebrumGenerator['controls_if'];

  cerebrumGenerator['logic_compare'] = function(block) {
  // Comparison operator.
  const OPERATORS =
      {'EQ': '==', 'NEQ': '!=', 'LT': '<', 'LTE': '<=', 'GT': '>', 'GTE': '>='};
  const operator = OPERATORS[block.getFieldValue('OP')];
  const order = (operator === '==' || operator === '!=') ?
      Blockly.JavaScript.ORDER_EQUALITY :
      Blockly.JavaScript.ORDER_RELATIONAL;
  const argument0 = cerebrumGenerator.valueToCode(block, 'A', order) || '0';
  const argument1 = cerebrumGenerator.valueToCode(block, 'B', order) || '0';
  const code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

cerebrumGenerator['logic_operation'] = function(block) {
  // Operations 'and', 'or'.
  const operator = (block.getFieldValue('OP') === 'AND') ? '&&' : '||';
  const order = (operator === '&&') ? Blockly.JavaScript.ORDER_LOGICAL_AND :
                                      Blockly.JavaScript.ORDER_LOGICAL_OR;
  let argument0 = cerebrumGenerator.valueToCode(block, 'A', order);
  let argument1 = cerebrumGenerator.valueToCode(block, 'B', order);
  if (!argument0 && !argument1) {
    // If there are no arguments, then the return value is false.
    argument0 = 'false';
    argument1 = 'false';
  } else {
    // Single missing arguments have no effect on the return value.
    const defaultArgument = (operator === '&&') ? 'true' : 'false';
    if (!argument0) {
      argument0 = defaultArgument;
    }
    if (!argument1) {
      argument1 = defaultArgument;
    }
  }
  const code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};

cerebrumGenerator['logic_negate'] = function(block) {
  // Negation.
  const order = Blockly.JavaScript.ORDER_LOGICAL_NOT;
  const argument0 = cerebrumGenerator.valueToCode(block, 'BOOL', order) || 'true';
  const code = '!' + argument0;
  return [code, order];
};

cerebrumGenerator['logic_boolean'] = function(block) {
  // Boolean values true and false.
  const code = (block.getFieldValue('BOOL') === 'TRUE') ? 'true' : 'false';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

cerebrumGenerator['logic_null'] = function(block) {
  // Null data type.
  return ['null', Blockly.JavaScript.ORDER_ATOMIC];
};

cerebrumGenerator['logic_ternary'] = function(block) {
  // Ternary operator.
  const value_if =
      cerebrumGenerator.valueToCode(block, 'IF', Blockly.JavaScript.ORDER_CONDITIONAL) ||
      'false';
  const value_then =
    cerebrumGenerator.valueToCode(block, 'THEN', Blockly.JavaScript.ORDER_CONDITIONAL) ||
      'null';
  const value_else =
    cerebrumGenerator.valueToCode(block, 'ELSE', Blockly.JavaScript.ORDER_CONDITIONAL) ||
      'null';
  const code = value_if + ' ? ' + value_then + ' : ' + value_else;
  return [code, Blockly.JavaScript.ORDER_CONDITIONAL];
};

  cerebrumGenerator['variables_set'] = function variables_set(block) {
    
  // Variable setter.
    const argument0 = cerebrumGenerator.valueToCode(
    block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
    const varName = block.inputList[0].fieldRow[1].selectedOption_[0];
    return "$" + varName + ' = ' + argument0 + '';
  }

  cerebrumGenerator['variables_get'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    var code = "$" + block.inputList[0].fieldRow[0].selectedOption_[0];
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
  }

  cerebrumGenerator['math_change'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    return "";
  }
  
  cerebrumGenerator['procedures_defreturn'] = function(block) {
    var name = block.getFieldValue("NAME");
    //console.log(block)
    var body = cerebrumGenerator.statementToCode(block, "STACK");
    
    return "\nLabel '" + name + "'\n" + body + "\nReturn";
  }

  cerebrumGenerator['procedures_defnoreturn'] = function(block) {
    var name = block.getFieldValue("NAME");
    var body = cerebrumGenerator.statementToCode(block, "STACK");

    return "Label '" + name + "'\n" + body + "\nReturn";
  }

  cerebrumGenerator['procedures_callnoreturn'] = function(block) {
    console.log(block)
    var name = cerebrumGenerator.statementToCode(block, 'extraState');

    return name;
  }

  cerebrumGenerator['follow'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = statements_params;

    return "follow" + code;
  };
  
  cerebrumGenerator['switchtoscene'] = function(block) {
    var value_scenename = cerebrumGenerator.valueToCode(block, 'scene', Blockly.JavaScript.ORDER_ATOMIC);
    var code = "switchtoscene " + value_scenename;

    return code;
  };
  
  
  cerebrumGenerator['clickable_reset'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clickable.reset\n';
    return code;
  };
  
  cerebrumGenerator['clickable_ispressed'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clickable.resetpressed\n';
    return code;
  };
  
  cerebrumGenerator['clickable_resetpressed'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clickable.ispressed\n';
    return code;
  };
  
  cerebrumGenerator['clickable'] = function(block) {
    var value_clickable_bool = cerebrumGenerator.valueToCode(block, 'clickable_bool', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "clickable " + value_clickable_bool;
    return code;
  };
  
  cerebrumGenerator['playsound'] = function(block) {
    var value_interval = cerebrumGenerator.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'playsound ' + value_interval;
    return code;
  };
  
  cerebrumGenerator['stopsound'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'stopsound\n';
    return code;
  };
  
  cerebrumGenerator['play'] = function(block) {
    var value_triggername = cerebrumGenerator.statementToCode(block, 'triggername', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'play ' + value_triggername;
    return code;
  };
  
  cerebrumGenerator['jump'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  cerebrumGenerator['says'] = function(block) {
    var value_saying = cerebrumGenerator.valueToCode(block, 'saying', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'says ' + value_saying;
    return code;
  };
  
  cerebrumGenerator['on'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  cerebrumGenerator['off'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  cerebrumGenerator['delete'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  cerebrumGenerator['exists'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  cerebrumGenerator['localrotatetox'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatetox ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['localrotatex'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatex ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['rotatetox'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatetox ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['rotatex'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatex ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['localmovex'] = function(block) {
    var value_distance = cerebrumGenerator.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localmovex ' + value_distance + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['movex'] = function(block) {
    var value_distance = cerebrumGenerator.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'movex ' + value_distance + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['matchrotation'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "matchrotation " + statements_params;
    return code;
  };
  
  cerebrumGenerator['parentto'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params');
    // TODO: Assemble JavaScript into code variable.
    var code = "parentto " + statements_params;
    return code;
  };
  
  cerebrumGenerator['attachto'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "attachto " + statements_params;
    return code;
  };
  
  cerebrumGenerator['outline'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  cerebrumGenerator['outline_on'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "outline.on";
    return code;
  };
  
  cerebrumGenerator['outline_off'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'outline.off';
    return code;
  };
  
  cerebrumGenerator['outline_color'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "outline_color " + statements_params;
    return code;
  };
  
  cerebrumGenerator['outline_check'] = function(block) {
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  /** */
  cerebrumGenerator['param'] = function param(block) {
    var value_name = cerebrumGenerator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = cerebrumGenerator.valueToCode(block, 'param_val', Blockly.JavaScript.ORDER_ATOMIC);
    return code
  };

  cerebrumGenerator['math_number'] = function(block){
    const code = "" + Number(block.getFieldValue('NUM'));
    const order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
                Blockly.JavaScript.ORDER_UNARY_NEGATION;
    return [code, order];
  }

  cerebrumGenerator['params'] = function(block) {
    console.log(block)
    var value_name = cerebrumGenerator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = cerebrumGenerator.valueToCode(block, 'param_val', Blockly.JavaScript.ORDER_ATOMIC);
    return code;
  };

  cerebrumGenerator['localrotatetoy'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatetoy ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['localrotatey'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatey ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['rotatetoy'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatetoy ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['rotatey'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatey ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['localmovey'] = function(block) {
    var value_distance = cerebrumGenerator.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localmovey ' + value_distance + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['movey'] = function(block) {
    var value_distance = cerebrumGenerator.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'movey ' + value_distance + " " + value_duration;
    return code;
  };

  cerebrumGenerator['localrotatetoz'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatetoz ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['localrotatez'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatez ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['rotatetoz'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatetoz ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['rotatez'] = function(block) {
    var value_angle = cerebrumGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatez ' + value_angle + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['localmovez'] = function(block) {
    var value_distance = cerebrumGenerator.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localmovez' + value_distance + " " + value_duration;
    return code;
  };
  
  cerebrumGenerator['movez'] = function(block) {
    var value_distance = cerebrumGenerator.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = cerebrumGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'movez ' + value_distance + " " + value_duration;
    return code;
  };

  cerebrumGenerator['menu_choice'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.choice';
    return code;
  };

  cerebrumGenerator['menu_result'] = function(block) {
    var value_match_string = cerebrumGenerator.valueToCode(block, 'match_string', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.result ' + value_match_string;
    return code;
  };

  cerebrumGenerator['menu_done'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.done';
    return code;
  };

  cerebrumGenerator['menu_choices'] = function(block) {
    var value_choice_strings = cerebrumGenerator.valueToCode(block, 'choice_strings', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.choices ' + value_choice_strings;
    return code;
  };

  cerebrumGenerator['menu_question'] = function(block) {
    var value_question = cerebrumGenerator.valueToCode(block, 'Question', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.question ' + value_question;
    return code;
  };

  cerebrumGenerator['menu_on'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.on';
    return code;
  };

  cerebrumGenerator['setitemdatetime'] = function(block) {
    var offset = cerebrumGenerator.valueToCode(block, "offset", Blockly.JavaScript.ORDER_ATOMIC);
    var format = cerebrumGenerator.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC);
 
    var code = " setItemDateTime " + offset + " " + format;
    //console.log("." + statements_params)
    return code;
  };
  
  cerebrumGenerator['setitemtext'] = function(block) {
    var text = cerebrumGenerator.valueToCode(block, "stringexpression", Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = " setItemText " + text.replaceAll("\\'", "");
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['setitemdate'] = function(block) {
    
    var offset = cerebrumGenerator.valueToCode(block, "offset", Blockly.JavaScript.ORDER_ATOMIC);
    var format = cerebrumGenerator.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC);
 
    var code = " setItemDate " + offset + " " + format;
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['scale'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " scale " + statements_params;
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['align'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " align " + statements_params;
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['orient'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " orient " + statements_params;
    //console.log("." + statements_params)
    return code;
  };
  
  cerebrumGenerator['grab'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " grab " + statements_params;
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['release'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " release " + statements_params;
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['lookat'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " lookat " + statements_params;
    //console.log("." + statements_params)
    return code;
  };
  
  cerebrumGenerator['lookatme'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var statements_params = cerebrumGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    var code = " lookatme " + statements_params;
    //console.log("." + statements_params)
    return code;
  };

  cerebrumGenerator['object_calling'] = function(block) {
    var object = block.getField("Object_Variable")
    var object_string = "$" + object.selectedOption_[0]
    var call_eval = " " + cerebrumGenerator.statementToCode(block, "Params").trimStart();
    call_eval = call_eval.replace("  ", " ");
    var code = object_string + call_eval;
    return code;
  };

  cerebrumGenerator['lists_create_with'] = function(block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.itemCount_);
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
      cerebrumGenerator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE) ||
          'null';
    }
    const code = '[' + elements.join(', ') + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  cerebrumGenerator['variables_set_dynamic_double'] = function(block) {
    var VAL = cerebrumGenerator.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE);
    var var_name = block.inputList[0].fieldRow[1].selectedOption_[0];
    var code = "$" + var_name + " =$ " + VAL;

    return code;
  };

  cerebrumGenerator['expression_arithmetic'] = function(block) {
    // Basic arithmetic operators, and power.
    const OPERATORS = {
      'ADD': [' + ', Blockly.JavaScript.ORDER_ADDITION],
      'MINUS': [' - ', Blockly.JavaScript.ORDER_SUBTRACTION],
      'MULTIPLY': [' * ', Blockly.JavaScript.ORDER_MULTIPLICATION],
      'DIVIDE': [' / ', Blockly.JavaScript.ORDER_DIVISION],
      'POWER': [null, Blockly.JavaScript.ORDER_NONE],  // Handle power separately.
    };
    const tuple = OPERATORS[block.getFieldValue('OP')];
    const operator = tuple[0];
    const order = tuple[1];
    const argument0 = cerebrumGenerator.valueToCode(block, 'A', order) || '0';
    const argument1 = cerebrumGenerator.valueToCode(block, 'B', order) || '0';

    let code;
    // Power in JavaScript requires a special case since it has no operator.
    if (!operator) {
      code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    }
    code = argument0 + operator + argument1;
    code = code.replace("\n", "")
    return [code, Blockly.JavaScript.ORDER_NONE];
  };

  cerebrumGenerator['text'] = function(block) {
    const code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  cerebrumGenerator['do_return'] = function(block) {
    var tt_block = block.childBlocks_[0];
    var tt = "";
    var name = "";
    if(tt_block != null){
      if(tt_block.type == "text"){
        name = cerebrumGenerator.valueToCode(block, "fname", Blockly.JavaScript.ORDER_NONE);
      }
      else{
        tt = tt_block.tooltip;
        name = tt.substring(tt.indexOf('"')+1, tt.lastIndexOf('"'))
        name = "'" + name + "'";
      }
    }
    var fname = name;
    var paramblock = null;
    if(block.nextConnection.targetConnection != null){
      paramblock = block.nextConnection.targetConnection.sourceBlock_;
    }
    var params = "";
    if(paramblock != null){
      params = cerebrumGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
      while(paramblock != null && paramblock.nextConnection.targetConnection != null){
        paramblock = paramblock.nextConnection.targetConnection.sourceBlock_;
        params += " " + cerebrumGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
        
      }
      params = params.replace("\n", " ");
    }
    // TODO: Assemble JavaScript into code variable.
    var code = "Do " + fname.trimStart() + " " + params;
    return code;
  };

  cerebrumGenerator['do_noreturn'] = function(block) {
    //console.log(block);
    var tt_block = block.childBlocks_[0];
    var tt = "";
    var name = "";
    if(tt_block != null){
      if(tt_block.type == "text"){
        name = tt_block.getFieldValue("NAME");
      }
      else{
        tt = tt_block.tooltip;
        name = tt.substring(tt.indexOf('"')+1, tt.lastIndexOf('"'))
      }
    }
    var fname = "'"+name+"'";
    var paramblock = null;
    if(block.nextConnection.targetConnection != null){
      paramblock = block.nextConnection.targetConnection.sourceBlock_;
    }
    var params = "";
    if(paramblock != null){
      params = cerebrumGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
      while(paramblock != null && paramblock.nextConnection.targetConnection != null){
        paramblock = paramblock.nextConnection.targetConnection.sourceBlock_;
        params += " " + cerebrumGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
        
      }
      params = params.replace("\n", " ");
    }
    var code = "Do " + fname.trimStart() + " " + params;
    return code;
  };

  cerebrumGenerator['create'] = function(block){
    var prefabName = cerebrumGenerator.valueToCode(block, 'prefabName', Blockly.JavaScript.ORDER_ATOMIC).replaceAll("'","");
    var objectName = cerebrumGenerator.valueToCode(block, 'objectName', Blockly.JavaScript.ORDER_ATOMIC).replaceAll("'","");

    return "Create "+prefabName + " "+objectName;
  }

  cerebrumGenerator['waitfor'] = function(block){

    return "waitfor";
  }

  cerebrumGenerator['comment'] = function(block) {
    var value_comment_val = cerebrumGenerator.valueToCode(block, 'comment_val', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '####################\n' + "# "+value_comment_val.replaceAll("'", "") + '\n####################';
    return code;
  };

  cerebrumGenerator['prompt'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

    return "prompt " + arg;
  }

  cerebrumGenerator['speaker1'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

    return "speaker1 " + arg;
  }

  cerebrumGenerator['speaker2'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

    return "speaker2 " + arg;
  }

  cerebrumGenerator['gameDelay'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "timeInSeconds", Blockly.JavaScript.ORDER_ATOMIC);

    return "game.delay " + arg;
  }

  cerebrumGenerator['debugCanvas_on'] = function(block){

    return "debugcanvas.on";
  }

  cerebrumGenerator['debugCanvas_off'] = function(block){

    return "debugcanvas.off";
  }

  cerebrumGenerator['debugDelay'] = function(block){

    return "debug.delay";
  }

  cerebrumGenerator['debugCanvas'] = function(block){

    return "debugCanvas";
  }

  cerebrumGenerator['debug'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "message", Blockly.JavaScript.ORDER_ATOMIC);

    return "debug " + arg;
  }

  cerebrumGenerator['destroy'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

    return "destroy " + arg;
  }

  cerebrumGenerator['turnoff'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

    return "turnoff " + arg;
  }

  cerebrumGenerator['turnon'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

    return "turnon " + arg;
  }

  cerebrumGenerator['ison'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

    return "ison " + arg;
  }

  cerebrumGenerator['isoff'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "objectName", Blockly.JavaScript.ORDER_ATOMIC);

    return "isoff " + arg;
  }

  cerebrumGenerator['pause'] = function(block){
    var arg = cerebrumGenerator.valueToCode(block, "timeInSeconds", Blockly.JavaScript.ORDER_ATOMIC);

    return "pause " + arg;
  }

  /**
   * TODO: Add missing generation functions for:
   * prompt, args: message
   * speaker1, args: message
   * speaker2, args: message
   * gameDelay, args: timeInSeconds
   * debugCanvas_on
   * debugCanvas_off
   * debugDelay
   * debugCanvas
   * debug, args: message
   * destroy, args: objectName
   * turnoff, args: objectName
   * turnon, args: objectName
   * ison, args: objectName
   * isoff, args: objectName
   * pause, args: timeInSeconds
   * 
   */

  function addLineToCode(line, code){
    code += "$" + line + "\n";
  }
  

