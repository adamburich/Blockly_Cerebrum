
var int_inputs = ["AgeInYears", "HR", "BPSys", "PainScore", "PatientModel", "Temperature", "Respiration", "SpO2"];

var codelabGenerator = new Blockly.Generator('JSON');
  codelabGenerator['goandreturn'] = function(block){
    var fileName = block.getFieldValue("file_todo");
    var functionName = block.getFieldValue("fname");
    var code = "$" + functionName + " = '" + fileName + "'\n";
    code += "Do $" + functionName + "\n";
    return code;
  };
  
  codelabGenerator.scrub_ = function(block, code, opt_thisOnly) {
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !opt_thisOnly){
      if((block.type == "param") && (nextBlock.type == "param")){
        return code + ' ' + codelabGenerator.blockToCode(nextBlock);
      }
      else{
        return code + '\n' + codelabGenerator.blockToCode(nextBlock);
      }
    }
    return code;
  };

  codelabGenerator['gotolabelreturn'] = function(block){
    var label = block.getField("label").selectedOption_[0];
    var code = "Goto '" + label + "'\n";
    return code;
  };

  codelabGenerator['gotolabelnoreturn'] = function(block){
    console.log(block);
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

  codelabGenerator['controls_if'] = function(block){
    var code = "If\n" + "\t$cond" + "\n" + "Then\n" + "\tDo $something\n" + "Endif\n";
    return code;
  };

  codelabGenerator['patient'] = function(block) {
    var value_patientabout = codelabGenerator.valueToCode(block, 'patientAbout', Blockly.JavaScript.ORDER_ATOMIC);
    var value_patientstatus = codelabGenerator.valueToCode(block, 'patientStatus', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_patientabout + "\n" + value_patientstatus;
    code = code.replace("(", "");
    code = code.replace(")", "");
    code = code.replace("(", "");
    code = code.replace(")", "");
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  codelabGenerator['patient_about'] = function(block) {
    
    /** 
    var text_patientname = block.getFieldValue('PatientName');
    var checkbox_isews = block.getFieldValue('isEWS') === 'TRUE';
    var text_patientic = block.getFieldValue('PatientIC');
    var dropdown_bloodtype = block.getFieldValue('BloodType');
    var number_ageinyears = block.getFieldValue('AgeInYears');
    var dropdown_patientgender = block.getFieldValue('PatientGender');
    var number_patientmodel = block.getFieldValue('PatientModel');
    var text_patientdiag = block.getFieldValue('PatientDiag');
    var text_patientsummary = block.getFieldValue('PatientSummary');
    var text_patienttype = block.getFieldValue('PatientType');*/
    var text_patientname = block.getField('PatientName');
    var checkbox_isews = block.getField('isEWS');
    var text_patientic = block.getField('PatientIC');
    var dropdown_bloodtype = block.getField('BloodType');
    var number_ageinyears = block.getField('AgeInYears');
    var dropdown_patientgender = block.getField('PatientGender');
    var number_patientmodel = block.getField('PatientModel');
    var text_patientdiag = block.getField('PatientDiag');
    var text_patientsummary = block.getField('PatientSummary');
    var text_patienttype = block.getField('PatientType');
    var objs = [text_patientname, checkbox_isews, text_patientic, dropdown_bloodtype,number_ageinyears,dropdown_patientgender,number_patientmodel,text_patientdiag,text_patientsummary,text_patienttype];
    var model = [number_patientmodel];
    // TODO: Assemble JavaScript into code variable.
    var code = "";
    objs.forEach(element => {
      if(element){/**
        if(own_line.indexOf(element.name) != -1){
          code += "\n";
        }*/
        if(int_inputs.indexOf(element.name) != -1){
          code += "$" + element.name + ' = ' + block.getFieldValue(element.name) + '\n'
        }
        else{
          if(element.name == "PatientModel"){
            code += "$" + element.name + " = '" + "PatientMale" + block.getFieldValue(element.name) + "'\n"
          }
          else{
            code += "$" + element.name + " = '" + block.getFieldValue(element.name) + "'\n"
          }
        }
      }
    });
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  codelabGenerator['patient_status'] = function(block) {/**
    var number_temperature = block.getFieldValue('Temperature');
    var number_hr = block.getFieldValue('HR');
    var text_bp = block.getFieldValue('BP');
    var number_bpsys = block.getFieldValue('BPSys');
    var number_respiration_ = block.getFieldValue('Respiration:');
    var number_spo2_ = block.getFieldValue('SpO2:');
    var number_painscore = block.getFieldValue('PainScore');
    var text_abnormalresponse = block.getFieldValue('AbnormalResponse');
    var text_patientspeak = block.getFieldValue('PatientSpeak');*/
    var number_temperature = block.getField('Temperature');
    var number_hr = block.getField('HR');
    var text_bp = block.getField('BP');
    var number_bpsys = block.getField('BPSys');
    var number_respiration_ = block.getField('Respiration');
    var number_spo2_ = block.getField('SpO2');
    var number_painscore = block.getField('PainScore');
    var text_abnormalresponse = block.getField('AbnormalResponse');
    var text_patientspeak = block.getField('PatientSpeak');
    var objs = [number_temperature,number_hr,text_bp,number_bpsys,number_respiration_,number_spo2_,number_painscore,text_abnormalresponse,text_patientspeak]
    // TODO: Assemble JavaScript into code variable.
    var code = "";
    objs.forEach(element => {
      if(element){/**
        if(own_line.indexOf(element.name) != -1){
          code += "\n";
        }*/
        if(int_inputs.indexOf(element.name) != -1){
          code += "$" + element.name + ' = ' + block.getFieldValue(element.name) + '\n'
        }
        else{
          if(element.name == "PainScore"){
            code += "\n$" + element.name + " = 'Pain Score: " + block.getFieldValue(element.name) + "/10'\n"
          }
          else{
            code += "$" + element.name + " = '" + block.getFieldValue(element.name) + "'\n"
          }
        }
      }
    });
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  codelabGenerator['scenario'] = function(block) {
    var value_patient = codelabGenerator.valueToCode(block, 'patient', Blockly.JavaScript.ORDER_ATOMIC);
    var value_setup = codelabGenerator.valueToCode(block, 'setup', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = value_patient + "\n" + value_setup;
    return code;
  };

  codelabGenerator['variables_set'] = function variables_set(block) {
    
    var var_name = block.inputList[0].fieldRow[1].selectedOption_[0];
    var code = "$" + var_name + " = ";
    //console.log(block)
    if(block.childBlocks_[0].type == "math_number"){
      var var_val = block.childBlocks_[0].inputList[0].fieldRow[0].value_;
      code += "" + var_val + "";
    }
    else if(block.childBlocks_[0].type == "text"){
      var var_val = block.childBlocks_[0].inputList[0].fieldRow[1].value_;
      code += "'" + var_val + "'";
    }
    else if(block.childBlocks_[0].type == "variables_get"){
      
    }
    if(block.nextConnection.targetConnection != null){
      if(block.nextConnection.targetConnection.sourceBlock_.type == "variables_set"){
        //console.log("there is another variable set block")
        code += variables_set(block.nextConnection.targetConnection.sourceBlock_);
      } 
    }

    return code;
  }

  codelabGenerator['variables_get'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    var code = "$" + block.inputList[0].fieldRow[0].selectedOption_[0] + "\n";
    return [code, Blockly.JavaScript.ORDER_ATOMIC]
  }

  codelabGenerator['math_change'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    return "";
  }
  
  codelabGenerator['procedures_defreturn'] = function(block) {
    var name = block.getFieldValue("NAME");
    //console.log(block)
    var body = codelabGenerator.statementToCode(block, "STACK");
    
    return "\nLabel '" + name + "'\n" + body;
  }

  codelabGenerator['procedures_defnoreturn'] = function(block) {
    var name = block.getFieldValue("NAME");
    var body = "\t" + codelabGenerator.statementToCode(block, "STACK");
    /**
    var bodyblock = null;
    if(block.childBlocks_[0] != null){
      bodyblock = block.childBlocks_[0];
    }
    //var paramblock = block.nextConnection.targetConnection.sourceBlock_;
    //console.log(paramblock)
    var body = "";
    if(bodyblock != null){
      //var type = block.childBlocks_[0].nextConnection.targetConnection.sourceBlock_.type;
      var type = block.childBlocks_[0].type;
      //console.log("bodyblock is not null")
      //console.log(type)
      body = "";
      //console.log("Body: " + body)
      var count = 0;
      while(bodyblock != null){
        console.log("in while loop" + count)
        count++;
        console.log(bodyblock)
        type = block.childBlocks_[0].type;
        /**
        body += "\t" + codelabGenerator.statementToCode(bodyblock, type, Blockly.JavaScript.ORDER_ATOMIC);
        
      
       console.log(codelabGenerator.statementToCode(block, type, Blockly.JavaScript.ORDER_ATOMIC));
        if(bodyblock.nextConnection.targetConnection != null){
          bodyblock = bodyblock.nextConnection.targetConnection.sourceBlock_;
        }
        else{
          break;
        }
       
        
      }
      //params = params.replace("\n", " ");
    }
    */
    /** 
    if(block.nextConnection.targetConnection != null){
      var type = block.nextConnection.targetConnection.sourceBlock_.type;
      body += codelabGenerator.statementToCode()
    }*/
    return "Label '" + name + "'\n" + body;
  }

  codelabGenerator['procedures_callnoreturn'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    //console.log(block);    
    console.log(block)
    var name = codelabGenerator.statementToCode(block, 'extraState');

    //var name = block.inputList[0].fieldRow[1].value_;
    //var input = block.childBlocks_[0].inputList[0].fieldRow[0].value_
    return name;
  }

  codelabGenerator['follow'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return "follow" + code;
  };
  
  codelabGenerator['switchtoscene'] = function(block) {
    var value_scenename = codelabGenerator.valueToCode(block, 'scene', Blockly.JavaScript.ORDER_ATOMIC);
    
    // TODO: Assemble JavaScript into code variable.
    var code = "switchtoscene " + value_scenename;

    //console.log(Blockly.serialization.workspaces.save(Blockly.mainWorkspace));

    return code;
  };
  
  
  codelabGenerator['clickable_reset'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clickable.reset\n';
    return code;
  };
  
  codelabGenerator['clickable_ispressed'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clickable.resetpressed\n';
    return code;
  };
  
  codelabGenerator['clickable_resetpressed'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'clickable.ispressed\n';
    return code;
  };
  
  codelabGenerator['clickable'] = function(block) {
    var value_clickable_bool = codelabGenerator.valueToCode(block, 'clickable_bool', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "clickable " + value_clickable_bool;
    return code;
  };
  
  codelabGenerator['playsound'] = function(block) {
    var value_interval = codelabGenerator.valueToCode(block, 'interval', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'playsound ' + value_interval;
    return code;
  };
  
  codelabGenerator['stopsound'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'stopsound\n';
    return code;
  };
  
  codelabGenerator['play'] = function(block) {
    var value_triggername = codelabGenerator.valueToCode(block, 'triggerName', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'play ' + value_triggername;
    return code;
  };
  
  codelabGenerator['jump'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  codelabGenerator['says'] = function(block) {
    var value_saying = codelabGenerator.valueToCode(block, 'saying', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'says ' + value_saying;
    return code;
  };
  
  codelabGenerator['on'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  codelabGenerator['off'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  codelabGenerator['delete'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  codelabGenerator['exists'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  codelabGenerator['localrotatetox'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatetox ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['localrotatex'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatex ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['rotatetox'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatetox ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['rotatex'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatex ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['localmovex'] = function(block) {
    var value_distance = codelabGenerator.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localmovex ' + value_distance + " " + value_duration;
    return code;
  };
  
  codelabGenerator['movex'] = function(block) {
    var value_distance = codelabGenerator.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'movex ' + value_distance + " " + value_duration;
    return code;
  };
  
  codelabGenerator['matchrotation'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "matchrotation " + statements_params;
    return code;
  };
  
  codelabGenerator['parentto'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params');
    // TODO: Assemble JavaScript into code variable.
    var code = "parentto " + statements_params;
    return code;
  };
  
  codelabGenerator['attachto'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "attachto " + statements_params;
    return code;
  };
  
  codelabGenerator['outline'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  codelabGenerator['outline_on'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = "outline.on";
    return code;
  };
  
  codelabGenerator['outline_off'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'outline.off';
    return code;
  };
  
  codelabGenerator['outline_color'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = "outline_color " + statements_params;
    return code;
  };
  
  codelabGenerator['outline_check'] = function(block) {
    var statements_params = codelabGenerator.statementToCode(block, 'Params', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = statements_params;
    return code;
  };
  
  /** */
  codelabGenerator['param'] = function param(block) {
    //console.log(block)
    var value_name = codelabGenerator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = codelabGenerator.valueToCode(block, 'param_val', Blockly.JavaScript.ORDER_ATOMIC);
    /**
    if(block.nextConnection.targetConnection != null){
      code += param(block.nextConnection.targetConnection.sourceBlock_);
    }*/
    return code
  };

  codelabGenerator['math_number'] = function(block){
    const code = "" + Number(block.getFieldValue('NUM'));
    const order = code >= 0 ? Blockly.JavaScript.ORDER_ATOMIC :
                Blockly.JavaScript.ORDER_UNARY_NEGATION;
    return [code, order];
  }

  codelabGenerator['params'] = function(block) {
    console.log(block)
    var value_name = codelabGenerator.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = codelabGenerator.valueToCode(block, 'param_val', Blockly.JavaScript.ORDER_ATOMIC);
    /**
    if(block.nextConnection.targetConnection != null){
      code += param(block.nextConnection.targetConnection.sourceBlock_);
    }
    */
    return code;
  };

  codelabGenerator['localrotatetoy'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatetoy ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['localrotatey'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatey ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['rotatetoy'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatetoy ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['rotatey'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatey ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['localmovey'] = function(block) {
    var value_distance = codelabGenerator.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localmovey ' + value_distance + " " + value_duration;
    return code;
  };
  
  codelabGenerator['movey'] = function(block) {
    var value_distance = codelabGenerator.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'movey ' + value_distance + " " + value_duration;
    return code;
  };

  codelabGenerator['localrotatetoz'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatetoz ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['localrotatez'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localrotatez ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['rotatetoz'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatetoz ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['rotatez'] = function(block) {
    var value_angle = codelabGenerator.valueToCode(block, 'angle', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'rotatez ' + value_angle + " " + value_duration;
    return code;
  };
  
  codelabGenerator['localmovez'] = function(block) {
    var value_distance = codelabGenerator.valueToCode(block, 'distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'localmovez' + value_distance + " " + value_duration;
    return code;
  };
  
  codelabGenerator['movez'] = function(block) {
    var value_distance = codelabGenerator.valueToCode(block, 'Distance', Blockly.JavaScript.ORDER_ATOMIC);
    var value_duration = codelabGenerator.valueToCode(block, 'duration', Blockly.JavaScript.ORDER_ATOMIC);
    if(value_duration == "0"){
      value_duration = "";
    }
    // TODO: Assemble JavaScript into code variable.
    var code = 'movez ' + value_distance + " " + value_duration;
    return code;
  };

  codelabGenerator['menu_choice'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.choice';
    return code;
  };

  codelabGenerator['menu_result'] = function(block) {
    var value_match_string = codelabGenerator.valueToCode(block, 'match_string', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.result ' + value_match_string;
    return code;
  };

  codelabGenerator['menu_done'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.done';
    return code;
  };

  codelabGenerator['menu_choices'] = function(block) {
    var value_choice_strings = codelabGenerator.valueToCode(block, 'choice_strings', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.choices ' + value_choice_strings;
    return code;
  };

  codelabGenerator['menu_question'] = function(block) {
    var value_question = codelabGenerator.valueToCode(block, 'Question', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.question ' + value_question;
    return code;
  };

  codelabGenerator['menu_on'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'Menu.on';
    return code;
  };

  codelabGenerator['setitemdatetime'] = function(block) {
    var offset = codelabGenerator.valueToCode(block, "offset", Blockly.JavaScript.ORDER_ATOMIC);
    var format = codelabGenerator.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC);
 
    var code = " setItemDateTime " + offset + " " + format;
    //console.log("." + statements_params)
    return code;
  };
  
  codelabGenerator['setitemtext'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = " setItemText";
    //console.log("." + statements_params)
    return code;
  };

  codelabGenerator['setitemdate'] = function(block) {
    
    var offset = codelabGenerator.valueToCode(block, "offset", Blockly.JavaScript.ORDER_ATOMIC);
    var format = codelabGenerator.valueToCode(block, "format", Blockly.JavaScript.ORDER_ATOMIC);
 
    var code = " setItemDate " + offset + " " + format;
    //console.log("." + statements_params)
    return code;
  };

  codelabGenerator['scale'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = " scale";
    //console.log("." + statements_params)
    return code;
  };

  codelabGenerator['object_calling'] = function(block) {
    var object = block.getField("Object_Variable")
    var object_string = "$" + object.selectedOption_[0]
    var call_eval = " " + codelabGenerator.statementToCode(block, "Params").trimStart();
    call_eval = call_eval.replace("  ", " ");
    var code = object_string + call_eval;
    return code;
  };

  codelabGenerator['lists_create_with'] = function(block) {
    // Create a list with any number of elements of any type.
    const elements = new Array(block.itemCount_);
    for (let i = 0; i < block.itemCount_; i++) {
      elements[i] =
      codelabGenerator.valueToCode(block, 'ADD' + i, Blockly.JavaScript.ORDER_NONE) ||
          'null';
    }
    const code = '[' + elements.join(', ') + ']';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  codelabGenerator['variables_set_dynamic_double'] = function(block) {
    //var VAR = codelabGenerator.valueToCode(block, "VAR", Blockly.JavaScript.ORDER_NONE);
    var VAL = codelabGenerator.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE);
    //console.log(block);
    //console.log(VAR);
    //console.log(VAL);
    var var_name = block.inputList[0].fieldRow[1].selectedOption_[0];
    var code = "$" + var_name + " =$ " + VAL;
    //console.log(block)
    /**
    if(block.childBlocks_[0].type == "math_number"){
      var var_val = block.childBlocks_[0].inputList[0].fieldRow[0].value_;
      code += "" + var_val + "\n";
    }
    else if(block.childBlocks_[0].type == "text"){
      var var_val = block.childBlocks_[0].inputList[0].fieldRow[1].value_;
      code += "'" + var_val + "'\n";
    }
    else if(block.childBlocks_[0].type == "variables_get"){
      
    }
    if(block.nextConnection.targetConnection != null){
      if(block.nextConnection.targetConnection.sourceBlock_.type == "variables_set"){
        //console.log("there is another variable set block")
        code += variables_set(block.nextConnection.targetConnection.sourceBlock_);
      } 
    }*/

    return code;
  };

  codelabGenerator['expression_arithmetic'] = function(block) {
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
    const argument0 = codelabGenerator.valueToCode(block, 'A', order) || '0';
    const argument1 = codelabGenerator.valueToCode(block, 'B', order) || '0';
/**
    if(block.childBlocks_[0].type == "text" || block.childBlocks_[1].type == "text"){
      var out = argument0.concat(argument1);
      out = out.replaceAll("'", "");
      return "'" + out + "'";
    }
*/ 
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

  codelabGenerator['text'] = function(block) {
    const code = Blockly.JavaScript.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };

  codelabGenerator['do_return'] = function(block) {
    //console.log(block);
    var tt_block = block.childBlocks_[0];
    var tt = "";
    var name = "";
    if(tt_block != null){
      tt = tt_block.tooltip;
      name = tt.substring(tt.indexOf('"')+1, tt.lastIndexOf('"'))
    }
    //var fname = codelabGenerator.valueToCode(block, 'fname', Blockly.JavaScript.ORDER_ATOMIC);
    var fname = "'"+name+"'";
    var paramblock = null;
    if(block.nextConnection.targetConnection != null){
      paramblock = block.nextConnection.targetConnection.sourceBlock_;
    }
    //var paramblock = block.nextConnection.targetConnection.sourceBlock_;
    //console.log(paramblock)
    var params = "";
    if(paramblock != null){
      //console.log("paramblock is not null")
      params = codelabGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
      while(paramblock != null && paramblock.nextConnection.targetConnection != null){
        paramblock = paramblock.nextConnection.targetConnection.sourceBlock_;
        params += " " + codelabGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
        
      }
      params = params.replace("\n", " ");
    }
    // TODO: Assemble JavaScript into code variable.
    var code = "Do " + fname.trimStart() + " " + params;
    return code;
  };

  codelabGenerator['do_noreturn'] = function(block) {
    //console.log(block);
    var tt_block = block.childBlocks_[0];
    var tt = "";
    var name = "";
    if(tt_block != null){
      tt = tt_block.tooltip;
      name = tt.substring(tt.indexOf('"')+1, tt.lastIndexOf('"'))
    }
    //var fname = codelabGenerator.statementToCode(block, 'fname', Blockly.JavaScript.ORDER_ATOMIC);
    var fname = "'"+name+"'";
    var paramblock = null;
    if(block.nextConnection.targetConnection != null){
      paramblock = block.nextConnection.targetConnection.sourceBlock_;
    }
    //var paramblock = block.nextConnection.targetConnection.sourceBlock_;
    //console.log(paramblock)
    var params = "";
    if(paramblock != null){
      //console.log("paramblock is not null")
      params = codelabGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
      while(paramblock != null && paramblock.nextConnection.targetConnection != null){
        paramblock = paramblock.nextConnection.targetConnection.sourceBlock_;
        params += " " + codelabGenerator.valueToCode(paramblock, "param_val", Blockly.JavaScript.ORDER_ATOMIC);
        
      }
      params = params.replace("\n", " ");
    }
    // TODO: Assemble JavaScript into code variable.
    var code = "Do " + fname.trimStart() + " " + params;
    return code;
  };

  function addLineToCode(line, code){
    code += "$" + line + "\n";
  }

  

