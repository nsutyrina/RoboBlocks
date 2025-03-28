import * as Blockly from 'blockly';

// Import blocks
import {blocks as textBlocks} from './blocks/text';
import {blocks as robotBlocks} from './blocks/robot';

// Import generators
import {forBlock as textGen} from './generators/javascript';
import {forBlock as robotGen} from './generators/robot';

import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// Register blocks
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);

// Register generators
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// Set up Blockly workspace
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Run the code
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

// Initial load
load(ws);
runCode();

// Save on changes
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Re-run code on workspace change
ws.addChangeListener((e) => {
  if (e.isUiEvent || e.type === Blockly.Events.FINISHED_LOADING || ws.isDragging()) return;
  runCode();
});

