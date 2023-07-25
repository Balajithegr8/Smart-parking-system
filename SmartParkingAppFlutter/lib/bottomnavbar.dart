import 'package:flutter/material.dart';
import 'package:summerproject/dashboard.dart';
import 'package:summerproject/addbook.dart';
import 'package:summerproject/transaction.dart';

class NavBar extends StatefulWidget {
  final String email; // Add email as a parameter

  NavBar({required this.email});

  @override
  _NavBarState createState() => _NavBarState();
}

class _NavBarState extends State<NavBar> {
  int _selectedIndex = 1; // Set the default index to 1 (Add Booking)

  @override
  Widget build(BuildContext context) {
    return Positioned(
      left: 0,
      right: 0,
      bottom: 0,
      child: Container(
        color: Color(0xFF282C34), // Set background color to #282C34
        child: BottomNavigationBar(
          currentIndex: _selectedIndex,
          backgroundColor: Colors.transparent, // Set background color of BottomNavigationBar to transparent
          unselectedItemColor: Color(0xFF808080), // Set unselected item color to #808080
          selectedItemColor: Color(0xFF808080), // Set selected item color to #808080
          onTap: (int index) {
            if (index == 0) {
              // If Today icon is clicked, navigate to the Dashboard
              Navigator.pushReplacementNamed(context, '/dashboard', arguments: widget.email);
            } else if (index == 1) {
              // If Add Booking icon is clicked
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => AddBookingScreen(email: widget.email), // Pass the email from Dashboard
                ),
              );
            } else if (index == 2) {
              // If Transaction icon is clicked
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => TransactionScreen(email: widget.email), // Pass the email from Dashboard
                ),
              );
            } else {
              setState(() {
                _selectedIndex = index;
              });
            }
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.calendar_today),
              label: 'Today',
            ),
            BottomNavigationBarItem(
              icon: Container(
                padding: EdgeInsets.all(6),
                decoration: BoxDecoration(
                  color: Colors.blue, // Set background color to blue
                  shape: BoxShape.circle,
                ),
                child: Icon(
                  Icons.add,
                  color: Colors.white, // Set icon color to white
                ),
              ),
              label: 'Add Booking',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.swap_horizontal_circle),
              label: 'Transaction',
            ),
          ],
        ),
      ),
    );
  }
}
