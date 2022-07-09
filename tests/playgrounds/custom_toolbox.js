Blockly.common.defineBlocksWithJsonArray([
    {
      "type": "gameobjecthandlercall",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_variable",
          "name": "Object",
          "variable": "Object"
        },
        {
          "type": "input_value",
          "name": "Object",
          "check": "GameObjectHandlerCall"
        }
      ],
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
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
              {
                'kind': 'block',
                'type': 'field_button'
              }
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
          //Object Message Handler Calls
          {
            'kind':'category',
            'name':'Object Message Handler Calls',
            'contents':[
              {
                "kind": "block",
                "type": "gameobjecthandlercall"
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
            'name':'Variables',/**
            "contents": [
              {
                'kind': 'block',
                'type': 'variables_get_dynamic'
              },
              {
                'kind': 'block',
                'type': 'variables_set_dynamic'
              },
              {
                'kind': 'button',
                'text': 'Create Variable',
                'callbackKey': "Blockly.Variables.createVariableButtonHandler(button.getTargetWorkspace(), null, 'panda');"
              }
            ]*/
            'custom': 'VARIABLE'
          },
          {
            "kind": "category",
            "name": "Functions",
            "custom": "PROCEDURE"
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
    