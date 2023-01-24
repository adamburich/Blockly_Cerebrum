export let inputBlocks = [
    {
        'type': 'text_multiline',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_multilinetext',
            'name': 'TEXT',
            'text': '',
          },
        ],
        'output': 'String',
        'style': 'text_blocks',
        'helpUrl': '%{BKY_TEXT_TEXT_HELPURL}',
        'tooltip': '%{BKY_TEXT_TEXT_TOOLTIP}',
        'extensions': [
          'parent_tooltip_when_inline',
        ],
      },
];