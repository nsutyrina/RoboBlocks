import '/backend/schema/structs/index.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/flutter_flow/flutter_flow_widgets.dart';
import '/custom_code/actions/index.dart' as actions;
import '/custom_code/widgets/index.dart' as custom_widgets;
import 'package:flutter/material.dart';
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
              Container(
                width: 600.0,
                height: 650.0,
                child: custom_widgets.BlocklyWebView(
                  width: 600.0,
                  height: 650.0,
                  deviceId: widget.connectedDevice?.id,
                ),
              ),
              FFButtonWidget(
                onPressed: () async {
                  logFirebaseEvent('BLOCKLY_TEST_FORWARD_BTN_ON_TAP');
                  logFirebaseEvent('Button_custom_action');
                  await actions.sendForward(
                    widget.connectedDevice!,
                  );
                },
                text: 'Forward',
                options: FFButtonOptions(
                  height: 40.0,
                  padding: EdgeInsetsDirectional.fromSTEB(16.0, 0.0, 16.0, 0.0),
                  iconPadding:
                      EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                  color: FlutterFlowTheme.of(context).primary,
                  textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                        fontFamily: 'Inter Tight',
                        color: Colors.white,
                        letterSpacing: 0.0,
                      ),
                  elevation: 0.0,
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
              FFButtonWidget(
                onPressed: () async {
                  logFirebaseEvent('BLOCKLY_PAGE_TEST_PAGE_DANCE_BTN_ON_TAP');
                  logFirebaseEvent('Button_custom_action');
                  await actions.sendDance(
                    widget.connectedDevice!,
                  );
                },
                text: 'Dance',
                options: FFButtonOptions(
                  height: 40.0,
                  padding: EdgeInsetsDirectional.fromSTEB(16.0, 0.0, 16.0, 0.0),
                  iconPadding:
                      EdgeInsetsDirectional.fromSTEB(0.0, 0.0, 0.0, 0.0),
                  color: FlutterFlowTheme.of(context).primary,
                  textStyle: FlutterFlowTheme.of(context).titleSmall.override(
                        fontFamily: 'Inter Tight',
                        color: Colors.white,
                        letterSpacing: 0.0,
                      ),
                  elevation: 0.0,
                  borderRadius: BorderRadius.circular(8.0),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
