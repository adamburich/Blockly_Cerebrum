
var int_inputs = ["AgeInYears", "HR", "BPSys", "PainScore", "PatientModel", "Temperature", "Respiration", "SpO2"];

var codelabGenerator = new Blockly.Generator('JSON');
  codelabGenerator['goandreturn'] = function(block){
    var fileName = block.getFieldValue("file_todo");
    var functionName = block.getFieldValue("fname");
    var code = "$" + functionName + " = '" + fileName + "'\n";
    code += "Do $" + functionName + "\n";
    return code;
  };

  codelabGenerator['gotolabel'] = function(block){
    var label = block.getField("label").selectedOption_[0];
    var code = "Goto '" + label + "'\n";
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
    console.log(block)
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
        console.log("there is another variable set block")
        code += variables_set(block.nextConnection.targetConnection.sourceBlock_);
      } 
    }

    return code;
  }

  codelabGenerator['variables_get'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    return "$" + block.inputList[0].fieldRow[0].selectedOption_[0] + "\n";
  }

  codelabGenerator['math_change'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    return "";
  }
  
  codelabGenerator['procedures_defnoreturn'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    console.log(block);
    var name = block.inputList[0].fieldRow[1].value_;
    var input;
    return "";
  }
  codelabGenerator['procedures_callnoreturn'] = function(block) {
    //console.log(block.inputList[0].fieldRow[0].selectedOption_[0]);
    console.log(block);
    var name = block.inputList[0].fieldRow[1].value_;
    var input = block.childBlocks_[0].inputList[0].fieldRow[0].value_
    return "";
  }

  codelabGenerator['gameobjecthandlercall'] = function(block) {
    var variable_object = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('Object'), Blockly.Variables.NAME_TYPE);
    var value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
  };
  
  function addLineToCode(line, code){
    code += "$" + line + "\n";
  }

  

