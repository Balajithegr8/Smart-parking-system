import 'package:flutter/material.dart';

class CalendarWidget extends StatefulWidget {
  @override
  _CalendarWidgetState createState() => _CalendarWidgetState();
}

class _CalendarWidgetState extends State<CalendarWidget> {
  late DateTime _currentDate;
  late DateTime _selectedDate;

  @override
  void initState() {
    super.initState();
    _currentDate = DateTime.now();
    _selectedDate = DateTime.now();
  }

  @override
  Widget build(BuildContext context) {
    DateTime startOfWeek = _currentDate.subtract(Duration(days: _currentDate.weekday - 1));
    DateTime endOfWeek = _currentDate.add(Duration(days: DateTime.daysPerWeek - _currentDate.weekday));

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 25.0),
      child: Column(
        children: [
          _buildMonthHeader(_currentDate),
          _buildWeekHeader(),
          _buildDaysRow(startOfWeek, endOfWeek),
        ],
      ),
    );
  }

  Widget _buildMonthHeader(DateTime dateTime) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 20.0),
      child: Text(
        '${_getMonthName(dateTime.month)} ${dateTime.year}',
        style: TextStyle(
          fontWeight: FontWeight.bold,
          fontSize: 20.0,
        ),
      ),
    );
  }

  Widget _buildWeekHeader() {
    return Container(
      margin: EdgeInsets.only(left: 20.0),
      child: Row(
        children: [
          Expanded(child: _buildWeekHeaderItem('Mon')),
          Expanded(child: _buildWeekHeaderItem('Tue')),
          Expanded(child: _buildWeekHeaderItem('Wed')),
          Expanded(child: _buildWeekHeaderItem('Thu')),
          Expanded(child: _buildWeekHeaderItem('Fri')),
          Expanded(child: _buildWeekHeaderItem('Sat')),
        ],
      ),
    );
  }

  Widget _buildWeekHeaderItem(String day) {
    return Text(
      day,

      style: TextStyle(
        fontSize: 18.0,
      ),
    );
  }

  Widget _buildDaysRow(DateTime startOfWeek, DateTime endOfWeek) {
    List<Widget> dayWidgets = [];

    for (DateTime date = startOfWeek; date.isBefore(endOfWeek); date = date.add(Duration(days: 1))) {
      bool isSelected = date.day == _selectedDate.day &&
          date.month == _selectedDate.month &&
          date.year == _selectedDate.year;
      bool isToday = date.day == DateTime.now().day &&
          date.month == DateTime.now().month &&
          date.year == DateTime.now().year;

      dayWidgets.add(
        Expanded(
          child: GestureDetector(
            onTap: () {
              setState(() {
                _selectedDate = date;
              });
            },
            child: Container(
              margin: const EdgeInsets.symmetric(vertical: 8.0),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: isSelected ? Colors.red : (isToday ? Colors.blue : null),
                shape: BoxShape.circle,
              ),
              child: Text(
                date.day.toString(),
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 18.0,
                ),
              ),
            ),
          ),
        ),
      );
    }

    return Row(children: dayWidgets);
  }
    String _getMonthName(int month) {
    final months = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
    return months[month - 1];
  }
}
