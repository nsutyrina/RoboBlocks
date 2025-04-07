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
import {forBlock as robotGen} from './generators/javascript';

import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// 🔌 GLOBAL deviceId injected by FlutterFlow
let deviceId = '';

function sendData(deviceId, char) {
  // This is the important part: send to Flutter via InAppWebView
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('blocklyMessage', char);
  } else {
    console.warn('Not running inside Flutter WebView');
  }

  // Still send to parent for web testing/debugging
  window.parent.postMessage(
    {
      type: 'sendData',
      deviceId,
      char,
    },
    '*'
  );
}

// Dummy implementations for local testing (optional to keep)
function moonWalkLeft(steps, t) {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = `moonWalkLeft called with steps=${steps}, T=${t}`;
  outputDiv.appendChild(textEl);
}
function moonWalkRight(steps, t) {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = `moonWalkRight called with steps=${steps}, T=${t}`;
  outputDiv.appendChild(textEl);
}
function walk(steps, t, dir) {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = `walk called with steps=${steps}, T=${t}, dir=${dir}`;
  outputDiv.appendChild(textEl);
}
function dance() {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = `dance called`;
  outputDiv.appendChild(textEl);
}
function walkBackward() {
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = `walkBackward called`;
  outputDiv.appendChild(textEl);
}

// Receive the device ID from FlutterFlow
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    console.log('Received deviceId:', deviceId);
  }
});

// Register blocks
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);

// Register code generators
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// Inject Blockly into page
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

// Save and run on any change
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
