import 'package:flutter/material.dart';
import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';

class FFAppState extends ChangeNotifier {
  static FFAppState _instance = FFAppState._internal();

  factory FFAppState() {
    return _instance;
  }

  FFAppState._internal();

  static void reset() {
    _instance = FFAppState._internal();
  }

  Future initializePersistedState() async {}

  void update(VoidCallback callback) {
    callback();
    notifyListeners();
  }

  /// Login count
  int _loginCount = 0;
  int get loginCount => _loginCount;
  set loginCount(int value) {
    _loginCount = value;
  }

  bool _npsShown = false;
  bool get npsShown => _npsShown;
  set npsShown(bool value) {
    _npsShown = value;
  }

  String _feedbackText = '';
  String get feedbackText => _feedbackText;
  set feedbackText(String value) {
    _feedbackText = value;
  }

  DateTime? _timestamp;
  DateTime? get timestamp => _timestamp;
  set timestamp(DateTime? value) {
    _timestamp = value;
  }

  String _score = '';
  String get score => _score;
  set score(String value) {
    _score = value;
  }

  /// Gets updated to true at the end of lesson 1 and once a device is connected
  /// through the 'connect robot' button.
  ///
  /// Need to add handling for if connection is lost.
  bool _isDeviceConnected = false;
  bool get isDeviceConnected => _isDeviceConnected;
  set isDeviceConnected(bool value) {
    _isDeviceConnected = value;
  }

  BTDevicesStruct _connectedDevice = BTDevicesStruct();
  BTDevicesStruct get connectedDevice => _connectedDevice;
  set connectedDevice(BTDevicesStruct value) {
    _connectedDevice = value;
  }

  void updateConnectedDeviceStruct(Function(BTDevicesStruct) updateFn) {
    updateFn(_connectedDevice);
  }
}
