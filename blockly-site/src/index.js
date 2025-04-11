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

// 📡 JS → Flutter bridge
function sendCommandToFlutter(char) {
  console.log('📤 Sending to Flutter:', { deviceId, char });

  if (window.flutter_inappwebview) {
    window.flutter_inappwebview.callHandler(
      'onReceivedJsMessage',
      JSON.stringify({ deviceId, char })
    );
  } else {
    console.warn('⚠️ Not running inside Flutter WebView');
  }

  // For browser dev testing
  window.parent.postMessage(
    {
      type: 'sendData',
      deviceId,
      char,
    },
    '*'
  );

  const debugLog = document.getElementById('flutterDebugLog');
  if (debugLog) {
    debugLog.innerText = `📤 Sent: '${char}' to Flutter (deviceId: ${deviceId})`;
  }
}

// Receive deviceId from FlutterFlow
window.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'setDeviceId') {
    deviceId = event.data.deviceId;
    console.log('✅ Received deviceId from Flutter:', deviceId);
  }
});

// Define bridge functions for Blockly to call
function sendForward() {
  sendCommandToFlutter('f');
}
function sendBackward() {
  sendCommandToFlutter('b');
}
function sendLeft() {
  sendCommandToFlutter('l');
}
function sendRight() {
  sendCommandToFlutter('r');
}
function sendDance() {
  sendCommandToFlutter('d');
}

// Register blocks and generators
Blockly.common.defineBlocks(textBlocks);
Blockly.common.defineBlocks(robotBlocks);
Object.assign(javascriptGenerator.forBlock, textGen);
Object.assign(javascriptGenerator.forBlock, robotGen);

// Inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const outputDiv = document.getElementById('output');
const blocklyDiv = document.getElementById('blocklyDiv');
const ws = Blockly.inject(blocklyDiv, {toolbox});

// Run generated Blockly JS code
const runCode = () => {
  const code = javascriptGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
  outputDiv.innerHTML = '';

  try {
    eval(code); // This will run sendDance(), etc.
  } catch (e) {
    outputDiv.innerHTML = `<pre style="color:red;">${e}</pre>`;
  }
};

// Initial load
load(ws);
runCode();

// Save state on block changes (but don't auto-run)
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Run Button
document.getElementById('runButton').addEventListener('click', () => {
  runCode();
});

