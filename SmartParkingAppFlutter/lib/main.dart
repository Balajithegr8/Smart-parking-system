import 'package:flutter/material.dart';
import 'package:summerproject/LoginPage/login.dart';
import 'package:summerproject/theme.dart';
import 'package:summerproject/dashboard.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My App',
      theme: appThemeData(),
      initialRoute: '/',
      routes: {
        '/': (context) => LogIn(),
        '/dashboard': (context) {
          final email = ModalRoute.of(context)!.settings.arguments as String;
          return Dashboard(email: email);
        },
      },
    );
  }
}
