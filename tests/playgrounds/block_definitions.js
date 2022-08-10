

let custom_block_lib = [
    {
      'type': 'expression_arithmetic',
      'message0': '%1 %2 %3',
      'args0': [
        {
          'type': 'input_value',
          'name': 'A',
        },
        {
          'type': 'field_dropdown',
          'name': 'OP',
          'options': [
            ['%{BKY_MATH_ADDITION_SYMBOL}', 'ADD'],
            ['%{BKY_MATH_SUBTRACTION_SYMBOL}', 'MINUS'],
            ['%{BKY_MATH_MULTIPLICATION_SYMBOL}', 'MULTIPLY'],
            ['%{BKY_MATH_DIVISION_SYMBOL}', 'DIVIDE'],
            ['%{BKY_MATH_POWER_SYMBOL}', 'POWER'],
          ],
        },
        {
          'type': 'input_value',
          'name': 'B',
        },
      ],
      'output': null,
      'inputsInline': true,
      'style': 'math_blocks',
      'helpUrl': '%{BKY_MATH_ARITHMETIC_HELPURL}',
      'extensions': ['math_op_tooltip'],
    },
    {
      'type': 'variables_set_dynamic_double',
      'message0': '%{BKY_VARIABLES_SET}',
      'args0': [
        {
          'type': 'field_variable',
          'name': 'VAR',
          'variable': '%{BKY_VARIABLES_DEFAULT_NAME}',
        },
        {
          'type': 'input_value',
          'name': 'VALUE',
        },
      ],
      'previousStatement': null,
      'nextStatement': null,
      'style': 'variable_dynamic_blocks',
      'tooltip': '%{BKY_VARIABLES_SET_TOOLTIP}',
      'helpUrl': '%{BKY_VARIABLES_SET_HELPURL}',
      'extensions': ['contextMenu_variableDynamicSetterGetter'],
    },
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
          "name": "Params",
          "check": "Params"
        }
      ],
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
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
        "nextStatement":null,
        "colour": 345,
        "tooltip": "Param block - Goes attach to an ObjectMessageHandler call",
        "helpUrl": ""
      },
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
            "name": "scene"
          }
        ],
        "inputsInline": true,
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
            "name": "check",
          }
        ],
        "inputsInline": true,
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
        "inputsInline": true,
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
            "name": "triggername"
          }
        ],
        "inputsInline": true,
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
            //"check": "String"
          }
        ],
        "inputsInline": true,
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
        "message0": "LocalRotateToX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localrotatetoy",
        "message0": "LocalRotateToY %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localrotatetoz",
        "message0": "LocalRotateToZ %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localrotatex",
        "message0": "LocalRotateX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localrotatey",
        "message0": "LocalRotateY %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localrotatez",
        "message0": "LocalRotateZ %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rotatetox",
        "message0": "RotateToX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rotatetoy",
        "message0": "RotateToY %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rotatetoz",
        "message0": "RotateToZ %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rotatex",
        "message0": "RotateX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rotatey",
        "message0": "RotateY %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "rotatez",
        "message0": "RotateZ %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localmovex",
        "message0": "LocalMoveX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localmovey",
        "message0": "LocalMoveY %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "localmovez",
        "message0": "LocalMoveZ %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "movex",
        "message0": "MoveX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "movey",
        "message0": "MoveY %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "movez",
        "message0": "MoveZ %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "movex",
        "message0": "MoveX %1 %2",
        "args0": [
            {
            "type": "input_value",
            "name": "angle"
            },
            {
            "type": "input_value",
            "name": "duration"
            }
        ],
        "inputsInline": true,
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
      },
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
        "type": "gotolabelreturn",
        "message0": "GoTo %1",
        "args0": [
          {
            "type": "input_value",
            "name": "label",
          }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "Label returns a value",
        "helpUrl": ""
      },
      {
        "type": "gotolabelnoreturn",
        "message0": "GoTo %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "noreturn"
          }
        ],
        "colour": 230,
        "tooltip": "Label does not return a value",
        "helpUrl": ""
      },
      {
        "type": "label",
        "message0": "Label %1",
        "args0": [
          {
            "type": "input_value",
            "name": "fname",
          },
        ],
        "nextStatement": null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "do_noreturn",
        "message0": "Do %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "fname"
          }
        ],
        "inputsInline": true,
        "nextStatement": null,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "Do no return",
        "helpUrl": ""
      },
      {
        "type": "do_return",
        "message0": "Do %1",
        "args0": [
          {
            "type": "input_value",
            "name": "fname"
          },
        ],
        "inputsInline": true,
        "nextStatement": null,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "Do & return",
        "helpUrl": ""
      },
      {
        "type": "setitemdate",
        "message0": "SetItemDate %1 %2",
        "args0": [
          {
            "type": "input_value",
            "name": "offset"
          },
          {
            "type": "input_value",
            "name": "format"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        
        "colour": 230,
        "tooltip": "Params dayOffset, format",
        "helpUrl": ""
      },
      {
        "type": "setitemtext",
        "message0": "SetItemText %1",
        "args0": [
          {
            "type": "input_value",
            "name": "stringexpression",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "Params StringExpression",
        "helpUrl": ""
      },
      {
        "type": "setitemdatetime",
        "message0": "SetItemDateTime %1 %2",
        "args0": [
            {
              "type": "input_value",
              "name": "offset"
            },
            {
              "type": "input_value",
              "name": "format"
            }
          ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "Params dayOffset, format",
        "helpUrl": ""
      },
      {
        "type": "menu_on",
        "message0": "Menu.on",
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "menu_question",
        "message0": "Menu.question %1",
        "args0": [
          {
            "type": "input_value",
            "name": "question"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "menu_choices",
        "message0": "Menu.choices %1",
        "args0": [
          {
            "type": "input_value",
            "name": "choice_strings",
            "check": "Array"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        
        "colour": 230,
        "tooltip": "Attach choices as array block of strings",
        "helpUrl": ""
      },
      {
        "type": "menu_done",
        "message0": "Menu.done",
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      },
      {
        "type": "menu_result",
        "message0": "Menu.result %1",
        "args0": [
          {
            "type": "input_value",
            "name": "match_string",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "colour": 230,
        "tooltip": "Attach target string to check choice against",
        "helpUrl": ""
      },
      {
        "type": "menu_choice",
        "message0": "Menu.choice",
        "previousStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
      ];

