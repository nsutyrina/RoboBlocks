/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
import {blocks as textBlocks} from './blocks/text';
import {blocks as robotBlocks} from './blocks/robot';
import {forBlock as textGen} from './generators/javascript';
import {forBlock as robotGen} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// 🔌 Globals from Flutter
let deviceId = '';
let isFlutterReady = false;
let isDeviceIdReady = false;
const commandQueue = [];

// ✅ Listen for WebView Ready
window.addEventListener('flutterInAppWebViewPlatformReady', () => {
  isFlutterReady = true;
  logDebug('✅ Flutter WebView is ready');
  flushCommandQueue();
});

// ✅ Listen for injected deviceId
window.addEventListener('message', (event) => {
  if (event.data?.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    isDeviceIdReady = true;
    logDebug(`✅ Received deviceId from Flutter: ${deviceId}`);
    flushCommandQueue();
  }
});

// 🧠 Blockly → Flutter commands
window.sendForward = () => sendFlutterCommand('f');
window.sendBackward = () => sendFlutterCommand('b');
window.sendLeft = () => sendFlutterCommand('l');
window.sendRight = () => sendFlutterCommand('r');
window.sendDance = () => sendFlutterCommand('d');
window.sendSing = () => sendFlutterCommand('s');

// 📤 Send to Flutter
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

// 🧹 Send any queued commands
function flushCommandQueue() {
  if (!isFlutterReady || !isDeviceIdReady) return;
  logDebug(`🚀 Flushing ${commandQueue.length} queued command(s)...`);
  while (commandQueue.length > 0) {
    const char = commandQueue.shift();
    sendFlutterCommand(char);
  }
}

// 📝 Debug logger
function logDebug(msg) {
  console.log(msg);
  const logEl = document.getElementById('flutterDebugLog');
  if (logEl) {
    const line = document.createElement('p');
    line.innerText = msg;
    logEl.appendChild(line);
  }
}

// 🔧 Blockly setup
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

const codeDiv = document.getElementById('generatedCode')?.firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, { toolbox });

const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  if (codeDiv) codeDiv.innerText = code;
  if (outputDiv) outputDiv.innerHTML = '';

  try {
    eval(code);
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
    logDebug(`❌ JS Eval Error: ${e.message}`);
  }
};

load(ws);
runCode();

ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

document.getElementById('runButton')?.addEventListener('click', runCode);

