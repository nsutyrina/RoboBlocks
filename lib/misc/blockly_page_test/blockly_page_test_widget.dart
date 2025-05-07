import '/auth/firebase_auth/auth_util.dart';
import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/custom_code/widgets/index.dart' as custom_widgets;
import '/index.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'blockly_page_test_model.dart';
export 'blockly_page_test_model.dart';

class BlocklyPageTestWidget extends StatefulWidget {
  const BlocklyPageTestWidget({
    super.key,
    required this.connectedDevice,
  });

  final BTDevicesStruct? connectedDevice;

  static String routeName = 'BlocklyPageTest';
  static String routePath = '/blocklyPageTest';

  @override
  State<BlocklyPageTestWidget> createState() => _BlocklyPageTestWidgetState();
}

class _BlocklyPageTestWidgetState extends State<BlocklyPageTestWidget> {
  late BlocklyPageTestModel _model;

  final scaffoldKey = GlobalKey<ScaffoldState>();

  @override
  void initState() {
    super.initState();
    _model = createModel(context, () => BlocklyPageTestModel());

    logFirebaseEvent('screen_view',
        parameters: {'screen_name': 'BlocklyPageTest'});
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
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Row(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(20.0, 0.0, 0.0, 0.0),
                    child: FFButtonWidget(
                      onPressed: () async {
                        logFirebaseEvent('BLOCKLY_PAGE_TEST_PAGE__BTN_ON_TAP');
                        logFirebaseEvent('Button_navigate_to');

                        context.pushNamed(HomePageWidget.routeName);
                      },
                      text: '',
                      icon: Icon(
                        Icons.arrow_back_rounded,
                        color: FlutterFlowTheme.of(context).primaryText,
                        size: 25.0,
                      ),
                      options: FFButtonOptions(
                        width: 60.0,
                        height: 25.0,
                        padding: EdgeInsetsDirectional.fromSTEB(
                            16.0, 0.0, 16.0, 0.0),
                        iconAlignment: IconAlignment.start,
                        iconPadding:
                            EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                        color: FlutterFlowTheme.of(context).alternate,
                        textStyle:
                            FlutterFlowTheme.of(context).titleSmall.override(
                                  font: GoogleFonts.interTight(
                                    fontWeight: FlutterFlowTheme.of(context)
                                        .titleSmall
                                        .fontWeight,
                                    fontStyle: FlutterFlowTheme.of(context)
                                        .titleSmall
                                        .fontStyle,
                                  ),
                                  color: Colors.white,
                                  fontSize: 40.0,
                                  letterSpacing: 0.0,
                                  fontWeight: FlutterFlowTheme.of(context)
                                      .titleSmall
                                      .fontWeight,
                                  fontStyle: FlutterFlowTheme.of(context)
                                      .titleSmall
                                      .fontStyle,
                                ),
                        elevation: 0.0,
                        borderSide: BorderSide(
                          color: FlutterFlowTheme.of(context).primaryText,
                        ),
                        borderRadius: BorderRadius.circular(8.0),
                      ),
                    ),
                  ),
                  Padding(
                    padding:
                        EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 20.0, 10.0),
                    child: InkWell(
                      splashColor: Colors.transparent,
                      focusColor: Colors.transparent,
                      hoverColor: Colors.transparent,
                      highlightColor: Colors.transparent,
                      onTap: () async {
                        logFirebaseEvent('BLOCKLY_PAGE_TEST_PAGE_Rob_ON_TAP');
                        logFirebaseEvent('Rob_auth');
                        GoRouter.of(context).prepareAuthEvent();
                        await authManager.signOut();
                        GoRouter.of(context).clearRedirectLocation();

                        context.goNamedAuth(
                            LoginPageWidget.routeName, context.mounted);
                      },
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(8.0),
                        child: Image.asset(
                          'assets/images/Logowithtransparentbackground.png',
                          width: 50.0,
                          height: 50.0,
                          fit: BoxFit.cover,
                          alignment: Alignment(1.0, -1.0),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
              Container(
                width: 600.0,
                height: 650.0,
                child: custom_widgets.BlocklyWebView(
                  width: 600.0,
                  height: 650.0,
                  deviceId: widget.connectedDevice?.id,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
