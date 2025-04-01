import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_web_view.dart';
import 'package:flutter/material.dart';
import 'lesson_template_copy_model.dart';
export 'lesson_template_copy_model.dart';

class LessonTemplateCopyWidget extends StatefulWidget {
  const LessonTemplateCopyWidget({super.key});

  static String routeName = 'LessonTemplateCopy';
  static String routePath = '/lessonTemplateCopy';

  @override
  State<LessonTemplateCopyWidget> createState() =>
      _LessonTemplateCopyWidgetState();
}

class _LessonTemplateCopyWidgetState extends State<LessonTemplateCopyWidget> {
  late LessonTemplateCopyModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => LessonTemplateCopyModel());

    logFirebaseEvent('screen_view',
        parameters: {'screen_name': 'LessonTemplateCopy'});
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
              content:
                  'https://blockly-demo.appspot.com/static/tests/playground.html',
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
