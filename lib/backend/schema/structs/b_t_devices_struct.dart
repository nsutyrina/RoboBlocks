// ignore_for_file: unnecessary_getters_setters

import 'package:cloud_firestore/cloud_firestore.dart';

import '/backend/schema/util/firestore_util.dart';

import '/flutter_flow/flutter_flow_util.dart';

class BTDevicesStruct extends FFFirebaseStruct {
  BTDevicesStruct({
    String? name,
    String? id,
    int? rssi,
    FirestoreUtilData firestoreUtilData = const FirestoreUtilData(),
  })  : _name = name,
        _id = id,
        _rssi = rssi,
        super(firestoreUtilData);

  // "name" field.
  String? _name;
  String get name => _name ?? '';
  set name(String? val) => _name = val;

  bool hasName() => _name != null;

  // "id" field.
  String? _id;
  String get id => _id ?? '';
  set id(String? val) => _id = val;

  bool hasId() => _id != null;

  // "rssi" field.
  int? _rssi;
  int get rssi => _rssi ?? 0;
  set rssi(int? val) => _rssi = val;

  void incrementRssi(int amount) => rssi = rssi + amount;

  bool hasRssi() => _rssi != null;

  static BTDevicesStruct fromMap(Map<String, dynamic> data) => BTDevicesStruct(
        name: data['name'] as String?,
        id: data['id'] as String?,
        rssi: castToType<int>(data['rssi']),
      );

  static BTDevicesStruct? maybeFromMap(dynamic data) => data is Map
      ? BTDevicesStruct.fromMap(data.cast<String, dynamic>())
      : null;

  Map<String, dynamic> toMap() => {
        'name': _name,
        'id': _id,
        'rssi': _rssi,
      }.withoutNulls;

  @override
  Map<String, dynamic> toSerializableMap() => {
        'name': serializeParam(
          _name,
          ParamType.String,
        ),
        'id': serializeParam(
          _id,
          ParamType.String,
        ),
        'rssi': serializeParam(
          _rssi,
          ParamType.int,
        ),
      }.withoutNulls;

  static BTDevicesStruct fromSerializableMap(Map<String, dynamic> data) =>
      BTDevicesStruct(
        name: deserializeParam(
          data['name'],
          ParamType.String,
          false,
        ),
        id: deserializeParam(
          data['id'],
          ParamType.String,
          false,
        ),
        rssi: deserializeParam(
          data['rssi'],
          ParamType.int,
          false,
        ),
      );

  @override
  String toString() => 'BTDevicesStruct(${toMap()})';

  @override
  bool operator ==(Object other) {
    return other is BTDevicesStruct &&
        name == other.name &&
        id == other.id &&
        rssi == other.rssi;
  }

  @override
  int get hashCode => const ListEquality().hash([name, id, rssi]);
}

BTDevicesStruct createBTDevicesStruct({
  String? name,
  String? id,
  int? rssi,
  Map<String, dynamic> fieldValues = const {},
  bool clearUnsetFields = true,
  bool create = false,
  bool delete = false,
}) =>
    BTDevicesStruct(
      name: name,
      id: id,
      rssi: rssi,
      firestoreUtilData: FirestoreUtilData(
        clearUnsetFields: clearUnsetFields,
        create: create,
        delete: delete,
        fieldValues: fieldValues,
      ),
    );

BTDevicesStruct? updateBTDevicesStruct(
  BTDevicesStruct? bTDevices, {
  bool clearUnsetFields = true,
  bool create = false,
}) =>
    bTDevices
      ?..firestoreUtilData = FirestoreUtilData(
        clearUnsetFields: clearUnsetFields,
        create: create,
      );

void addBTDevicesStructData(
  Map<String, dynamic> firestoreData,
  BTDevicesStruct? bTDevices,
  String fieldName, [
  bool forFieldValue = false,
]) {
  firestoreData.remove(fieldName);
  if (bTDevices == null) {
    return;
  }
  if (bTDevices.firestoreUtilData.delete) {
    firestoreData[fieldName] = FieldValue.delete();
    return;
  }
  final clearFields =
      !forFieldValue && bTDevices.firestoreUtilData.clearUnsetFields;
  if (clearFields) {
    firestoreData[fieldName] = <String, dynamic>{};
  }
  final bTDevicesData = getBTDevicesFirestoreData(bTDevices, forFieldValue);
  final nestedData = bTDevicesData.map((k, v) => MapEntry('$fieldName.$k', v));

  final mergeFields = bTDevices.firestoreUtilData.create || clearFields;
  firestoreData
      .addAll(mergeFields ? mergeNestedFields(nestedData) : nestedData);
}

Map<String, dynamic> getBTDevicesFirestoreData(
  BTDevicesStruct? bTDevices, [
  bool forFieldValue = false,
]) {
  if (bTDevices == null) {
    return {};
  }
  final firestoreData = mapToFirestore(bTDevices.toMap());

  // Add any Firestore field values
  bTDevices.firestoreUtilData.fieldValues
      .forEach((k, v) => firestoreData[k] = v);

  return forFieldValue ? mergeNestedFields(firestoreData) : firestoreData;
}

List<Map<String, dynamic>> getBTDevicesListFirestoreData(
  List<BTDevicesStruct>? bTDevicess,
) =>
    bTDevicess?.map((e) => getBTDevicesFirestoreData(e, true)).toList() ?? [];
