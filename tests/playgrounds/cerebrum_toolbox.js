
Blockly.common.defineBlocksWithJsonArray(custom_block_lib);
    //Toolbox def, category toolbox
    var codelabToolbox = {
        'kind': 'categoryToolbox',
        'contents': [
          //Scenario category
          /**
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
          },*/
          //Procedures category
          {
            'kind':'category',
            'name':'Procedures',
            "contents":[
              {
                'kind': 'block',
                'type': 'gotolabelreturn',
                "inputs":{
                  "label":{
                     "shadow":{
                      "type":"procedures_callreturn"
                     }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'gotolabelnoreturn',
                "inputs":{
                  "noreturn":{
                     "shadow":{
                      "type":"procedures_callnoreturn"
                     }
                  }
                }
              }
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
          //Input category
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
              {
                'kind': 'block',
                'type': 'lists_create_with'
              },
              /**
              {
                'kind': 'block',
                'type': 'text_multiline'
              },
              */
            ]
          },
          //Variables category
          {
            'kind':'category',
            'name':'Variables',
            'custom': 'VARIABLE'
          },
          {
            "kind": "category",
            "name": "Functions",
            "custom": "PROCEDURE"
          },
          {
            "kind": "category",
            "name": "Expression",
            "contents": [
              {
                'kind': 'block',
                'type': 'variables_set_dynamic_double'
              },
              {
                'kind': 'block',
                'type': 'logic_compare'
              },
              {
                'kind': 'block',
                'type': 'expression_arithmetic'
              }
            ],
          },
          {
            'kind':'category',
            'name':'Call From Object',
            "contents": [
              {
                'kind': 'block',
                'type': 'object_calling'
              },
              
            ]
          },
          {
            'kind':'category',
            'name':'Object Message Handler Calls',
            "contents": [
              {
                'kind': 'block',
                'type': 'follow',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                "kind": "block",
                "type": "switchtoscene",
                "inputs": {
                  "scene": {
                    "shadow": {
                      "type": "text",
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'clickable_reset'
              },
              {
                'kind': 'block',
                'type': 'clickable_ispressed'
              },
              {
                'kind': 'block',
                'type': 'clickable_resetpressed'
              },
              {
                'kind': 'block',
                'type': 'clickable',
                "inputs": {
                  "check": {
                    "shadow": {
                      "type": "logic_boolean"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'playsound',
                "inputs": {
                  "interval": {
                    "shadow": {
                      "type": "math_number"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'stopsound'
              },
              {
                'kind': 'block',
                'type': 'play',
                "inputs": {
                  "triggername": {
                    "shadow": {
                      "type": "text"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'jump',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'says',
                "inputs": {
                  "saying": {
                    "shadow": {
                      "type": "text",
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'on',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'off',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'delete',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'exists',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localrotatetox',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localrotatex',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'rotatetox',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'rotatex',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localmovex',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'movex',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localrotatetoy',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localrotatey',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'rotatetoy',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'rotatey',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localmovey',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'movey',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localrotatetoz',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localrotatez',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'rotatetoz',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'rotatez',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'localmovez',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'movez',
                "inputs": {
                  "angle": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  },
                  "duration": {
                    "shadow": {
                      "type": "math_number",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'matchrotation',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'parentto',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'attachto',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'outline',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'outline_on'
              },
              {
                'kind': 'block',
                'type': 'outline_off'
              },
              {
                'kind': 'block',
                'type': 'outline_color',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'outline_check',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'scale',
                "inputs": {
                  "Params": {
                    "shadow": {
                      "type": "param",
                      
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'setitemtext',
                "inputs": {
                  "stringexpression": {
                    "shadow": {
                      "type": "text",
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'setitemdate',
                "inputs": {
                  "offset": {
                    "shadow": {
                      "type": "math_number"
                    }
                  },
                  "format": {
                    "shadow": {
                      "type": "text"
                    }
                  }
                }
                
              },
              {
                'kind': 'block',
                'type': 'setitemdatetime',
                "inputs": {
                  "offset": {
                    "shadow": {
                      "type": "math_number"
                    }
                  },
                  "format": {
                    "shadow": {
                      "type": "text"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'menu_on'
              },
              {
                'kind': 'block',
                'type': 'menu_question',
                "inputs": {
                  "question": {
                    "shadow": {
                      "type": "text"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'menu_choices',
                "inputs": {
                  "choice_strings": {
                    "block": {
                      "type": "lists_create_with",
                      "inputs": {
                        "ADD0":{
                          "block": {
                            "type": "text"
                          }
                        },
                        "ADD1":{
                          "block": {
                            "type": "text"
                          }
                        },
                        "ADD2":{
                          "block": {
                            "type": "text"
                          }
                        }
                      }
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'menu_done'
              },
              {
                'kind': 'block',
                'type': 'menu_result',
                "inputs": {
                  "match_string":{
                    "shadow":{
                      "type": "text"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'menu_choice'
              },
              
            ]
          },
          {
            'kind':'category',
            'name':'Params',
            "contents": [
              {
                'kind': 'block',
                'type': 'param'
              },
              {
                'kind': 'block',
                'type': 'param',
                "inputs": {
                  "param_val":{
                    "shadow":{
                      "type": "text"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'param',
                "inputs": {
                  "param_val":{
                    "shadow":{
                      "type": "math_number"
                    }
                  }
                }
              },
              {
                'kind': 'block',
                'type': 'param',
                "inputs": {
                  "param_val":{
                    "shadow":{
                      "type": "variables_get"
                    }
                  }
                }
              },
            ]
          },
          {
            'kind':'category',
            'name':'Do',
            "contents": [
              {
                'kind': 'block',
                'type': 'do_return',
                "inputs": {
                  "fname":{
                    "shadow":{
                      "type": "procedures_callreturn"
                    }
                  },
                }
              },
              {
                'kind': 'block',
                'type': 'do_noreturn',
                "inputs": {
                  "fname":{
                    "shadow":{
                      "type": "procedures_callnoreturn"
                    }
                  },
                }
              },
              {
                'kind': 'block',
                'type': 'do_return',
                "inputs": {
                  "fname":{
                    "shadow":{
                      "type": "text"
                    }
                  },
                },
                "tooltip": "Do filename"
              },
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
    