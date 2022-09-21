const custom_block_lib = [
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
      "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "nextStatement":null,
        "colour": 345,
        "tooltip": "Param block - Goes attach to an ObjectMessageHandler call",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "clickable_reset",
        "message0": "clickable.reset",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "clickable_ispressed",
        "message0": "clickable.ispressed",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "clickable_resetpressed",
        "message0": "clickable.resetpressed",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "Attach Interval for Sound to Play on",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "stopsound",
        "message0": "StopSound",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "play",
        "message0": "Play %1",
        "args0": [
          {
            "type": "input_statement",
            "name": "triggername"
          }
        ],
        "inputsInline": true,
        
        
        "colour": 230,
        "tooltip": "Attach Trigger Name",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "outline_on",
        "message0": "Outline.on",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "outline_off",
        "message0": "Outline.off",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "Do no return",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "Do & return",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "Params dayOffset, format",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "Params StringExpression",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "Params dayOffset, format",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "menu_on",
        "message0": "Menu.on",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        
        "colour": 230,
        "tooltip": "Attach choices as array block of strings",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "menu_done",
        "message0": "Menu.done",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
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
        
        "colour": 230,
        "tooltip": "Attach target string to check choice against",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "menu_choice",
        "message0": "Menu.choice",
        
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "pause",
        "message0": "pause %1",
        "args0": [
          {
            "type": "input_value",
            "name": "timeInSeconds"
          }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "waitfor",
        "message0": "waitfor",
        'previousStatement': null,
        'nextStatement': null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "ison",
        "message0": "ison %1",
        "args0": [
          {
            "type": "input_value",
            "name": "objectName"
          }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "isoff",
        "message0": "isoff %1",
        "args0": [
          {
            "type": "input_value",
            "name": "objectName"
          }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "turnon",
        "message0": "ison %1",
        "args0": [
          {
            "type": "input_value",
            "name": "objectName"
          }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "turnoff",
        "message0": "isoff %1",
        "args0": [
          {
            "type": "input_value",
            "name": "objectName"
          }
        ],
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "create",
        "message0": "create %1 %2",
        "args0": [
          {
            "type": "input_value",
            "name": "prefabName"
          },
          {
            "type": "input_value",
            "name": "objectName"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "destroy",
        "message0": "destroy %1",
        "args0": [
          {
            "type": "input_value",
            "name": "objectName"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debug",
        "message0": "debug %1",
        "args0": [
          {
            "type": "input_value",
            "name": "message"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debug_on",
        "message0": "debug.on",
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debug_off",
        "message0": "debug.off",
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debugCanvas",
        "message0": "debugCanvas",
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debugCanvas_on",
        "message0": "debugcanvas.on",
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debugCanvas_off",
        "message0": "debugcanvas.off",
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "debugDelay",
        "message0": "debug.delay",
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "gameDelay",
        "message0": "game.delay %1",
        "args0": [
          {
            "type": "input_value",
            "name": "timeInSeconds"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "prompt",
        "message0": "prompt %1",
        "args0": [
          {
            "type": "input_value",
            "name": "message"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "speaker1",
        "message0": "speaker1 %1",
        "args0": [
          {
            "type": "input_value",
            "name": "message"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "speaker2",
        "message0": "speaker2 %1",
        "args0": [
          {
            "type": "input_value",
            "name": "message"
          }
        ],
        'previousStatement': null,
        'nextStatement': null,
        "inputsInline": true,
        "colour": 230,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      },
      {
        "type": "comment",
        "message0": "Add Comment: %1",
        "args0": [
          {
            "type": "input_value",
            "name": "comment_val",
            "check": "String"
          }
        ],
        "inputsInline": true,
        "colour": 75,
        "tooltip": "",
        "helpUrl": "",
        "nextStatement":null,
        "previousStatement":null
      }
  ];

