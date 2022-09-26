export let controlFlowBlocks = [
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
        "nextStatement": null,
        "previousStatement": null
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
        "previousStatement": null
      },
];