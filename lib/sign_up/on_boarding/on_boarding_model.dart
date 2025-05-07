import '/flutter_flow/flutter_flow_util.dart';
import '/index.dart';
import 'on_boarding_widget.dart' show OnBoardingWidget;
import 'package:flutter/material.dart';

class OnBoardingModel extends FlutterFlowModel<OnBoardingWidget> {
  ///  State fields for stateful widgets in this page.

  final formKey = GlobalKey<FormState>();
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;
  String? _textControllerValidator(BuildContext context, String? val) {
    if (val == null || val.isEmpty) {
      return 'Name is required';
    }

    return null;
  }

  // Stores action output result for [Validate Form] action in Button widget.
  bool? name;

  @override
  void initState(BuildContext context) {
    textControllerValidator = _textControllerValidator;
  }

  @override
  void dispose() {
    textFieldFocusNode?.dispose();
    textController?.dispose();
  }
}
