// Automatic FlutterFlow imports
import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'index.dart'; // Imports other custom actions
import 'package:flutter/material.dart';
// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

import 'package:flutter_blue_plus/flutter_blue_plus.dart';

Future<String> sendData(String deviceId, String commandChar) async {
  try {
    final device = BluetoothDevice.fromId(deviceId);

    // 🧠 Important line that matches the working actions
    final services = await device.discoverServices();

    final characteristic = BluetoothCharacteristic(
      remoteId: device.remoteId,
      serviceUuid: Guid.fromString("FFE0"),
      characteristicUuid: Guid.fromString("FFE2"),
    );

    int byteToSend;
    switch (commandChar) {
      case 'b':
        byteToSend = 0x62;
        break; // Backward
      case 'd':
        byteToSend = 0x32;
        break; // Dance
      case 'f':
        byteToSend = 0x66;
        break; // Forward
      case 'l':
        byteToSend = 0x6C;
        break; // Left
      case 'r':
        byteToSend = 0x69;
        break; // Right
      default:
        return 'Unknown commandChar: $commandChar';
    }

    await characteristic.write([byteToSend], withoutResponse: true);
    return "write success: $commandChar";
  } catch (e) {
    return 'Error sending data: $e';
  }
}
