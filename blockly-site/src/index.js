/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';

// Import blocks
import {blocks as textBlocks} from './blocks/text';
import {blocks as robotBlocks} from './blocks/robot';

// Import generators
import {forBlock as textGen} from './generators/javascript';
import {forBlock as robotGen} from './generators/javascript'; // using same file

import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register blocks
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);

// Register code generators
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// Inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Run the generated JavaScript
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  try {
    eval(code);
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
  }
};

// Load initial state
load(ws);
runCode();

// Save workspace state and rerun code on changes
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type === Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) return;
  runCode();
});
