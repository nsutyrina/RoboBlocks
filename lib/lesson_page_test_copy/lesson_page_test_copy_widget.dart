import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/custom_code/widgets/index.dart' as custom_widgets;
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'lesson_page_test_copy_model.dart';
export 'lesson_page_test_copy_model.dart';

class LessonPageTestCopyWidget extends StatefulWidget {
  const LessonPageTestCopyWidget({super.key});

  static String routeName = 'LessonPageTestCopy';
  static String routePath = '/lessonPageTestCopy';

  @override
  State<LessonPageTestCopyWidget> createState() =>
      _LessonPageTestCopyWidgetState();
}

class _LessonPageTestCopyWidgetState extends State<LessonPageTestCopyWidget> {
  late LessonPageTestCopyModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => LessonPageTestCopyModel());

    logFirebaseEvent('screen_view',
        parameters: {'screen_name': 'LessonPageTestCopy'});
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
          child: Container(
            width: double.infinity,
            height: double.infinity,
            child: custom_widgets.BlocklyWebView(
              width: double.infinity,
              height: double.infinity,
              stringurl: 'https://yourusername.github.io/RoboBlocks/',
            ),
          ),
        ),
      ),
    );
  }
}
