export const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    // Existing categories here...

    // New category for custom blocks
    {
      kind: 'category',
      name: 'Custom Actions',
      categorystyle: 'custom_category',
      contents: [
        {
          kind: 'block',
          type: 'moonwalk_right',
        },
        {
          kind: 'block',
          type: 'moonwalk_left',
        },
        {
          kind: 'block',
          type: 'walk_forward',
        },
        {
          kind: 'block',
          type: 'walk_backward',
        },
      ],
    },
  ],
};

// Custom Block Definitions
Blockly.defineBlocksWithJsonArray([
  {
    "type": "moonwalk_right",
    "message0": "Moonwalk Right %1 steps with time %2",
    "args0": [
      {
        "type": "input_value",
        "name": "STEPS",
        "check": "Number",
      },
      {
        "type": "input_value",
        "name": "TIME",
        "check": "Number",
      },
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Moonwalk right for a specified number of steps and time",
    "helpUrl": "",
  },
  {
    "type": "moonwalk_left",
    "message0": "Moonwalk Left %1 steps with time %2",
    "args0": [
      {
        "type": "input_value",
        "name": "STEPS",
        "check": "Number",
      },
      {
        "type": "input_value",
        "name": "TIME",
        "check": "Number",
      },
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Moonwalk left for a specified number of steps and time",
    "helpUrl": "",
  },
  {
    "type": "walk_forward",
    "message0": "Walk Forward %1 steps with time %2 and direction %3",
    "args0": [
      {
        "type": "input_value",
        "name": "STEPS",
        "check": "Number",
      },
      {
        "type": "input_value",
        "name": "TIME",
        "check": "Number",
      },
      {
        "type": "field_dropdown",
        "name": "DIRECTION",
        "options": [
          ['Forward', '1'],
          ['Backward', '0'],
        ],
      },
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Walk forward or backward based on direction for a number of steps",
    "helpUrl": "",
  },
  {
    "type": "walk_backward",
    "message0": "Walk Backward %1 steps with time %2 and direction %3",
    "args0": [
      {
        "type": "input_value",
        "name": "STEPS",
        "check": "Number",
      },
      {
        "type": "input_value",
        "name": "TIME",
        "check": "Number",
      },
      {
        "type": "field_dropdown",
        "name": "DIRECTION",
        "options": [
          ['Forward', '1'],
          ['Backward', '0'],
        ],
      },
    ],
    "output": "Boolean",
    "colour": 160,
    "tooltip": "Walk backward or forward based on direction for a number of steps",
    "helpUrl": "",
  },
]);
