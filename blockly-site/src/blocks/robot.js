/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const blocks = [
  {
    type: 'moon_walk_left',
    message0: 'Moon Walk Left %1 steps %2 delay %3',
    args0: [
      {
        type: 'input_value',
        name: 'STEPS',
        check: 'Number',
      },
      {
        type: 'input_value',
        name: 'DELAY',
        check: 'Number',
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 290,
    tooltip: 'Makes the robot moonwalk left.',
    helpUrl: '',
  },
];
