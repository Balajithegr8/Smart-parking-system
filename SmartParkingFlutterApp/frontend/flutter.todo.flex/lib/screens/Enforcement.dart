import 'package:flutter/material.dart';

class Enforcement extends StatefulWidget {
  @override
  _EnforcementState createState() => _EnforcementState();
}

class _EnforcementState extends State<Enforcement> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Enforcement'),
      ),
      body: Column(
        children: [
          styledText('Record of Parking Violations and Reports'),
          buildReportsWidget(),
        ],
      ),
    );
  }
}
Widget styledText(String text) {
  return Container(
    alignment: Alignment.center,
    margin: EdgeInsets.only(top: 20, bottom: 20),
    child: Text(
      text,
      style: TextStyle(
        fontSize: 16,
        fontWeight: FontWeight.bold,
        color: Color(0xFF7F7A75),
      ),
      textAlign: TextAlign.center,
    ),
  );
}

Widget buildReportsWidget() {
  return Container(
    height: 62,
    color: Color(0xFF282C34),
    child: Center(
      child: Text(
        'Reports',
        style: TextStyle(
          fontWeight: FontWeight.bold,
          fontSize: 20,
          decorationThickness: 3,
        ),
      ),
    ),
  );
}
