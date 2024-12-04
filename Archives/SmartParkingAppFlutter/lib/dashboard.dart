import 'package:flutter/material.dart';
import 'package:summerproject/bottomnavbar.dart';
import 'package:mongo_dart/mongo_dart.dart' as mongo;
import 'package:intl/intl.dart';

class Dashboard extends StatefulWidget {
  final String email;

  const Dashboard({required this.email, Key? key}) : super(key: key);

  @override
  _DashboardState createState() => _DashboardState();
}

class _DashboardState extends State<Dashboard> {
  List<Map<String, dynamic>> bookings = [];
  bool isLoading = true;
  @override
  void initState() {
    super.initState();
    fetchBookings();
  }

  Future<void> fetchBookings() async {
    try {
      var connectionString =
          "--";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      var usersCollection = db.collection('users');
      var user = await usersCollection.findOne(mongo.where.eq('email', widget.email));

      if (user != null) {
        var name = user['name'];

        var locationsCollection = db.collection('locations');
        var bookingQuery = mongo.where.eq('name', name);

        var cursor = locationsCollection.find(bookingQuery);
        await cursor.forEach((booking) {
          bookings.add({
            'license_no': booking['license_no'],
            'name': booking['name'],
            'slot_no': booking['slot_no'],
            'v_type': booking['v_type'],
          });
        });
      }

      await db.close();
      setState(() {
        isLoading = false; // Set isLoading to false after fetching is done
      });
      // Trigger a rebuild with the updated bookings list
    } catch (e) {
      print('Error fetching bookings: $e');
    }
  }

  Future<void> endBooking(String name) async {
    try {
      var connectionString =
          "--";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      var locationsCollection = db.collection('locations');
      var bookingQuery = mongo.where.eq('name', name);

      await locationsCollection.update(bookingQuery, {
        r'$unset': {'license_no': true, 'name': true},
        r'$set': {'booked': 'no'},
      });

      await db.close();
      setState(() {
        bookings.removeWhere((booking) => booking['name'] == name);
      });
    } catch (e) {
      print('Error ending booking: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    String formattedDate = DateFormat('EEEE, d MMMM y').format(now);
    return Scaffold(
      body: Column(
        children: <Widget>[
          const SizedBox(height: 50),
          LayoutBuilder(
            builder: (context, constraints) {
              return Container(
                width: constraints.maxWidth,
                padding: const EdgeInsets.only(left: 20, bottom: 20),
                color: const Color(0xFF282C34),
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const SizedBox(height: 10),
                      Text(
                        'Welcome, Back',
                        style: TextStyle(fontSize: 16),
                      ),
                      Text(
                        'Dashboard',
                        style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      const SizedBox(height: 5),
                      Text(formattedDate),
                    ],
                  ),
                ),
              );
            },
          ),
          isLoading
              ? CircularProgressIndicator() // Show the loading circle
          : Expanded(
            child: ListView.builder(
              itemCount: bookings.length,
              itemBuilder: (context, index) {
                var booking = bookings[index];
                return Card(
                  color: Color(0xFF282C34), // Custom color for the card
                  elevation: 8, // Increased elevation for a more prominent shadow effect
                  margin: EdgeInsets.all(16), // Add some margin around the card
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8), // Adding rounded corners to the card
                    side: BorderSide(
                      color: Colors.black, // Custom border color
                      width: 2, // Border width
                    ),
                  ),
                  child: ListTile(
                    title: Text(
                      'Slot No: ${booking['slot_no']}',
                      style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold, fontSize: 20),
                    ),
                    subtitle: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(height: 8), // Increased vertical margin for the text
                        Text(
                          'Name: ${booking['name']}',
                          style: TextStyle(color: Colors.white),
                        ),
                        SizedBox(height: 4), // Increased vertical margin for the text
                        Text(
                          'Car Number: ${booking['license_no']}',
                          style: TextStyle(color: Colors.white),
                        ),
                        SizedBox(height: 4), // Increased vertical margin for the text
                        Text(
                          'Vehicle Type: ${booking['v_type']}',
                          style: TextStyle(color: Colors.white),
                        ),
                      ],
                    ),
                    trailing: ElevatedButton(
                      onPressed: () {
                        endBooking(booking['name']);
                      },
                      style: ElevatedButton.styleFrom(
                        primary: Colors.red, // Custom color for the button
                      ),
                      child: Text(
                        'End Booking',
                        style: TextStyle(color: Colors.white),
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          // Add other widgets here as children of the Column
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            height: MediaQuery.of(context).size.height * 0.9, // Set the height to 90% of the screen height
            child: NavBar(email: widget.email),
          ),
        ],
      ),
    );
  }
}
