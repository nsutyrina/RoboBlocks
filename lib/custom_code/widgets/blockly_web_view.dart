// Automatic FlutterFlow imports
import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'index.dart'; // Imports other custom widgets
import '/custom_code/actions/index.dart'; // Imports custom actions
import 'package:flutter/material.dart';
// Begin custom widget code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

import '/custom_code/actions/index.dart' as custom_actions;
import 'package:flutter_inappwebview/flutter_inappwebview.dart';
import 'dart:convert';

class BlocklyWebView extends StatefulWidget {
  const BlocklyWebView({
    Key? key,
    this.width,
    this.height,
    this.deviceId,
  }) : super(key: key);

  final double? width;
  final double? height;
  final String? deviceId;

  @override
  _BlocklyWebViewState createState() => _BlocklyWebViewState();
}

class _BlocklyWebViewState extends State<BlocklyWebView> {
  late InAppWebViewController _webViewController;

  // 👇 Hardcoded for testing
  final String hardcodedDeviceId = '48:87:2D:F1:08:B6';

  Future<void> handleBlocklyCommand(String commandChar, String deviceId) async {
    try {
      debugPrint('📦 Command from Blockly: $commandChar');
      switch (commandChar) {
        case 'f':
          await custom_actions.sendForward(BTDevicesStruct(id: deviceId));
          break;
        case 'b':
          await custom_actions.sendBackward(BTDevicesStruct(id: deviceId));
          break;
        case 'l':
          await custom_actions.sendLeft(BTDevicesStruct(id: deviceId));
          break;
        case 'r':
          await custom_actions.sendRight(BTDevicesStruct(id: deviceId));
          break;
        case 'd':
          await custom_actions.sendDance(BTDevicesStruct(id: deviceId));
          break;
        default:
          debugPrint('⚠️ Unknown commandChar: $commandChar');
      }
    } catch (e) {
      debugPrint('🚨 Error handling Blockly command: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: widget.width ?? double.infinity,
      height: widget.height ?? 600,
      child: InAppWebView(
        initialUrlRequest: URLRequest(
          url: Uri.parse('https://nsutyrina.github.io/RoboBlocks/'),
        ),
        onWebViewCreated: (controller) {
          _webViewController = controller;

          // ✅ Hardcode device ID into the WebView
          controller.evaluateJavascript(source: """
            window.postMessage({
              type: 'setDeviceId',
              deviceId: '${hardcodedDeviceId}'
            }, '*');
          """);

          // ✅ Handle JS → Flutter command messages
          controller.addJavaScriptHandler(
            handlerName: 'onReceivedJsMessage',
            callback: (args) async {
              try {
                final message = jsonDecode(args[0]);
                final deviceId = message['deviceId'] ?? '';
                final char = message['char'] ?? '';
                debugPrint('📩 Blockly JS → deviceId=$deviceId, char=$char');

                await handleBlocklyCommand(char, deviceId);
              } catch (e) {
                debugPrint('❌ Failed to parse JS message: $e');
              }
            },
          );
        },
        initialOptions: InAppWebViewGroupOptions(
          crossPlatform: InAppWebViewOptions(
            javaScriptEnabled: true,
            mediaPlaybackRequiresUserGesture: false,
          ),
        ),
      ),
    );
  }
}
