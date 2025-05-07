import '/flutter_flow/flutter_flow_util.dart';
import 'net_promoter_score_widget.dart' show NetPromoterScoreWidget;
import 'package:flutter/material.dart';

class NetPromoterScoreModel extends FlutterFlowModel<NetPromoterScoreWidget> {
  ///  State fields for stateful widgets in this component.

  // State field(s) for Slider widget.
  double? sliderValue;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    textFieldFocusNode?.dispose();
    textController?.dispose();
  }
}
