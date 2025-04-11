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

// ✅ Flutter platform ready → allow messages
window.addEventListener("flutterInAppWebViewPlatformReady", function () {
  isFlutterReady = true;
  logDebug("✅ Flutter platform is ready");
});

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
  if (!isFlutterReady) {
    logDebug("⚠️ Flutter is not ready. Cannot send: " + char);
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

// ✅ Show messages visually too
function logDebug(msg) {
  console.log(msg);
  const debugDiv = document.getElementById('flutterDebugLog');
  if (debugDiv) {
    const line = document.createElement('p');
    line.innerText = msg;
    debugDiv.appendChild(line);
  }
}

// 📩 Receive deviceId from FlutterFlow
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    logDebug(`✅ Received deviceId from Flutter: ${deviceId}`);
  }
});

// 🧱 Register custom blocks and generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// 🧠 Blockly UI & Behavior
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
    eval(code); // ← Runs window.sendDance(), etc.
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
    logDebug("❌ Error in eval: " + e.message);
  }
};

// Load saved blocks on start
load(ws);
runCode();

// Auto-save when workspace changes
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// "Run" button click
document.getElementById('runButton').addEventListener('click', () => {
  runCode();
});
