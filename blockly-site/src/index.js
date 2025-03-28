/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';

// Import blocks
import {blocks as textBlocks} from './blocks/text';
import {blocks as robotBlocks} from './blocks/robot'; // ✅ your new robot block

// Import generators
import {forBlock as textGen} from './generators/javascript';
import {forBlock as robotGen} from './generators/javascript'; // ✅ same file for now

import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register built-in and custom blocks
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks); // ✅ register your new block

// Register generators
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen); // ✅ register the new generator

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Run the generated JavaScript code
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  // Use try/catch to avoid crashing on errors
  try {
    eval(code);
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
  }
};

// Load initial state and run
load(ws);
runCode();

// Save state on workspace changes
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Run code again on meaningful changes
ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type === Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) return;

  runCode();
});
