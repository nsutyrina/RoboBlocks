/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';

import {blocks as textBlocks} from './blocks/text';
import {blocks as robotBlocks} from './blocks/robot'; // Your moonWalkLeft block

import {forBlock as textGen} from './generators/javascript';

import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);

Object.assign(javascriptGenerator.forBlock, textGen);

const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

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

load(ws);
runCode();

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

