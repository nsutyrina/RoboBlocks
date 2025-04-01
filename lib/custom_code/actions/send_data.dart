// Automatic FlutterFlow imports
import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'index.dart'; // Imports other custom actions
import 'package:flutter/material.dart';
// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

import '/custom_code/actions/index.dart';
import '/flutter_flow/custom_functions.dart';

import 'package:flutter_blue_plus/flutter_blue_plus.dart';

Future<String> sendData(dynamic deviceInfo, String commandChar) async {
  try {
    final deviceId = deviceInfo['id'];
    final device = BluetoothDevice.fromId(deviceId);
    final services = await device.discoverServices();

    final characteristic = BluetoothCharacteristic(
      remoteId: device.remoteId,
      serviceUuid: Guid.fromString("FFE0"),
      characteristicUuid: Guid.fromString("FFE2"),
    );

    final charCode = commandChar.codeUnitAt(0);
    await characteristic.write([charCode], withoutResponse: true);
    return "write success";
  } catch (e) {
    return 'Error sending data: $e';
  }
}
