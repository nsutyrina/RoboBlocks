/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
export const forBlock = Object.create(null);

// Generator for 'add_text'
forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {
      const outputDiv = document.getElementById('output');
      const textEl = document.createElement('p');
      textEl.innerText = text;
      outputDiv.appendChild(textEl);
    }`
  );
  const code = `${addText}(${text});\n`;
  return code;
};

// Generator for 'moon_walk_left'
forBlock['moon_walk_left'] = function (block, generator) {
  return "sendData('l');\n";
};

// Generator for 'moon_walk_right'
forBlock['moon_walk_right'] = function (block, generator) {
  return "sendData('r');\n";
};

// Generator for 'walk'
forBlock['walk'] = function (block, generator) {
  return "sendData('w');\n";
};
