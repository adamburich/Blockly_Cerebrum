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
          },
          {
            'kind':'category',
            'name':'Call From Object',
            "contents": [
              {
                "type": "object_calling",
                "message0": "%1 %2",
                "args0": [
                  {
                    "type": "field_variable",
                    "name": "Object_Variable",
                    "variable": "Object"
                  },
                  {
                    "type": "input_statement",
                    "name": "NAME"
                  }
                ],
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              }
            ]
          },
          {
            'kind':'category',
            'name':'Object Message Handler Calls',
            "contents": [
              {
                "type": "follow",
                "message0": "Follow %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "switchtoscene",
                "message0": "SwitchToScene %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "sceneName"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "clickable_reset",
                "message0": "clickable.reset",
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "clickable_ispressed",
                "message0": "clickable.ispressed",
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "clickable_resetpressed",
                "message0": "clickable.resetpressed",
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "clickable",
                "message0": "clickable %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "clickable_bool",
                    "check": "Boolean"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "playsound",
                "message0": "PlaySound %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "interval"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "Attach Interval for Sound to Play on",
                "helpUrl": ""
              },
              {
                "type": "stopsound",
                "message0": "StopSound",
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "play",
                "message0": "Play %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "triggerName"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "Attach Trigger Name",
                "helpUrl": ""
              },
              {
                "type": "jump",
                "message0": "Jump %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "says",
                "message0": "Says %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "saying",
                    "check": "String"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "on",
                "message0": "On %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "off",
                "message0": "Off %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "delete",
                "message0": "Delete %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "exists",
                "message0": "Exists %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localrotatetox",
                "message0": "LocalRotateToX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localrotatetoy",
                "message0": "LocalRotateToY %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localrotatetoz",
                "message0": "LocalRotateToZ %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localrotatex",
                "message0": "LocalRotateX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localrotatey",
                "message0": "LocalRotateY %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localrotatez",
                "message0": "LocalRotateZ %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "rotatetox",
                "message0": "RotateToX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "rotatetoy",
                "message0": "RotateToY %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "rotatetoz",
                "message0": "RotateToZ %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "rotatex",
                "message0": "RotateX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "rotatey",
                "message0": "RotateY %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "rotatez",
                "message0": "RotateZ %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "angleInDegrees"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localmovex",
                "message0": "LocalMoveX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localmovey",
                "message0": "LocalMoveY %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "localmovez",
                "message0": "LocalMoveZ %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "movex",
                "message0": "MoveX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "movey",
                "message0": "MoveY %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "movez",
                "message0": "MoveZ %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "movex",
                "message0": "MoveX %1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "Distance"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "matchrotation",
                "message0": "MatchRotation %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "attachto",
                "message0": "AttachTo %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "outline",
                "message0": "Outline %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "outline_on",
                "message0": "Outline.on",
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "outline_off",
                "message0": "Outline.off",
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "outline_color",
                "message0": "Outline.color %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "outline_check",
                "message0": "Outline.check %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "scale",
                "message0": "Scale %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "moveto",
                "message0": "MoveTo %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "align",
                "message0": "Align %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "orient",
                "message0": "Orient %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "grab",
                "message0": "Grab %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "release",
                "message0": "Release %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "lookatme",
                "message0": "LookAtMe %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "lookat",
                "message0": "LookAt %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "ison",
                "message0": "IsOn %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "isoff",
                "message0": "IsOff %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "enableclick",
                "message0": "EnableClick %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "disableclick",
                "message0": "DisableClick %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              },
              {
                "type": "parentto",
                "message0": "ParentTo %1",
                "args0": [
                  {
                    "type": "input_statement",
                    "name": "Params",
                    "check": "Params"
                  }
                ],
                "previousStatement": null,
                "colour": 230,
                "tooltip": "",
                "helpUrl": ""
              }
            ]
          },
          {
            'kind':'category',
            'name':'Params',
            "contents": [
              {
                "type": "param",
                "message0": "%1",
                "args0": [
                  {
                    "type": "input_value",
                    "name": "param_val"
                  }
                ],
                "inputsInline": true,
                "previousStatement": null,
                "nextStatement": null,
                "colour": 345,
                "tooltip": "Param block - Goes attach to an ObjectMessageHandler call",
                "helpUrl": ""
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
    