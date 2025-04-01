import 'package:flutter/material.dart';

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
}
