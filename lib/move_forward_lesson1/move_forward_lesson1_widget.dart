import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import 'package:flutter/material.dart';
import 'move_forward_lesson1_model.dart';
export 'move_forward_lesson1_model.dart';

class MoveForwardLesson1Widget extends StatefulWidget {
  const MoveForwardLesson1Widget({super.key});

  static String routeName = 'MoveForwardLesson1';
  static String routePath = '/moveForwardLesson1';

  @override
  State<MoveForwardLesson1Widget> createState() =>
      _MoveForwardLesson1WidgetState();
}

class _MoveForwardLesson1WidgetState extends State<MoveForwardLesson1Widget> {
  late MoveForwardLesson1Model _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => MoveForwardLesson1Model());

    logFirebaseEvent('screen_view',
        parameters: {'screen_name': 'MoveForwardLesson1'});
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
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        appBar: AppBar(
          backgroundColor: FlutterFlowTheme.of(context).primary,
          automaticallyImplyLeading: false,
          title: Text(
            'Lesson 1: Move Forward',
            style: FlutterFlowTheme.of(context).headlineMedium.override(
                  fontFamily: 'Inter Tight',
                  color: Colors.white,
                  fontSize: 22.0,
                  letterSpacing: 0.0,
                ),
          ),
          actions: [],
          centerTitle: false,
          elevation: 2.0,
        ),
        body: SafeArea(
          top: true,
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [],
          ),
        ),
      ),
    );
  }
}
