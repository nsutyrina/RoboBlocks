import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_web_view.dart';
import 'package:flutter/material.dart';
import 'lesson_page_test_model.dart';
export 'lesson_page_test_model.dart';

class LessonPageTestWidget extends StatefulWidget {
  const LessonPageTestWidget({super.key});

  static String routeName = 'LessonPageTest';
  static String routePath = '/lessonPageTest';

  @override
  State<LessonPageTestWidget> createState() => _LessonPageTestWidgetState();
}

class _LessonPageTestWidgetState extends State<LessonPageTestWidget> {
  late LessonPageTestModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => LessonPageTestModel());

    logFirebaseEvent('screen_view',
        parameters: {'screen_name': 'LessonPageTest'});
    WidgetsBinding.instance.addPostFrameCallback((_) => safeSetState(() {}));
  }

  @override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).unfocus();
        FocusManager.instance.primaryFocus?.unfocus();
      },
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: Color(0xFFF8EFE1),
        body: SafeArea(
          top: true,
          child: Align(
            alignment: AlignmentDirectional(0.0, 1.0),
            child: FlutterFlowWebView(
              content: 'https://nsutyrina.github.io/RoboBlocks/',
              bypass: false,
              height: 634.9,
              verticalScroll: false,
              horizontalScroll: false,
            ),
          ),
        ),
      ),
    );
  }
}
