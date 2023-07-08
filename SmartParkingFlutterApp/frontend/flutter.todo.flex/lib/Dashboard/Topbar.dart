import 'package:flutter/material.dart';
import 'package:flutter_todo/realm/app_services.dart';
import 'package:provider/provider.dart';
import 'package:flutter_todo/realm/realm_services.dart';
import 'package:realm/realm.dart';
class Topbar extends StatelessWidget implements PreferredSizeWidget {
  const Topbar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final realmServices = Provider.of<RealmServices>(context);
    final appServices = Provider.of<AppServices>(context, listen: false);


    return AppBar(
      title: Text('Welcome, User!'),
      automaticallyImplyLeading: false,
      actions: <Widget>[
        IconButton(
          icon: const Icon(Icons.logout),
          tooltip: 'Log out',
          onPressed: () async => await logOut(context, realmServices),
        ),
      ],
    );
  }

  Future<void> logOut(BuildContext context, RealmServices realmServices) async {
    final appServices = Provider.of<AppServices>(context, listen: false);
    appServices.logOut();
    await realmServices.close();
    Navigator.pushNamed(context, '/login');
  }

  @override
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}
