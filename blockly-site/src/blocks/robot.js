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
      {
        type: 'input_value',
        name: 'STEPS',
      },
      {
        type: 'input_value',
        name: 'T',
      },
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
      {
        type: 'input_value',
        name: 'STEPS',
      },
      {
        type: 'input_value',
        name: 'T',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: 'Make the robot walk right',
    helpUrl: '',
  },
]);

export const blocks = [];
