import 'package:flutter/material.dart';

class OutofOffice extends StatefulWidget {
  @override
  _OutofOfficeState createState() => _OutofOfficeState();
}
class _OutofOfficeState extends State<OutofOffice> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Out of Office'),
      ),
      body: Column(
        children: [
          styledText('Record when you don’t need any parking space.'),
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
        'Leave Parking',
        style: TextStyle(
          fontWeight: FontWeight.bold,
          fontSize: 20,
          decorationThickness: 3,
        ),
      ),
    ),
  );
}
