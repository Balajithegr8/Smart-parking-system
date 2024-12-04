import 'package:flutter/material.dart';
import 'package:mongo_dart/mongo_dart.dart' as mongo;
import 'package:summerproject/bottomnavbar.dart';
import 'package:intl/intl.dart';

class AddBookingScreen extends StatefulWidget {
  final String email;

  AddBookingScreen({required this.email});

  @override
  _AddBookingScreenState createState() => _AddBookingScreenState();
}

class _AddBookingScreenState extends State<AddBookingScreen> {
  List<Map<String, dynamic>> bookings = [];
  String selectedLocation = "UB";
  String selectedSlotType = "Bike";
  String selectedSlot = "";
  String userName = ""; // Empty initial value
  String licenseNo = "";

  @override
  void initState() {
    super.initState();
    fetchBookings();
    fetchUserName(); // Fetch the user's name from the database during initialization
  }

  Future<void> fetchBookings() async {
    try {
      var connectionString =
          "-";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      var collection = db.collection('locations');
      var results = await collection
          .find(mongo.where
          .eq('loc', selectedLocation)
          .eq('v_type', selectedSlotType)
          .eq('booked', 'no'))
          .toList();
      setState(() {
        bookings = results;
      });

      await db.close();
    } catch (e) {
      print("Error fetching bookings: $e");
    }
  }
  Future<void> fetchUserName() async {
    try {
      var connectionString =
          "-";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      var collection = db.collection('users');
      var user = await collection.findOne(mongo.where.eq('email', widget.email));
      if (user != null) {
        setState(() {
          userName = user['name']; // Set the userName to the retrieved name
        });
      }

      await db.close();
    } catch (e) {
      print("Error fetching user's name: $e");
    }
  }

  void updateSelectedLocation(String location) {
    setState(() {
      selectedLocation = location;
      selectedSlot = "";
    });
    fetchBookings(); // Fetch available slots based on the updated location
  }

  void updateSelectedSlot(String slot) {
    setState(() {
      selectedSlot = slot;
    });
  }

  void updateUserName(String name) {
    setState(() {
      userName = name;
    });
  }

  void updateLicenseNo(String license) {
    setState(() {
      licenseNo = license;
    });
  }

  void bookSlot() async {
    if (selectedSlot.isEmpty || userName.isEmpty || licenseNo.isEmpty) {
      // Check if all required fields are filled
      return;
    }

    try {
      var connectionString =
          "--";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      var collection = db.collection('locations');
      await collection.update(
        mongo.where
            .eq('loc', selectedLocation)
            .eq('slot_no', selectedSlot)
            .eq('v_type', selectedSlotType)
            .eq('booked', 'no'),
        mongo.modify.set('booked', 'yes').set('name', userName).set('license_no', licenseNo),
      );

      await db.close();
      showBookingSuccessAlert();
    } catch (e) {
      print("Error updating slot: $e");
    }
  }

  void showBookingSuccessAlert() {
    showDialog(
      context: context,
      builder: (context) {
        return AlertDialog(
          title: Text('Booking Successful'),
          content: Text('Your slot has been booked successfully.'),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('OK'),
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    String formattedDate = DateFormat('EEEE, d MMMM y').format(now);
    return Scaffold(

      body: ListView(
        children: <Widget>[
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
                        'Book your slot here',
                        style: TextStyle(fontSize: 16),
                      ),
                      Text(
                        'Add Bookings',
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
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                SizedBox(height: 20),
                // Show the user's name retrieved from the database
                Container(
                  width: MediaQuery.of(context).size.width * 0.95, // 90% of the screen width
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: Color(0xFF282C34), // Set the desired background color
                    borderRadius: BorderRadius.circular(8),
                  ),
                    child: Text(
                      '$userName',
                      style: TextStyle(fontWeight: FontWeight.bold, color: Colors.blue),
                    ),
                ),
                SizedBox(height: 10),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: TextFormField(
                    onChanged: updateLicenseNo,
                    decoration: InputDecoration(labelText: 'License Number'),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: DropdownButtonFormField<String>(
                    value: selectedLocation,
                    items: ["UB", "TP", "Main Campus"].map((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value),
                      );
                    }).toList(),
                    onChanged: (newValue) => updateSelectedLocation(newValue!),
                    decoration: InputDecoration(labelText: 'Location'),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: DropdownButtonFormField<String>(
                    value: selectedSlotType,
                    items: ["Bike", "Car"].map((String value) {
                      return DropdownMenuItem<String>(
                        value: value,
                        child: Text(value),
                      );
                    }).toList(),
                    onChanged: (newValue) {
                      setState(() {
                        selectedSlotType = newValue!;
                        selectedSlot = "";
                      });
                      fetchBookings(); // Fetch available slots based on the updated vehicle type
                    },
                    decoration: InputDecoration(labelText: 'Slot Type'),
                  ),
                ),
                ListView(
                  physics: NeverScrollableScrollPhysics(), // Prevent the parent ListView from scrolling
                  shrinkWrap: true, // Allow the parent ListView to wrap its children
                  children: [
                    ExpansionTile(
                      title: Text('Available Slots'),
                      children: [
                        SizedBox(
                          height: 200, // Set the desired height for the ExpansionTile content
                          child: ListView.builder(
                            itemCount: bookings.length,
                            itemBuilder: (context, index) {
                              var booking = bookings[index];
                              return ElevatedButton(
                                onPressed: () => updateSelectedSlot(booking['slot_no']),
                                child: Text('Slot No: ${booking['slot_no']}'),
                                style: ElevatedButton.styleFrom(
                                  primary: booking['slot_no'] == selectedSlot ? Colors.green : null,
                                ),
                              );
                            },
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
                SizedBox(
                  width: MediaQuery.of(context).size.width * 0.9, // 90% of the screen width
                  child: ElevatedButton(
                    onPressed: () {
                      bookSlot();
                    },
                    child: Text('Book Slot'),
                  ),
                ),
              ],
            ),
          ),
          NavBar(email: widget.email),
        ],
      ),
    );
  }

}

