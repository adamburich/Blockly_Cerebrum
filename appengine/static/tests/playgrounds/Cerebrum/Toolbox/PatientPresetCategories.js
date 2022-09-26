export let patientDiagPreset = {
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
  };

export let patientModelPreset = {
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
  };