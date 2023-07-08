import 'package:flutter/material.dart';
class Profile extends StatefulWidget {
  const Profile({Key? key}) : super(key: key);

  @override
  _ProfileState createState() => _ProfileState();
}
class _ProfileState extends State<Profile> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Profile'),
      ),
      body: Center(
        child: Column(
        children: [
          styledText('View and Edit your Profile'),
          getUserInformation(),
          getWalletBalance(),
          getAddWalletButton(),
          getEditProfileButton(),
        ],
      ),
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
Widget getUserInformation() {
  return Container(
    padding: EdgeInsets.all(16),
    child: Column(
      children: [
        CircleAvatar(
          radius: 100,
        ),
        SizedBox(height: 16),
        Text('John Doe', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
        SizedBox(height: 10),
        Text('john.doe@example.com', style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
        SizedBox(height: 10),
        Text('1234567890', style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
        SizedBox(height: 10),
        Text('123, ABC Street, XYZ City', style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold)),
      ],
    ),
  );
}

Widget getWalletBalance() {
  return Container(
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Container(
          alignment: Alignment.center,
          child: Column(
            children: [
              Text('Wallet Balance', style: TextStyle(fontSize: 18,color: Color(0xFF4886FF))),
              Text('\$100', style: TextStyle(fontSize: 24)),
              // Other wallet-related information
            ],
          ),
        ),
      ],
    ),
  );
}
Widget getAddWalletButton() {
  return SizedBox(
    width: 300,
    child: Container(
      padding: EdgeInsets.all(16),
      child: ElevatedButton(
        onPressed: () {
          // Logic to handle the "Add Wallet Balance" button press
          // Implement the desired functionality here
        },
        style: ElevatedButton.styleFrom(
          primary: Colors.blue, // Set the button's background color
          onPrimary: Colors.white, // Set the text color
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8), // Set the padding
          textStyle: TextStyle(fontSize: 18), // Set the text style
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8), // Set the border radius
          ),
        ),
        child: Text('Add Wallet Balance'),
      ),
    ),
  );
}

Widget getEditProfileButton() {
  return SizedBox(
    width: 300,
    child: Container(
      padding: EdgeInsets.all(16),
      child: ElevatedButton(
        onPressed: () {
          // Logic to handle the "Add Wallet Balance" button press
          // Implement the desired functionality here
        },
        style: ElevatedButton.styleFrom(
          primary: Colors.blue, // Set the button's background color
          onPrimary: Colors.white, // Set the text color
          padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8), // Set the padding
          textStyle: TextStyle(fontSize: 18), // Set the text style
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8), // Set the border radius
          ),
        ),
        child: Text('Edit Profile'),
      ),
    ),
  );
}
