/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    type: 'moon_walk_left',
    message0: 'moonWalkLeft steps %1 T %2',
    args0: [
      { type: 'input_value', name: 'STEPS' },
      { type: 'input_value', name: 'T' },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Make the robot walk left',
    helpUrl: '',
  },
  {
    type: 'moon_walk_right',
    message0: 'moonWalkRight steps %1 T %2',
    args0: [
      { type: 'input_value', name: 'STEPS' },
      { type: 'input_value', name: 'T' },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Make the robot walk right',
    helpUrl: '',
  },
  {
    type: 'walk',
    message0: 'walk steps %1 T %2 dir %3',
    args0: [
      { type: 'input_value', name: 'STEPS' },
      { type: 'input_value', name: 'T' },
      { type: 'input_value', name: 'DIR' },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Make the robot walk forward or backward',
    helpUrl: '',
  },
  {
    type: 'dance',
    message0: 'dance',
    args0: [],
    previousStatement: null,
    nextStatement: null,
    colour: 300,
    tooltip: 'Make the robot dance!',
    helpUrl: '',
  },
  {
    type: 'walk_backward',
    message0: 'walk backward steps %1 T %2',
    args0: [
      { type: 'input_value', name: 'STEPS' },
      { type: 'input_value', name: 'T' },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Make the robot walk backward',
    helpUrl: '',
  },
  {
    type: 'sing',  // 🎵 🎤
    message0: 'Sing a Song 🎶',
    args0: [],
    previousStatement: null,
    nextStatement: null,
    colour: 290, // Light blue / purple
    tooltip: 'Make the robot play a song',
    helpUrl: '',
  },
]);

export const blocks = [];
