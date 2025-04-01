import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: FirebaseOptions(
            apiKey: "AIzaSyASr6e6aBmurctI5-RjDxtAUAd_rAWdCEE",
            authDomain: "robo-blocks-05sfx3.firebaseapp.com",
            projectId: "robo-blocks-05sfx3",
            storageBucket: "robo-blocks-05sfx3.firebasestorage.app",
            messagingSenderId: "180979576346",
            appId: "1:180979576346:web:812a0c60b0fc503f162ba3",
            measurementId: "G-VY5CVZKSK0"));
  } else {
    await Firebase.initializeApp();
  }
}
