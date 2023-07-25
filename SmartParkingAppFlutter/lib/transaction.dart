import 'package:flutter/material.dart';
import 'package:summerproject/bottomnavbar.dart';
import 'package:mongo_dart/mongo_dart.dart' as mongo;
import 'package:intl/intl.dart';
class TransactionScreen extends StatefulWidget {
  final String email;

  TransactionScreen({required this.email});

  @override
  _TransactionScreenState createState() => _TransactionScreenState();
}

class _TransactionScreenState extends State<TransactionScreen> {
  List<Map<String, dynamic>> transactions = [];

  @override
  void initState() {
    super.initState();
    fetchTransactions();
  }

  Future<void> fetchTransactions() async {
    try {
      var connectionString =
          "--";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      var transactionsCollection = db.collection('transaction_app');
      var query = mongo.where.eq('email', widget.email);

      var cursor = transactionsCollection.find(query);
      await cursor.forEach((transaction) {
        transactions.add({
          'date': transaction['date'],
          'amount': transaction['amount'],
          'payment': transaction['payment'],
        });
      });

      await db.close();
      setState(() {});
    } catch (e) {
      print('Error fetching transactions: $e');
    }
  }

  void payNow(int index) {
    if (transactions[index]['payment'] == false) {
      // Your logic for handling the "Pay Now" button action goes here
      // For example, you can implement a payment process.
      // Once payment is done, you can update the payment status in the database.
      setState(() {
        transactions[index]['payment'] = true;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    String formattedDate = DateFormat('EEEE, d MMMM y').format(now);
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
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
                          'Your Past Bookings',
                          style: TextStyle(fontSize: 16),
                        ),
                        Text(
                          'Transactions',
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
            Expanded(
              child: ListView.builder(
                itemCount: transactions.length,
                itemBuilder: (context, index) {
                  var transaction = transactions[index];
                  return ListTile(
                    title: Text('Date: ${transaction['date']}'),
                    subtitle: Text('Amount: ${transaction['amount']}'),
                    trailing: transaction['payment']
                        ? Text('Paid')
                        : ElevatedButton(
                      onPressed: () {
                        payNow(index);
                      },
                      child: Text('Pay Now'),
                    ),
                  );
                },
              ),
            ),
            NavBar(email: widget.email),
          ],
        ),
      ),
    );
  }
}
