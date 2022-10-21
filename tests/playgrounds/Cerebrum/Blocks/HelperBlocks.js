export let helperBlocks = [
  {
    "type": "empty_line",
    "message0": "",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": ""
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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

    "nextStatement": null,
    "colour": 345,
    "tooltip": "Param block - Goes attach to an ObjectMessageHandler call",
    "helpUrl": "",
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
  },

]