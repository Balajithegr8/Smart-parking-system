import 'package:flutter/material.dart';
import 'package:flutter_todo/theme.dart';
import 'package:provider/provider.dart';
import 'package:flutter_todo/components/widgets.dart';
import 'package:flutter_todo/realm/app_services.dart';
import 'package:intl/intl.dart';

class LogIn extends StatefulWidget {
  @override
  _LogInState createState() => _LogInState();
}

class _LogInState extends State<LogIn> {
  bool _isLogin = true;
  String? _errorMessage;

  late TextEditingController _emailController;
  late TextEditingController _passwordController;

  @override
  void initState() {
    _emailController = TextEditingController()..addListener(clearError);
    _passwordController = TextEditingController()..addListener(clearError);
    super.initState();
  }

  @override
  void dispose() {
    _emailController.dispose();
    _passwordController.dispose();
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
                  width: constraints.maxWidth, // Set the width to the maximum available width
                  padding: const EdgeInsets.only(left: 20, bottom: 20),
                  color: const Color(0xFF282C34), // Set the background color here
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
            SizedBox(height: 20),
            Form(
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: 20),
                    Container(
                      margin: EdgeInsets.only(left: 30), // Add left margin of 30
                      child: Text(
                        _isLogin ? 'Login' : 'Signup',
                        style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.bold,
                        ),
                        textAlign: TextAlign.left,
                      ),
                    ),
                    loginField(_emailController, labelText: "Enter your Email ID"),
                    Container(
                      margin: EdgeInsets.only(left: 30), // Add left margin of 30
                      child: Text(
                        "Password",
                        style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold , color: Colors.white),
                        textAlign: TextAlign.left,
                      ),
                    ),
                    loginField(_passwordController, labelText: "Enter your Password", obscure: true),

                    Align(
                      alignment: Alignment.center,
                      child: loginButton(context,
                          child: Text(_isLogin ? "Login" : "Sign up"),
                          onPressed: () => _logInOrSignUpUser(context, _emailController.text, _passwordController.text)),
                    ),
                    SizedBox(height: 10),
                    Align(
                      alignment: Alignment.center,
                      child: TextButton(
                        onPressed: () => setState(() => _isLogin = !_isLogin),
                        child: Text(_isLogin ? "Having no account? Sign up here" : 'Already have an account? Log in.'),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            LayoutBuilder(
              builder: (context, constraints) {
                return Container(
                  width: constraints.maxWidth, // Set the width to the maximum available width
                  padding: const EdgeInsets.only(left: 20, bottom: 40,top: 40),
                  color: const Color(0xFF282C34), // Set the background color here
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
                            ,color: Color(0xFF9A9A9A),
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

  void _logInOrSignUpUser(BuildContext context, String email, String password) async {
    final appServices = Provider.of<AppServices>(context, listen: false);
    clearError();
    try {
      if (_isLogin) {
        await appServices.logInUserEmailPassword(email, password);
      } else {
        await appServices.registerUserEmailPassword(email, password);
      }
      Navigator.pushNamed(context, '/');
    } catch (err) {
      setState(() {
        _errorMessage = err.toString();
      });
    }
  }
}
