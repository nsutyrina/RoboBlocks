import 'dart:async';

import 'package:collection/collection.dart';

import '/backend/schema/util/firestore_util.dart';

import 'index.dart';
import '/flutter_flow/flutter_flow_util.dart';

class NpsFeedbackRecord extends FirestoreRecord {
  NpsFeedbackRecord._(
    DocumentReference reference,
    Map<String, dynamic> data,
  ) : super(reference, data) {
    _initializeFields();
  }

  // "feedbackText" field.
  String? _feedbackText;
  String get feedbackText => _feedbackText ?? '';
  bool hasFeedbackText() => _feedbackText != null;

  // "timestamp" field.
  DateTime? _timestamp;
  DateTime? get timestamp => _timestamp;
  bool hasTimestamp() => _timestamp != null;

  // "score" field.
  String? _score;
  String get score => _score ?? '';
  bool hasScore() => _score != null;

  void _initializeFields() {
    _feedbackText = snapshotData['feedbackText'] as String?;
    _timestamp = snapshotData['timestamp'] as DateTime?;
    _score = snapshotData['score'] as String?;
  }

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('nps_feedback');

  static Stream<NpsFeedbackRecord> getDocument(DocumentReference ref) =>
      ref.snapshots().map((s) => NpsFeedbackRecord.fromSnapshot(s));

  static Future<NpsFeedbackRecord> getDocumentOnce(DocumentReference ref) =>
      ref.get().then((s) => NpsFeedbackRecord.fromSnapshot(s));

  static NpsFeedbackRecord fromSnapshot(DocumentSnapshot snapshot) =>
      NpsFeedbackRecord._(
        snapshot.reference,
        mapFromFirestore(snapshot.data() as Map<String, dynamic>),
      );

  static NpsFeedbackRecord getDocumentFromData(
    Map<String, dynamic> data,
    DocumentReference reference,
  ) =>
      NpsFeedbackRecord._(reference, mapFromFirestore(data));

  @override
  String toString() =>
      'NpsFeedbackRecord(reference: ${reference.path}, data: $snapshotData)';

  @override
  int get hashCode => reference.path.hashCode;

  @override
  bool operator ==(other) =>
      other is NpsFeedbackRecord &&
      reference.path.hashCode == other.reference.path.hashCode;
}

Map<String, dynamic> createNpsFeedbackRecordData({
  String? feedbackText,
  DateTime? timestamp,
  String? score,
}) {
  final firestoreData = mapToFirestore(
    <String, dynamic>{
      'feedbackText': feedbackText,
      'timestamp': timestamp,
      'score': score,
    }.withoutNulls,
  );

  return firestoreData;
}

class NpsFeedbackRecordDocumentEquality implements Equality<NpsFeedbackRecord> {
  const NpsFeedbackRecordDocumentEquality();

  @override
  bool equals(NpsFeedbackRecord? e1, NpsFeedbackRecord? e2) {
    return e1?.feedbackText == e2?.feedbackText &&
        e1?.timestamp == e2?.timestamp &&
        e1?.score == e2?.score;
  }

  @override
  int hash(NpsFeedbackRecord? e) =>
      const ListEquality().hash([e?.feedbackText, e?.timestamp, e?.score]);

  @override
  bool isValidKey(Object? o) => o is NpsFeedbackRecord;
}
