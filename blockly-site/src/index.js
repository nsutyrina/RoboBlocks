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

// 🔌 Hardcoded deviceId fallback (force working setup)
let deviceId = '48:87:2D:F1:08:B6';  // <<<<< change if needed
let isFlutterReady = false;
let isDeviceIdReady = true; // <<<<< force it to true
const commandQueue = [];

// ✅ Flutter WebView is ready
window.addEventListener('flutterInAppWebViewPlatformReady', () => {
  isFlutterReady = true;
  logDebug('✅ Flutter platform is ready');
  flushCommandQueue();
});

// ❌ Removed: message listener for deviceId
// We are forcing deviceId to always be ready

// ✅ Define global functions used by Blockly
window.sendForward = () => sendFlutterCommand('f');
window.sendBackward = () => sendFlutterCommand('b');
window.sendLeft = () => sendFlutterCommand('l');
window.sendRight = () => sendFlutterCommand('r');
window.sendDance = () => sendFlutterCommand('d');

// 🔁 Main messaging function
function sendFlutterCommand(char) {
  if (!isFlutterReady || !isDeviceIdReady) {
    logDebug(`⏳ Queued command '${char}' (waiting for Flutter/deviceId)`);
    commandQueue.push(char);
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

// ⏱️ Flush queued commands
function flushCommandQueue() {
  if (!isFlutterReady || !isDeviceIdReady) return;
  logDebug(`🚀 Flushing ${commandQueue.length} queued command(s)...`);
  while (commandQueue.length > 0) {
    const char = commandQueue.shift();
    sendFlutterCommand(char);
  }
}

// 🧾 Debug log output
function logDebug(msg) {
  console.log(msg);
  const logEl = document.getElementById('flutterDebugLog');
  if (logEl) {
    const line = document.createElement('p');
    line.innerText = msg;
    logEl.appendChild(line);
  }
}

// 🧱 Register all blocks + generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// 🧠 Blockly setup
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, { toolbox });

// ▶️ Run the generated JS code from blocks
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  try {
    eval(code); // ← Runs sendDance(), sendLeft(), etc.
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
    logDebug(`❌ JS Eval Error: ${e.message}`);
  }
};

// 🔁 Load saved blocks once
load(ws);
runCode();

// 💾 Auto-save on block changes
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// ▶️ Manual Run Code button
document.getElementById('runButton').addEventListener('click', () => {
  runCode();
});
