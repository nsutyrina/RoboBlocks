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

// 👉 Define global functions that Blockly can call
window.sendForward = () => {
  sendFlutterCommand('f');
};

window.sendBackward = () => {
  sendFlutterCommand('b');
};

window.sendLeft = () => {
  sendFlutterCommand('l');
};

window.sendRight = () => {
  sendFlutterCommand('r');
};

window.sendDance = () => {
  sendFlutterCommand('d');
};

// 🔁 Helper to send data to Flutter
function sendFlutterCommand(char) {
  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler(
      'onReceivedJsMessage',
      JSON.stringify({ deviceId, char })
    );
    console.log(`📤 Sent '${char}' to Flutter (deviceId: ${deviceId})`);
  } else {
    console.warn('⚠️ Not running inside Flutter WebView');
  }
}

// Receive deviceId from FlutterFlow
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    console.log('✅ Received deviceId:', deviceId);
  }
});

// Register custom blocks and generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// Setup Blockly UI
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Run Blockly code manually
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  try {
    eval(code); // ← This calls sendForward(), etc.
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
  }
};

// Load saved workspace and auto-run once
load(ws);
runCode();

// Save state on change (but don’t auto-run)
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Run code when button clicked
document.getElementById('runButton').addEventListener('click', () => {
  runCode();
});

