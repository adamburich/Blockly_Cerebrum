export let controlFlowBlocks = [
  {
    "type": "multi_line_comment",
    "message0": "Multi Line Comment: %1",
    "args0": [
      {
        "type": "field_multilinetext",
        "name": "comment",
        "text": "",
        "spellcheck": false
      }
    ],
    "colour": 75,
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null
  },
  {
    "type": "label",
    "message0": "Label %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "label_name"
      },
      {
        "type": "input_statement",
        "name": "label_body"
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
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


    "colour": 230,
    "tooltip": "Do no return",
    "helpUrl": "",
    "nextStatement": null,
    "previousStatement": null
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
    "nextStatement": null,
    "previousStatement": null,
    "output": null,
  },
];