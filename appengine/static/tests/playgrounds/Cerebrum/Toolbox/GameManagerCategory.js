export let gameManagerCategory = {
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
          'type': 'is_on',
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
          'type': 'is_off',
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
  }