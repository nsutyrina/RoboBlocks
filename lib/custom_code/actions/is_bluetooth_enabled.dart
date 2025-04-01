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

Future<bool> isBluetoothEnabled() async {
  try {
    // Check if Bluetooth is supported on the device
    if (await FlutterBluePlus.isSupported == false) {
      print("Bluetooth not supported by this device");
      return false; // Return false if Bluetooth is not supported
    }

    // Listen for adapter state changes (if needed, add delay for iOS initialization)
    BluetoothAdapterState currentState =
        await FlutterBluePlus.adapterState.first;

    if (currentState == BluetoothAdapterState.unknown ||
        currentState == BluetoothAdapterState.unavailable) {
      // Delay and re-check the state for iOS initialization issues
      await Future.delayed(Duration(seconds: 2));
      currentState = await FlutterBluePlus.adapterState.first;
    }

    // Check if Bluetooth is ON
    if (currentState == BluetoothAdapterState.on) {
      print("Bluetooth is ON");
      return true;
    } else {
      print("Bluetooth is OFF or unavailable: $currentState");
      return false;
    }
  } catch (e) {
    // Handle any unexpected errors
    print("Error while checking Bluetooth state: $e");
    return false;
  }
}

//Future<bool> isBluetoothEnabled() async {
// Check Bluetooth state using recommended approach
//final state = await FlutterBluePlus.adapterState.first;
//return state == BluetoothAdapterState.on;
//}
