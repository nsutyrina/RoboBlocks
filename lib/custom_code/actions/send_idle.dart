// Automatic FlutterFlow imports
import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'index.dart'; // Imports other custom actions
import '/flutter_flow/custom_functions.dart'; // Imports custom functions
import 'package:flutter/material.dart';
// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

// Set your action name, define your arguments and return parameter,
// and then add the boilerplate code using the green button on the right!
import 'package:flutter_blue_plus/flutter_blue_plus.dart';

Future<String> sendIdle(BTDevicesStruct deviceInfo) async {
  final device = BluetoothDevice.fromId(deviceInfo.id);
  final services = await device.discoverServices();
  final characteristic = BluetoothCharacteristic(
      remoteId: device.remoteId,
      serviceUuid: Guid.fromString("FFE0"),
      characteristicUuid: Guid.fromString("FFE2"));
  // final characteristic = services[0].characteristics[1];
  //if (isWrite) {
  try {
    await characteristic.write([0x73], withoutResponse: true);
  } catch (e) {
    return '$e';
  }
  return "write success";
  //}
}
