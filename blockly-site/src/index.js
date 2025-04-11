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
let isFlutterReady = false;

// ✅ Wait until Flutter WebView is fully ready
window.addEventListener('flutterInAppWebViewPlatformReady', () => {
  isFlutterReady = true;
  logDebug('✅ Flutter platform is ready');
});

// 📩 Receive deviceId from FlutterFlow
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    logDebug(`✅ Received deviceId from Flutter: ${deviceId}`);
  }
});

// ✅ Define global functions that Blockly will run
window.sendForward = () => sendFlutterCommand('f');
window.sendBackward = () => sendFlutterCommand('b');
window.sendLeft = () => sendFlutterCommand('l');
window.sendRight = () => sendFlutterCommand('r');
window.sendDance = () => sendFlutterCommand('d');

// 🔁 Send message to Flutter using callHandler
function sendFlutterCommand(char) {
  if (!isFlutterReady) {
    logDebug(`⚠️ Flutter is not ready. Skipping '${char}'`);
    return;
  }

  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler(
      'onReceivedJsMessage',
      JSON.stringify({ deviceId, char })
    );
    logDebug(`📤 Sent '${char}' to Flutter (deviceId: ${deviceId})`);
  } else {
    logDebug('⚠️ Not running inside Flutter WebView');
  }
}

// 🧾 Simple debug log function (visual + console)
function logDebug(msg) {
  console.log(msg);
  const logEl = document.getElementById('flutterDebugLog');
  if (logEl) {
    const line = document.createElement('p');
    line.innerText = msg;
    logEl.appendChild(line);
  }
}

// 🧱 Register blocks + generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// 📦 Blockly UI setup
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// ▶️ Run generated Blockly code
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  try {
    eval(code); // Calls sendDance(), sendLeft(), etc.
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
    logDebug(`❌ JS Eval Error: ${e.message}`);
  }
};

// 🔁 Load workspace and run once
load(ws);
runCode();

// 💾 Auto-save when blocks change
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// ▶️ Manual "Run Code" button
document.getElementById('runButton').addEventListener('click', () => {
  runCode();
});
