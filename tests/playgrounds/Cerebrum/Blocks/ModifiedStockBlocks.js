export let moddedBlocks = [
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
        "colour": 230,
        'helpUrl': '%{BKY_MATH_ARITHMETIC_HELPURL}',
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
];