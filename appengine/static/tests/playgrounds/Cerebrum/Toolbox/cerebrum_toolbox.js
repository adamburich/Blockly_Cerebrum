
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
                'type': 'comment',
                "inputs": {
                  "comment_val":{
                    "shadow":{
                      "type": "text"
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
                "kind": "block",
                "type": "controls_ifelse"
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
                      "type": "param"
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
                'type': 'align',
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
                'type': 'orient',
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
                'type': 'grab',
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
                'type': 'release',
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
                'type': 'lookatme',
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
                'type': 'lookat',
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
            'name':'GameManager Commands',
            "contents": [
                {
                  'kind': 'block',
                  'type': 'pause',
                  "inputs": {
                    "timeInSeconds": {
                      "shadow": {
                        "type": "math_number",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'waitfor'
                },
                {
                  'kind': 'block',
                  'type': 'ison',
                  "inputs": {
                    "objectName": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'isoff',
                  "inputs": {
                    "objectName": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'turnon',
                  "inputs": {
                    "objectName": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'turnoff',
                  "inputs": {
                    "objectName": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'create',
                  "inputs": {
                    "prefabName": {
                      "shadow": {
                        "type": "text"
                      }
                    },
                    "objectName": {
                      "shadow": {
                        "type": "text"
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'destroy',
                  "inputs": {
                    "objectName": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'debug',
                  "inputs": {
                    "message": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'debug_on'
                },
                {
                  'kind': 'block',
                  'type': 'debug_off'
                },
                {
                  'kind': 'block',
                  'type': 'debugCanvas'
                },
                {
                  'kind': 'block',
                  'type': 'debugCanvas_on'
                },
                {
                  'kind': 'block',
                  'type': 'debugCanvas_off'
                },
                {
                  'kind': 'block',
                  'type': 'debugDelay'
                },
                {
                  'kind': 'block',
                  'type': 'gameDelay',
                  "inputs": {
                    "timeInSeconds": {
                      "shadow": {
                        "type": "math_number",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'prompt',
                  "inputs": {
                    "message": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'speaker1',
                  "inputs": {
                    "message": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
                {
                  'kind': 'block',
                  'type': 'speaker2',
                  "inputs": {
                    "message": {
                      "shadow": {
                        "type": "text",
                      }
                    }
                  }
                },
            ]
          },
          {
            'kind':'category',
            'name':'Patient Setup',
            "contents": [
              {
                'kind': 'block',
                'type': 'variables_set',
                "id":"PatientInfoRootBlock",
                "fields": {
                  "VAR":{
                    "id":"PatientName"
                  }
                },
                "inputs": {
                  "VALUE":{
                    "shadow":{
                      "type": "text"
                    }
                  },
                },
                "next": {
                  "block": {
                    "type": "variables_set",
                    "id": "Fq9z)C]nGs/%Zwo;]fZZ",
                    "fields": {
                      "VAR": {
                        "id": "isEWS"
                      }
                    },
                    "inputs": {
                      "VALUE": {
                        "shadow": {
                          "type": "logic_boolean",
                          "id": "nx@^?d+*sG|@u{Fh2*9g",
                          "fields": {
                            "BOOL": "TRUE"
                          }
                        }
                      }
                    },
                    "next": {
                      "block": {
                        "type": "variables_set",
                        "id": "_UW]uL/Lv;AVIl05TUfY",
                        "fields": {
                          "VAR": {
                            "id": "PatientIC"
                          }
                        },"inputs": {
                          "VALUE": {
                            "shadow": {
                              "type": "text",
                              "id": "QP50:2H%m-*r69pShZ|6",
                              "fields": {
                                "TEXT": ""
                              }
                            }
                          }
                        },
                    "next": {
                      "block": {
                        "type": "variables_set",
                        "id": "5*0Ze41_)S0R`oHaUCNU",
                        "fields": {
                          "VAR": {
                            "id": "BloodType"
                          }
                        },
                        "inputs": {
                          "VALUE": {
                            "shadow": {
                              "type": "text",
                              "id": "QP50:2H%m-*r69pShZ|6",
                              "fields": {
                                "TEXT": ""
                              }
                            }
                          }
                        },
                        "next": {
                          "block": {
                            "type": "variables_set",
                            "id": "/!ePkl1m4K_{uAS{)1fA",
                            "fields": {
                              "VAR": {
                                "id": "AgeInYears"
                              }
                            },
                            "inputs": {
                              "VALUE": {
                                "shadow": {
                                  "type": "math_number",
                                  "id": "^kY%gV{UfQVKO7t$V0W5",
                                  "fields": {
                                    "NUM": 0
                                  }
                                }
                              }
                            },
                            "next": {
                              "block": {
                                "type": "variables_set",
                                "id": "!{t/Qx_dajO71)iD=g.;",
                                "fields": {
                                  "VAR": {
                                    "id": "PatientModel"
                                  }
                                },
                                "inputs": {
                                  "VALUE": {
                                    "shadow": {
                                      "type": "text",
                                      "id": "3`%FW#Q;|VGuLKaZ4oB5",
                                      "fields": {
                                        "TEXT": ""
                                      }
                                    }
                                  }
                                },
                                "next": {
                                  "block": {
                                    "type": "variables_set",
                                    "id": "UGquBB^C|i]4OX4OGIYd",
                                    "fields": {
                                      "VAR": {
                                        "id": "PatientDiag"
                                      }
                                    },
                                    "inputs": {
                                      "VALUE": {
                                        "shadow": {
                                          "type": "text",
                                          "id": "`-(ol76Mee#C.nBDDW|r",
                                          "fields": {
                                            "TEXT": ""
                                          }
                                        }
                                      }
                                    },
                                    "next": {
                                      "block": {
                                        "type": "variables_set",
                                        "id": "v?4SMuViHXyuu0tD}HW7",
                                        "fields": {
                                          "VAR": {
                                            "id": "PatientGender"
                                          }
                                        },
                                        "inputs": {
                                          "VALUE": {
                                            "shadow": {
                                              "type": "text",
                                              "id": "0?}($)*@2E7HTl}/JNjY",
                                              "fields": {
                                                "TEXT": ""
                                              }
                                            }
                                          }
                                        },
                                        "next": {
                                          "block": {
                                            "type": "variables_set",
                                            "id": "v8N6h12qB-V%B^ghI=~|",
                                            "fields": {
                                              "VAR": {
                                                "id": "PatientSummary"
                                              }
                                            },
                                            "inputs": {
                                              "VALUE": {
                                                "shadow": {
                                                  "type": "text",
                                                  "id": "8L?n/]2yGY,zs~W2u,F}",
                                                  "fields": {
                                                    "TEXT": ""
                                                  }
                                                }
                                              }
                                            },
                                            "next": {
                                              "block": {
                                                "type": "variables_set",
                                                "id": "d#)xsKsv(#^^F*I03^(R",
                                                "fields": {
                                                  "VAR": {
                                                    "id": "PatientType"
                                                  }
                                                },
                                                "inputs": {
                                                  "VALUE": {
                                                    "shadow": {
                                                      "type": "text",
                                                      "id": "omd[0W^.nFF)p-qgznNW",
                                                      "fields": {
                                                        "TEXT": ""
                                                      }
                                                    }
                                                  }
                                                },
                                                "next": {
                                                  "block": {
                                                    "type": "variables_set",
                                                    "id": "w4b1^#NEgf{z,bt/6,yl",
                                                    "fields": {
                                                      "VAR": {
                                                        "id": "Temperature"
                                                      }
                                                    },
                                                    "inputs": {
                                                      "VALUE": {
                                                        "shadow": {
                                                          "type": "math_number",
                                                          "id": "]eg_~j_V:tpsF+I0iy~k",
                                                          "fields": {
                                                            "NUM": 0
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "next": {
                                                      "block": {
                                                        "type": "variables_set",
                                                        "id": "gG6bRtkphGVH;T~;|S]^",
                                                        "fields": {
                                                          "VAR": {
                                                            "id": "HR"
                                                          }
                                                        },
                                                        "inputs": {
                                                          "VALUE": {
                                                            "shadow": {
                                                              "type": "math_number",
                                                              "id": "RxTzqw;RIc1Enf/RCG8d",
                                                              "fields": {
                                                                "NUM": 0
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "next": {
                                                          "block": {
                                                            "type": "variables_set",
                                                            "id": "?r`b*^TkrP)Ar(GZ?icn",
                                                            "fields": {
                                                              "VAR": {
                                                                "id": "BP"
                                                              }
                                                            },
                                                            "inputs": {
                                                              "VALUE": {
                                                                "shadow": {
                                                                  "type": "text",
                                                                  "id": "hGA_)^.e%vAj^2XDV5j4",
                                                                  "fields": {
                                                                    "TEXT": ""
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "next": {
                                                              "block": {
                                                                "type": "variables_set",
                                                                "id": "+`J(R*,Ou;0]bO4EOa0o",
                                                                "fields": {
                                                                  "VAR": {
                                                                    "id": "BPSys"
                                                                  }
                                                                },
                                                                "inputs": {
                                                                  "VALUE": {
                                                                    "shadow": {
                                                                      "type": "math_number",
                                                                      "id": "MR;=@o]TTqGNmk#HPC2T",
                                                                      "fields": {
                                                                        "NUM": 0
                                                                      }
                                                                    }
                                                                  }
                                                                },
                                                                "next": {
                                                                  "block": {
                                                                    "type": "variables_set",
                                                                    "id": "~5{x2;Ug7+ryo+:2_cBi",
                                                                    "fields": {
                                                                      "VAR": {
                                                                        "id": "Respiration"
                                                                      }
                                                                    },
                                                                    "inputs": {
                                                                      "VALUE": {
                                                                        "shadow": {
                                                                          "type": "math_number",
                                                                          "id": "MUg$aUU60s(S+?cr8$@K",
                                                                          "fields": {
                                                                            "NUM": 0
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "next": {
                                                                      "block": {
                                                                        "type": "variables_set",
                                                                        "id": "~JA3)vX;dlH#:s9x_}wJ",
                                                                        "fields": {
                                                                          "VAR": {
                                                                            "id": "SpO2"
                                                                          }
                                                                        },
                                                                        "inputs": {
                                                                          "VALUE": {
                                                                            "shadow": {
                                                                              "type": "math_number",
                                                                              "id": "p6]p+aksbj],#8aHp[aB",
                                                                              "fields": {
                                                                                "NUM": 0
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        "next": {
                                                                          "block": {
                                                                            "type": "variables_set",
                                                                            "id": "mD$)JTYUaV3wwJMUrWEL",
                                                                            "fields": {
                                                                              "VAR": {
                                                                                "id": "PainScore"
                                                                              }
                                                                            },
                                                                            "inputs": {
                                                                              "VALUE": {
                                                                                "shadow": {
                                                                                  "type": "text",
                                                                                  "id": "rt}1K25DP0.%P/2BYO-@",
                                                                                  "fields": {
                                                                                    "TEXT": ""
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            "next": {
                                                                              "block": {
                                                                                "type": "variables_set",
                                                                                "id": "fzD91Dr*|wXjf:OX4Je5",
                                                                                "fields": {
                                                                                  "VAR": {
                                                                                    "id": "AbnormalResponse"
                                                                                  }
                                                                                },
                                                                                "inputs": {
                                                                                  "VALUE": {
                                                                                    "shadow": {
                                                                                      "type": "text",
                                                                                      "id": "9P!U`}-}zUhtrEgk6N5d",
                                                                                      "fields": {
                                                                                        "TEXT": ""
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "next": {
                                                                                  "block": {
                                                                                    "type": "variables_set",
                                                                                    "id": "wx/$T/r$30@Iv$97|_5W",
                                                                                    "fields": {
                                                                                      "VAR": {
                                                                                        "id": "PatientSpeak"
                                                                                      }
                                                                                    },
                                                                                    "inputs": {
                                                                                      "VALUE": {
                                                                                        "shadow": {
                                                                                          "type": "text",
                                                                                          "id": "[-?gX%@1XsveO,)-YHF7",
                                                                                          "fields": {
                                                                                            "TEXT": ""
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    },
                                                                                    
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }}
              }
              
            ]
          },
          {
            'kind':'category',
            'name':'Patient Model Setup',
            "contents": [
              {
                'kind': 'block',
                'type': 'variables_set',
                //"id":"PatientName",
                "fields": {
                  "VAR":{
                    "id":"PatientObjName"
                  }
                },
                "inputs": {
                  "VALUE":{
                    "shadow":{
                      "type": "text"
                    }
                  },
                },
                    "next": {
                      "block": {
                        "type": "variables_set",
                        "id": "~A0nU?@RqL{V3Qy*wx$%",
                        "fields": {
                          "VAR": {
                            "id": "PatientBedLoc"
                          }
                        },
                        "inputs": {
                          "VALUE": {
                            "shadow": {
                              "type": "text",
                              "id": "FfUsS{]9HsPuu}UY])[3",
                              "fields": {
                                "TEXT": ""
                              }
                            }
                          }
                        },
                        "next": {
                          "block": {
                            "type": "variables_set",
                            "id": "xPK5%{sI{NP952eJ%eU,",
                            "fields": {
                              "VAR": {
                                "id": "RigType"
                              }
                            },
                            "inputs": {
                              "VALUE": {
                                "shadow": {
                                  "type": "text",
                                  "id": "~vkdPEK)JhuvX`Da6TDr",
                                  "fields": {
                                    "TEXT": ""
                                  }
                                }
                              }
                            },
                            "next": {
                              "block": {
                                "type": "variables_set",
                                "id": "{3KCQ72v8%[Q#yxf{D51",
                                "fields": {
                                  "VAR": {
                                    "id": "HeadAmount"
                                  }
                                },
                                "inputs": {
                                  "VALUE": {
                                    "shadow": {
                                      "type": "math_number",
                                      "id": "$YE~!]TtQ36#e]iGk(N9",
                                      "fields": {
                                        "NUM": 0
                                      }
                                    }
                                  }
                                },
                                "next": {
                                  "block": {
                                    "type": "variables_set",
                                    "id": "H898BC1q/CbBCE#b/_@L",
                                    "fields": {
                                      "VAR": {
                                        "id": "WeightAmount"
                                      }
                                    },
                                    "inputs": {
                                      "VALUE": {
                                        "shadow": {
                                          "type": "math_number",
                                          "id": "tA{P:.s;P~M}Ta;A.QL@",
                                          "fields": {
                                            "NUM": 0
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                
              
            ]
          }
        ]
      }
    