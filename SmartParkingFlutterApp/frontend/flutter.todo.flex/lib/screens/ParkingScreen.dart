import 'package:flutter/material.dart';
import 'package:expansion_tile_card/expansion_tile_card.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:realm/realm.dart';
import '../realm/app_services.dart';
import 'package:flutter_todo/realm/realm_services.dart';
import 'package:flutter/material.dart';
import 'package:flutter_todo/components/widgets.dart';
import 'package:flutter_todo/realm/realm_services.dart';
import 'package:provider/provider.dart';

class ParkingRequestScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
      ),
      body: Column(
        children: [
          Padding(
            padding: EdgeInsets.fromLTRB(0, 20, 20, 0),
            child: Text(
              'Parking Request',
              style: TextStyle(
                fontSize: 28.0,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
          Expanded(
            flex: 6,
            child: SingleChildScrollView(
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  OfficeLocationWidget(),
                  Datetime(),

                ],
              ),
            ),
          ),

          Container(
            color: Color(0xFF282C34),
            margin: EdgeInsets.only(bottom: 0), // Set the bottom margin
            padding: EdgeInsets.only(bottom: 30,top: 40),
            child: Column(
              children: [

                CreateItemForm(argument: 'hello',),
                SizedBox(height: 16.0),
                Container(
                  margin: EdgeInsets.only(bottom: 16.0), // Set the bottom margin
                  child: Text(
                    'Releasing your space while you are out of office reduces your colleagues parking stress and maximizes spaces, thank you.',
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.grey,
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class OptionButton extends StatelessWidget {
  final String label;
  final VoidCallback onPressed;

  OptionButton({required this.label, required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: Text(label),
    );
  }
}

class OfficeLocationWidget extends StatefulWidget {
  @override
  _OfficeLocationWidgetState createState() => _OfficeLocationWidgetState();
}

class _OfficeLocationWidgetState extends State<OfficeLocationWidget> {
  String selectedLocation = '';

  void updateSelectedLocation(String location) {
    setState(() {
      selectedLocation = location;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: EdgeInsets.all(10),
          child: Card(
            color: Color(0xFF282C34),
            child: Column(
              children: [

                ListTile(

                  title: Row(
                    children: [
                      Icon(
                        Icons.location_on,
                        color: Colors.black,
                        size: 20,
                      ),
                      SizedBox(width: 8),
                      Text(
                        selectedLocation.isNotEmpty ? selectedLocation : 'Choose Location',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Color(0xFF50ABFF),
                        ),
                      ),
                    ],
                  ),
                  onTap: () {
                    showDialog(
                      context: context,
                      builder: (BuildContext context) {
                        return AlertDialog(
                          title: Text('Select Location',
                            style: TextStyle(
                            fontWeight: FontWeight.bold,
                            color: Colors.white,
                              fontSize: 20,
                          ),
                          ),
                          content: SingleChildScrollView(
                            child: ListBody(
                              children: <Widget>[
                                OptionButton(
                                  label: 'Tech Park' ,
                                  onPressed: () {
                                    updateSelectedLocation('Tech Park');
                                    Navigator.pop(context);
                                  },
                                ),
                                OptionButton(
                                  label: 'Main Campus',
                                  onPressed: () {
                                    updateSelectedLocation('Main Campus');
                                    Navigator.pop(context);
                                  },
                                ),
                                OptionButton(
                                  label: 'Medical College',
                                  onPressed: () {
                                    updateSelectedLocation('Medical College');
                                    Navigator.pop(context);
                                  },
                                ),
                              ],
                            ),
                          ),
                        );
                      },
                    );
                  },
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}


class Datetime extends StatefulWidget {
  @override
  _DatetimeState createState() => _DatetimeState();
}

class _DatetimeState extends State<Datetime> {
  TextEditingController _startTimeController = TextEditingController();
  TextEditingController _endTimeController = TextEditingController();
  TextEditingController _dateController = TextEditingController();
  void save(RealmServices realmServices, BuildContext context) {
    final summary = _startTimeController.text;
    realmServices.createItem(summary, false);
    Navigator.pop(context);
  }
  @override
  void dispose() {
    _startTimeController.dispose();
    _endTimeController.dispose();
    _dateController.dispose();
    super.dispose();
  }

  Future<void> _selectStartTime() async {
    final TimeOfDay? selectedTime = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );

    if (selectedTime != null) {
      setState(() {
        _startTimeController.text = selectedTime.format(context);
        _endTimeController.text = '';
      });
    }
  }

  Future<void> _selectEndTime() async {
    final TimeOfDay? selectedTime = await showTimePicker(
      context: context,
      initialTime: TimeOfDay.now(),
    );

    if (selectedTime != null) {
      setState(() {
        _endTimeController.text = selectedTime.format(context);
      });
    }
  }

  Future<void> _selectDate() async {
    final DateTime? selectedDate = await showDatePicker(
      context: context,
      initialDate: DateTime.now(),
      firstDate: DateTime(DateTime.now().year),
      lastDate: DateTime(DateTime.now().year + 1),
    );

    if (selectedDate != null) {
      setState(() {
        final DateFormat formatter = DateFormat('yyyy-MM-dd');
        final String formattedDate = formatter.format(selectedDate);
        _dateController.text = formattedDate;
      });
    }
  }


  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Select Start Time',
            style: TextStyle(
              fontSize: 20,
              color: Colors.white,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 10),
          TextFormField(
            decoration: InputDecoration(
              labelText: 'Start Time',
              prefixIcon: Icon(Icons.access_time),
            ),
            controller: _startTimeController,
            readOnly: true,
            onTap: _selectStartTime,
            style: TextStyle(color: Colors.white),
          ),
          SizedBox(height: 20),
          Text(
            'Select End Time',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 10),
          TextFormField(
            decoration: InputDecoration(
              labelText: 'End Time',
              prefixIcon: Icon(Icons.access_time),

            ),
            style: TextStyle(color: Colors.white),
            controller: _endTimeController,
            readOnly: true,
            onTap: _selectEndTime,
          ),
          SizedBox(height: 20),
          Text(
            'Select Date',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.white,
            ),
          ),
          SizedBox(height: 10),
          TextFormField(
            decoration: InputDecoration(
              labelText: 'Date',
              prefixIcon: Icon(Icons.calendar_today),
            ),
            style: TextStyle(color: Colors.white),
            controller: _dateController,
            readOnly: true,
            onTap: _selectDate,
          ),
        ],
      ),
    );

  }

}
class CreateItemForm extends StatefulWidget {
  final String argument;

  const CreateItemForm({Key? key, required this.argument}) : super(key: key);

  @override
  createState() => _CreateItemFormState();
}
class _CreateItemFormState extends State<CreateItemForm> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    TextTheme theme = Theme.of(context).textTheme;
    return Container(
      width: 350, // Set the width to match the parent's width
      child: ElevatedButton(
        onPressed: () {
          // Perform parking request
          Consumer<RealmServices>(builder: (context, realmServices, child) {
            return okButton(context, "Create", onPressed: () => save(realmServices, context));
          });
        },
        style: ElevatedButton.styleFrom(
          minimumSize: Size(0, 40), // Set a minimum height for the button
        ),
        child: Text(
          'Request Parking',
          style: TextStyle(
            fontSize: 16,
            color: Colors.white,
          ),
        ),
      ),
    );
  }

  void save(RealmServices realmServices, BuildContext context) {
    if (_formKey.currentState!.validate()) {
      final summary =  widget.argument;
      realmServices.createItem(summary, false);
      Navigator.pop(context);
    }
  }
}


