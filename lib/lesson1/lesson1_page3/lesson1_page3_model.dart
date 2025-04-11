import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/index.dart';
import 'lesson1_page3_widget.dart' show Lesson1Page3Widget;
import 'package:flutter/material.dart';

class Lesson1Page3Model extends FlutterFlowModel<Lesson1Page3Widget> {
  ///  Local state fields for this page.

  bool isBTEnabled = true;

  List<BTDevicesStruct> devicesList = [];
  void addToDevicesList(BTDevicesStruct item) => devicesList.add(item);
  void removeFromDevicesList(BTDevicesStruct item) => devicesList.remove(item);
  void removeAtIndexFromDevicesList(int index) => devicesList.removeAt(index);
  void insertAtIndexInDevicesList(int index, BTDevicesStruct item) =>
      devicesList.insert(index, item);
  void updateDevicesListAtIndex(
          int index, Function(BTDevicesStruct) updateFn) =>
      devicesList[index] = updateFn(devicesList[index]);

  ///  State fields for stateful widgets in this page.

  // Stores action output result for [Custom Action - isBluetoothEnabled] action in Lesson1Page3 widget.
  bool? bTenabled;
  // Stores action output result for [Custom Action - findDevices] action in Lesson1Page3 widget.
  List<BTDevicesStruct>? foundDevices;
  // Stores action output result for [Custom Action - isBluetoothEnabled] action in Button widget.
  bool? btEnabledUpdate;
  // Stores action output result for [Custom Action - findDevices] action in Button widget.
  List<BTDevicesStruct>? newDevices;
  // Stores action output result for [Custom Action - connectDevice] action in Container widget.
  bool? connectState;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {}
}
