Blockly.common.defineBlocksWithJsonArray([/**{
  "type": "object",
  "message0": "{ %1 %2 }",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "MEMBERS"
    }
  ],
  "output": null,
  "colour": 230,
},
{
  "type": "member",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "MEMBER_NAME",
      "text": ""
    },
    {
      "type": "field_label",
      "name": "COLON",
      "text": ":"
    },
    {
      "type": "input_value",
      "name": "MEMBER_VALUE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
},*/
{
  "type": "patient",
  "message0": "Patient %1 Patient About: %2 Patient Status: %3",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "input_value",
      "name": "patientAbout",
      "check": "patient_about"
    },
    {
      "type": "input_value",
      "name": "patientStatus",
      "check": "patient_status"
    }
  ],
  "inputsInline": false,
  "output": "patient",
  "colour": 230,
  "tooltip": "Patient",
  "helpUrl": ""
},
{
  "type": "patient_about",
  "lastDummyAlign0": "RIGHT",
  "message0": "Patient About: %1 Patient Name: %2 %3 EWS: %4 %5 Patient IC: %6 %7 Blood Type: %8 %9 Age (Years): %10 %11 Patient Gender: %12 %13 Patient Model: %14 %15 Patient Diagnosis: %16 %17 Patient Summary: %18 %19 Patient Type: %20",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "field_input",
      "name": "PatientName",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_checkbox",
      "name": "isEWS",
      "checked": true
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "PatientIC",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "BloodType",
      "options": [
        [
          "A+",
          "A+"
        ],
        [
          "A-",
          "A-"
        ],
        [
          "B+",
          "B+"
        ],
        [
          "B-",
          "B-"
        ],
        [
          "O+",
          "O+"
        ],
        [
          "O-",
          "O-"
        ],
        [
          "AB+",
          "AB+"
        ],
        [
          "AB-",
          "AB-"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "AgeInYears",
      "value": 0,
      "min": 0,
      "max": 200
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "PatientGender",
      "options": [
        [
          "Male",
          "Male"
        ],
        [
          "Female",
          "Female"
        ]
      ]
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "PatientModel",
      "value": 0,
      "min": 0,
      "max": 100
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "PatientDiag",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "PatientSummary",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "PatientType",
      "text": ""
    }
  ],
  "output": "patient_about",
  "colour": 230,
  "tooltip": "Patient About",
  "helpUrl": ""
},
{
  "type": "patient_status",
  "lastDummyAlign0": "RIGHT",
  "message0": "Patient Status: %1 Temperature:  %2 %3 Heart Rate: %4 %5 Blood Pressure: %6 %7 Blood Pressure (Systolic): %8 %9 Respiration: %10 %11 SpO2 %12 %13 Pain Level (0-10): %14 %15 Abnormal Response: %16 %17 Patient Saying: %18",
  "args0": [
    {
      "type": "input_dummy",
      "align": "CENTRE"
    },
    {
      "type": "field_number",
      "name": "Temperature",
      "value": 0,
      "min": 0,
      "max": 120
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "HR",
      "value": 0,
      "min": 0,
      "max": 300
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "BP",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "BPSys",
      "value": 0,
      "min": 0,
      "max": 500
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "Respiration",
      "value": 0,
      "min": 0,
      "max": 500
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "SpO2",
      "value": 0,
      "min": 0,
      "max": 1000
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "PainScore",
      "value": 0,
      "min": 0,
      "max": 10
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "AbnormalResponse",
      "text": ""
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_input",
      "name": "PatientSpeak",
      "text": ""
    }
  ],
  "output": "patient_status",
  "colour": 230,
  "tooltip": "Patient Status",
  "helpUrl": ""
},
{
  "type": "scenario",
  "message0": "Scenario: %1 Patient: %2 Setup: %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "patient",
      "check": "patient",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "setup",
      "align": "RIGHT"
    }
  ],
  "colour": 230,
  "tooltip": "Scenario",
  "helpUrl": ""
},
{
  "type": "gotolabel",
  "message0": "GoTo %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "label",
      "options": [
        [
          "SomeLabel",
          "o1"
        ],
        [
          "SomeLine",
          "o2"
        ],
        [
          "SomeOtherLabel",
          "o3"
        ],
        [
          "SomeOtherLine",
          "o4"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "goandreturn",
  "message0": "Specify a Name for the Function: %1 %2 Go & Return With File: %3",
  "args0": [
    {
      "type": "field_input",
      "name": "fname",
      "text": "Function Name"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_input",
      "name": "file_todo",
      "text": "File Name"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}
]);

//Toolbox def, category toolbox
var codelabToolbox = {
    'kind': 'categoryToolbox',
    'contents': [
      //Scenario category
      {
        'kind':'category',
        'name':'Scenario',
        "contents": [
          {
            'kind': 'block',
            'type': 'scenario'
          },
        ]
      },
      //Patient category
      {
        'kind':'category',
        'name':'Patient',
        "contents": [
          {
            'kind': 'block',
            'type': 'patient'
          },
          {
            'kind': 'block',
            'type': 'patient_about'
          },
          {
            'kind': 'block',
            'type': 'patient_status'
          },
        ]
      },
      //Procedures category
      {
        'kind':'category',
        'name':'Procedures',
        "contents":[
          {
            'kind': 'block',
            'type': 'gotolabel'
          },
          {
            'kind': 'block',
            'type': 'goandreturn'
          },
        ]
      },
      //Logic category
      {
        'kind':'category',
        'name':'Logic',
        "contents": [
          {
          "kind": "block",
          "type": "logic_boolean"
          },
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind":"block",
            "type":"logic_compare"
          },
          {
            "kind":"block",
            "type":"logic_operation"
          },
          {
            "kind":"block",
            "type":"logic_negate"
          }
        ]
      },
      {
        'kind':'category',
        'name':'Input',
        "contents": [
          {
            'kind': 'block',
            'type': 'math_number'
          },
          {
            'kind': 'block',
            'type': 'text'
          },
          /**
          {
            'kind': 'block',
            'type': 'text_multiline'
          },
          */
        ]
      },
      {
        'kind':'category',
        'name':'Variables',
        "contents": [
          {
            'kind': 'block',
            'type': 'variables_get_dynamic'
          },
          {
            'kind': 'block',
            'type': 'variables_set_dynamic'
          }
        ]
      }
      
      /**,
      {
        'kind': 'block',
        'type': 'object'
      },
      {
        'kind': 'block',
        'type': 'member'
      },
      {
        'kind': 'block',
        'type': 'math_number'
      },
      {
        'kind': 'block',
        'type': 'text'
      },
      {
        'kind': 'block',
        'type': 'logic_boolean'
      },
      {
        'kind': 'block',
        'type': 'logic_null'
      },
      {
        'kind': 'block',
        'type': 'lists_create_with'
      },*/
    ]
  }

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

  function addLineToCode(line, code){
    code += "$" + line + "\n";
  }