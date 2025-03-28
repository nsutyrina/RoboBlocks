/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

// Generator for 'add_text'
forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const addText = generator.provideFunction_(
    'addText',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text) {
  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  outputDiv.appendChild(textEl);
}`,
  );
  const code = `${addText}(${text});\n`;
  return code;
};

// Generator for 'moon_walk_left'
forBlock['moon_walk_left'] = function (block, generator) {
  const steps = generator.valueToCode(block, 'STEPS', Order.ATOMIC) || '0';
  const t = generator.valueToCode(block, 'T', Order.ATOMIC) || '0';
  const code = `moonWalkLeft(${steps}, ${t});\n`;
  return code;
};

// Generator for 'moon_walk_right'
forBlock['moon_walk_right'] = function (block, generator) {
  const steps = generator.valueToCode(block, 'STEPS', Order.ATOMIC) || '0';
  const t = generator.valueToCode(block, 'T', Order.ATOMIC) || '0';
  const code = `moonWalkRight(${steps}, ${t});\n`;
  return code;
};
