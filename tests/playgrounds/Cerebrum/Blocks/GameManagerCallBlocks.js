export let gameManagerCallBlocks = [
    
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
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "wait",
    "message0": "wait %1",
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
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "goto",
    "message0": "Goto %1",
    "args0": [
      {
        "type": "input_value",
        "name": "label_name"
      }
    ],
    "inputsInline": true,
    "colour": 230,
    "tooltip": "",
    "helpUrl": "",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "waitfor",
    "message0": "waitfor",
    'previousStatement': null,
    'nextStatement': null,
    "colour": 230,
    "tooltip": "",
    "helpUrl": "",
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "is_on",
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
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "is_off",
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "turnoff",
    "message0": "turnoff %1",
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
  },
]