import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/index.dart';
import 'connect_b_t_widget.dart' show ConnectBTWidget;
import 'package:flutter/material.dart';

class ConnectBTModel extends FlutterFlowModel<ConnectBTWidget> {
  ///  Local state fields for this page.

  List<BTDevicesStruct> devicesList = [];
  void addToDevicesList(BTDevicesStruct item) => devicesList.add(item);
  void removeFromDevicesList(BTDevicesStruct item) => devicesList.remove(item);
  void removeAtIndexFromDevicesList(int index) => devicesList.removeAt(index);
  void insertAtIndexInDevicesList(int index, BTDevicesStruct item) =>
      devicesList.insert(index, item);
  void updateDevicesListAtIndex(
          int index, Function(BTDevicesStruct) updateFn) =>
      devicesList[index] = updateFn(devicesList[index]);

  bool btEnabled = true;

  ///  State fields for stateful widgets in this page.

  // Stores action output result for [Custom Action - isBluetoothEnabled] action in ConnectBT widget.
  bool? isBTEnabled;
  // Stores action output result for [Custom Action - findDevices] action in ConnectBT widget.
  List<BTDevicesStruct>? devices;
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
