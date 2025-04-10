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

function sendDance() {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('sendDance');
  }
}

function sendForward() {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('sendForward');
  }
}

function sendBackward() {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('sendBackward');
  }
}

function sendLeft() {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('sendLeft');
  }
}

function sendRight() {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler('sendRight');
  }
}

// For debugging if needed
function sendData(deviceId, char) {
  console.log('📤 Sending to Flutter:', { deviceId, char });

  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler(
      'onReceivedJsMessage',
      JSON.stringify({ deviceId, char })
    );
  }

  window.parent.postMessage(
    { type: 'sendData', deviceId, char },
    '*'
  );

  const debugLog = document.getElementById('flutterDebugLog');
  if (debugLog) {
    debugLog.innerText = `📤 Sent: '${char}' to Flutter (deviceId: ${deviceId})`;
  }
}

// Dummy implementations for testing output (optional)
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

// Receive deviceId from FlutterFlow
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    console.log('✅ Received deviceId:', deviceId);
  }
});

// Register blocks and generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// Inject Blockly into the page
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Run the generated code manually
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  try {
    eval(code); // Executes functions like sendDance()
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
  }
};

// Initial load
load(ws);
runCode();

// Save state on changes (but don’t auto-run)
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Manual "Run Code" button
document.getElementById('runButton').addEventListener('click', () => {
  runCode();
});
