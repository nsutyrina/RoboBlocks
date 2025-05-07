import '/flutter_flow/flutter_flow_util.dart';
import '/index.dart';
import 'update_account_info_widget.dart' show UpdateAccountInfoWidget;
import 'package:flutter/material.dart';

class UpdateAccountInfoModel extends FlutterFlowModel<UpdateAccountInfoWidget> {
  ///  State fields for stateful widgets in this page.

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
