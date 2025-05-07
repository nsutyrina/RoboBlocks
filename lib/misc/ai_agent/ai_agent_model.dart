import '/flutter_flow/flutter_flow_util.dart';
import 'ai_agent_widget.dart' show AiAgentWidget;
import 'package:flutter/material.dart';

class AiAgentModel extends FlutterFlowModel<AiAgentWidget> {
  ///  Local state fields for this page.

  List<String> questionsAndAnswers = [];
  void addToQuestionsAndAnswers(String item) => questionsAndAnswers.add(item);
  void removeFromQuestionsAndAnswers(String item) =>
      questionsAndAnswers.remove(item);
  void removeAtIndexFromQuestionsAndAnswers(int index) =>
      questionsAndAnswers.removeAt(index);
  void insertAtIndexInQuestionsAndAnswers(int index, String item) =>
      questionsAndAnswers.insert(index, item);
  void updateQuestionsAndAnswersAtIndex(int index, Function(String) updateFn) =>
      questionsAndAnswers[index] = updateFn(questionsAndAnswers[index]);

  ///  State fields for stateful widgets in this page.

  // Stores action output result for [AI Agent - Send Message to Rob the Bot] action in AiAgent widget.
  String? firstPrompt;
  // State field(s) for TextField widget.
  FocusNode? textFieldFocusNode;
  TextEditingController? textController;
  String? Function(BuildContext, String?)? textControllerValidator;
  // Stores action output result for [AI Agent - Send Message to Rob the Bot] action in LoginButton widget.
  String? aiAnswer;

  @override
  void initState(BuildContext context) {}

  @override
  void dispose() {
    textFieldFocusNode?.dispose();
    textController?.dispose();
  }
}
