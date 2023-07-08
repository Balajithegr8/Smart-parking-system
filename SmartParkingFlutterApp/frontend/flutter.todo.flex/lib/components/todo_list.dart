import 'package:flutter/material.dart';
import 'package:flutter_todo/components/todo_item.dart';
import 'package:flutter_todo/components/widgets.dart';
import 'package:flutter_todo/realm/schemas.dart';
import 'package:intl/intl.dart';
import 'package:provider/provider.dart';
import 'package:flutter_todo/realm/realm_services.dart';
import 'package:realm/realm.dart';
import 'package:calendar_view/calendar_view.dart';
import 'package:flutter_todo/Dashboard/Calender.dart';
import 'package:flutter_todo/Dashboard/BottomNavbar.dart';
class TodoList extends StatefulWidget {
  const TodoList({Key? key}) : super(key: key);

  @override
  State<TodoList> createState() => _TodoListState();
}

class _TodoListState extends State<TodoList> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final realmServices = Provider.of<RealmServices>(context);
    return Stack(
      children: [
        Column(
          children: [
            CalendarWidget(),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Add your onPressed logic here
              },

              style: ElevatedButton.styleFrom(
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(8.0),
                ),
                textStyle: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
                fixedSize: Size(0.9 * MediaQuery.of(context).size.width, 1.0),
              ),
              child: Text("Check Today's Availability",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                  fontSize: 16.0,
                ),
              ),
            ),

            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 0),
                child: StreamBuilder<RealmResultsChanges<Item>>(
                  stream: realmServices.realm
                      .query<Item>("TRUEPREDICATE SORT(_id ASC)")
                      .changes,
                  builder: (context, snapshot) {
                    final data = snapshot.data;

                    if (data == null) return waitingIndicator();

                    final results = data.results;
                    return ListView.builder(
                      shrinkWrap: true,
                      itemCount: results.realm.isClosed ? 0 : results.length,
                      itemBuilder: (context, index) => results[index].isValid
                          ? TodoItem(results[index])
                          : Container(),
                    );
                  },
                ),

              ),

            ),
            Container(
              decoration: BoxDecoration(
                color: Color(0xFF282C34),
              ),
              height: 75, // Adjust the height as needed
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      IconButton(
                        icon: Icon(Icons.home, color: Colors.white, ),
                        onPressed: () {
                          // Add onPressed functionality for Enforcement
                        },
                      ),
                      Text(
                        'Home',
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),

                  Container(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        IconButton(
                          icon: Icon(Icons.gavel, color: Colors.white,),
                          onPressed: () {
                            // Add onPressed functionality for Enforcement
                            Navigator.pushNamed(context, '/Enforcement');

                          },
                        ),
                        Text(
                          'Enforcement',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    decoration: BoxDecoration(
                      color: Colors.blue,
                      borderRadius: BorderRadius.circular(50),
                    ),
                  child : IconButton(
                    icon: Icon(Icons.add,color: Colors.white,),

                    onPressed: () {
                      Navigator.pushNamed(context, '/Parking');
                      // Add onPressed functionality for Out Of Office
                    },
                  ),
                  ),
                  Container(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        IconButton(
                          icon: Icon(Icons.time_to_leave, color: Colors.white,),
                          onPressed: () {
                            // Add onPressed functionality for Enforcement
                            Navigator.pushNamed(context, '/OutofOffice');

                          },
                        ),
                        Text(
                          'Leave',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                  Container(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        IconButton(
                          icon: Icon(Icons.person, color: Colors.white,),
                          onPressed: () {
                            // Add onPressed functionality for Enforcement
                            Navigator.pushNamed(context, '/Profile');

                          },
                        ),
                        Text(
                          'Profile',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
        realmServices.isWaiting ? waitingIndicator() : Container(),
      ],
    );
  }
}
