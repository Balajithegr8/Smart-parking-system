import 'package:flutter/material.dart';
import 'package:summerproject/theme.dart';
import 'package:provider/provider.dart';
import 'package:intl/intl.dart';
import 'package:mongo_dart/mongo_dart.dart' as mongo;

class LogIn extends StatefulWidget {
  @override
  _LogInState createState() => _LogInState();
}

class _LogInState extends State<LogIn> {
  bool _isLogin = true;
  String? _errorMessage;

  late TextEditingController _emailController;
  late TextEditingController _passwordController;
  late TextEditingController _nameController;
  late TextEditingController _occupationController;
  late TextEditingController _phonenumerController;

  @override
  void initState() {
    _emailController = TextEditingController()
      ..addListener(clearError);
    _passwordController = TextEditingController()
      ..addListener(clearError);
    _nameController = TextEditingController()
      ..addListener(clearError);
    _occupationController = TextEditingController()
      ..addListener(clearError);
    _phonenumerController = TextEditingController()
      ..addListener(clearError);
    super.initState();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
    _nameController.dispose();
    _occupationController.dispose();
    _phonenumerController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    DateTime now = DateTime.now();
    String formattedDate = DateFormat('EEEE, d MMMM y').format(now);

    return Scaffold(
      body: Container(
        margin: const EdgeInsets.only(top: 50),
        child: Column(
          children: [
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
                          _isLogin ? 'Login Here' : 'Signup Here',
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
            SizedBox(height: 10),
            Form(
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: 20),
                    Container(
                      margin: EdgeInsets.only(left: 30),
                      // Add left margin of 30
                    ),

                    SizedBox(height: 30),
                    Container(
                      margin: EdgeInsets.symmetric(horizontal: 30),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Email',
                            style: TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.bold,
                            ),
                            textAlign: TextAlign.left,
                          ),
                          SizedBox(height: 10),
                          TextField(
                            controller: _emailController,
                            keyboardType: TextInputType.emailAddress,
                            decoration: InputDecoration(
                              hintText: 'Enter your email',
                              errorText: _errorMessage,
                            ),
                          ),
                        ],
                      ),
                    ),

                    SizedBox(height: 10),
                    Container(
                      margin: EdgeInsets.only(left: 30),
                      // Add left margin of 30
                      child: Text(
                        "Password",
                        style: TextStyle(fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Colors.white),
                        textAlign: TextAlign.left,
                      ),
                    ),
                    // Use PasswordField widget here

                    SizedBox(height: 10),
                    Container(
                      margin: EdgeInsets.symmetric(horizontal: 30),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          SizedBox(height: 10),
                          TextField(
                            controller: _passwordController,
                            obscureText: true,
                            decoration: InputDecoration(
                              hintText: 'Enter your password',
                              errorText: _errorMessage,
                            ),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 10),
                    Align(
                      alignment: Alignment.center,
                      child: TextButton(
                        onPressed: () => setState(() => _isLogin = !_isLogin),
                        child: Text(_isLogin
                            ? "Having no account? Sign up here"
                            : 'Already have an account? Log in.'),
                      ),
                    ),
                  ],
                ),
              ),
            ),
        SizedBox(
        width: MediaQuery.of(context).size.width * 0.8,
        height: 40,
        child : ElevatedButton(
        onPressed: _handleSignUpButtonPressed,
            child: Text('Login'),
          ),
        ),
        SizedBox(height: 50),
            LayoutBuilder(
              builder: (context, constraints) {
                return Container(
                  width: constraints.maxWidth,
                  // Set the width to the maximum available width
                  padding: const EdgeInsets.only(left: 20, bottom: 40, top: 40),
                  color: const Color(0xFF282C34),
                  // Set the background color here
                  margin: const EdgeInsets.only(top: 120),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const SizedBox(height: 10),
                        Text(
                          'Your Email Address are provided by your company . If any problem persists contact your organisation',
                          style: TextStyle(fontSize: 12
                            , color: Color(0xFF9A9A9A),
                          ),
                        ),
                        const SizedBox(height: 5),
                      ],
                    ),
                  ),
                );
              },
            )
          ],
        ),

      ),
    );
  }

  void clearError() {
    if (_errorMessage != null) {
      setState(() {
        // Reset error message when user starts typing
        _errorMessage = null;
      });
    }
  }
  void _handleSignUpButtonPressed() async {
    bool usersCollectionExists = await checkUsersCollection();
    if (usersCollectionExists) {
      // Get the email from the _emailController
      String email = _emailController.text.trim();

      Navigator.pushNamed(context, '/dashboard', arguments: email);
    } else {
      print("The 'users' collection does not exist!");
    }
  }

  Future<bool> checkUsersCollection() async {
    try {
      // Replace this connection URL with your actual MongoDB URL
      var connectionString =
          "-";
      var db = await mongo.Db.create(connectionString);
      await db.open();

      List<String?> collectionNames = await db.getCollectionNames();
      bool usersCollectionExists = collectionNames.contains("users");

      await db.close();

      return usersCollectionExists;
    } catch (e) {
      print("Error checking 'users' collection: $e");
      return false;
    }
  }

}
