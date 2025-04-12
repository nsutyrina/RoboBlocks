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

// 🔌 Force fallback deviceId for now
let deviceId = '48:87:2D:F1:08:B6'; // ⬅️ Hardcoded to always work for now
let isFlutterReady = false;
let isDeviceIdReady = true; // Assume true since we hardcoded
const commandQueue = [];

// ✅ WebView Ready → flush any queued commands
window.addEventListener('flutterInAppWebViewPlatformReady', () => {
  isFlutterReady = true;
  logDebug('✅ Flutter platform is ready');
  flushCommandQueue();
});

// ✅ Blockly block functions
window.sendForward = () => sendFlutterCommand('f');
window.sendBackward = () => sendFlutterCommand('b');
window.sendLeft = () => sendFlutterCommand('l');
window.sendRight = () => sendFlutterCommand('r');
window.sendDance = () => sendFlutterCommand('d');

// 🔁 Send command to Flutter
function sendFlutterCommand(char) {
  if (!isFlutterReady || !isDeviceIdReady) {
    logDebug(`⏳ Queued '${char}' (waiting for Flutter/deviceId)`);
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

// 🚀 Flush queue when platform & ID are ready
function flushCommandQueue() {
  if (!isFlutterReady || !isDeviceIdReady) return;
  logDebug(`🚀 Flushing ${commandQueue.length} queued command(s)...`);
  while (commandQueue.length > 0) {
    const char = commandQueue.shift();
    sendFlutterCommand(char);
  }
}

// 🧾 Log debug to both console + panel
function logDebug(msg) {
  console.log(msg);
  const logEl = document.getElementById('flutterDebugLog');
  if (logEl) {
    const line = document.createElement('p');
    line.innerText = msg;
    logEl.appendChild(line);
  }
}

// 🧱 Register custom blocks + generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// 🔧 Setup Blockly workspace
const codeDiv = document.getElementById('generatedCode')?.firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, { toolbox });

// ▶️ Run generated JS
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  if (codeDiv) codeDiv.innerText = code;
  if (outputDiv) outputDiv.innerHTML = '';

  try {
    eval(code);
  } catch (e) {
    if (outputDiv) {
      outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
    }
    logDebug(`❌ JS Eval Error: ${e.message}`);
  }
};

// ⏫ Load saved workspace
load(ws);
runCode();

// 💾 Save on block change
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// ▶️ Run button click
document.getElementById('runButton')?.addEventListener('click', runCode);

