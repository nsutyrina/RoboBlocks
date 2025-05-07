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

import 'dart:async';
// import 'package:flutter_blue/flutter_blue.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:permission_handler/permission_handler.dart'; // Import for permission handling

import 'dart:io' show Platform;

// StreamSubscription<ScanResult>? _scanSubscription;
StreamSubscription<List<ScanResult>>? _scanSubscription;
bool _isRequestingPermissions = false;

Future<List<BTDevicesStruct>> findDevices() async {
  final devices = <BTDevicesStruct>[];

  // Check if a permission request is already in progress
  if (_isRequestingPermissions) {
    return devices;
  }

  // Set the flag to indicate a request is in progress
  _isRequestingPermissions = true;

  // Only request permissions if the device is Android
  if (Platform.isAndroid) {
    // Request necessary permissions
    final statuses = await [
      Permission.bluetooth,
      Permission.bluetoothScan,
      Permission.bluetoothConnect,
      Permission.bluetoothAdvertise
    ].request();

    // Reset the flag
    _isRequestingPermissions = false;

    // Check if all necessary permissions are granted
    if (!statuses[Permission.bluetooth]!.isGranted ||
        !statuses[Permission.bluetoothScan]!.isGranted ||
        !statuses[Permission.bluetoothConnect]!.isGranted ||
        !statuses[Permission.bluetoothAdvertise]!.isGranted) {
      // Handle the case where one or more permissions are not granted
      print('One or more permissions denied');
      devices.add(BTDevicesStruct(
        name: 'Error: One or more permissions denied',
        id: '',
        rssi: 0,
      ));
      return devices;
    }
  } else {
    // Reset the flag for non-Android devices
    _isRequestingPermissions = false;
  }

  // All necessary permissions granted (or not needed), proceed with scanning
  try {
    // Start scanning with a timeout
    await FlutterBluePlus.startScan(timeout: const Duration(seconds: 4));

    _scanSubscription = FlutterBluePlus.scanResults.listen((results) {
      devices.clear();
      for (ScanResult r in results) {
        final device = r.device;
        devices.add(BTDevicesStruct(
          name: device.platformName,
          id: device.remoteId.toString(),
          rssi: r.rssi,
        ));
        print('${device.platformName} found! rssi: ${r.rssi}');
      }
    });

    // Wait for the scan to complete
    await Future.delayed(const Duration(seconds: 4));
    await FlutterBluePlus.stopScan();
    await _scanSubscription?.cancel();
  } catch (error) {
    print('Error during scan: $error');
    devices.add(BTDevicesStruct(
      name: 'Error: $error',
      id: '',
      rssi: 0,
    ));
  }

  return devices;
}
