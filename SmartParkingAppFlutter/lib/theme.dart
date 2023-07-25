import 'package:flutter/material.dart';

appThemeData() {
  return ThemeData(
    primarySwatch: forestGreenColor,
    backgroundColor: const Color(0xFF282C34),
    colorScheme: ColorScheme.fromSwatch(primarySwatch: forestGreenColor),
    errorColor: darkRedColor,
    textTheme: const TextTheme(
      bodyText1: TextStyle(color: Color(0xFFFFFFFF)),
      bodyText2: TextStyle(color: Color(0xFFFFFFFF)),
    ),
  ).copyWith(
    textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(
        primary: const Color(0xFF50ABFF),
        foregroundColor: const Color(0xFF50ABFF),
      ),
    ),
    checkboxTheme: CheckboxThemeData(
      checkColor: MaterialStateProperty.all(const Color(0xFF50ABFF)),
      fillColor: MaterialStateProperty.all(forestGreenColor),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        foregroundColor: MaterialStateProperty.all<Color>(const Color(0xFFFFFFFF)),
        textStyle: MaterialStateProperty.all<TextStyle>(
          const TextStyle(color: const Color(0xFFFFFFFF)),
        ),
      ),
    ),
    cardColor: const Color(0xFF1E222B),
    dividerColor: const Color(0xFF393D44),
    dialogBackgroundColor: const Color(0xFF282C34),
    dialogTheme: const DialogTheme(
        backgroundColor: Color(0xFF282C34),
        titleTextStyle: TextStyle(
          color: Color(0xFFFFFFFF),
        ),
        contentTextStyle: TextStyle(
          color: Color(0xFFFFFFFF),
        )
    ),
    appBarTheme: AppBarTheme(
      backgroundColor: const Color(0xFF282C34),
      foregroundColor: const Color(0xFF87B4FB),
    ),
    textTheme: TextTheme(
      // Modify the style for the TextFormField
      subtitle1: TextStyle(
        color: Colors.white, // Set the desired font color
        fontSize: 16, // Set the desired font size
      ),
    ),

    indicatorColor: const Color(0xFFF7D66C),
    scaffoldBackgroundColor: const Color(0xFF1E222B),
    inputDecorationTheme: InputDecorationTheme(
      filled: true,
      fillColor: const Color(0xFF282C34),
      hintStyle: const TextStyle(
        color: Color(0xFF50ABFF),
      ),
      labelStyle: const TextStyle(
        color: Color(0xFF50ABFF),
      ),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(8),
        borderSide: BorderSide.none,
      ),
      focusedBorder: OutlineInputBorder(
        borderRadius: BorderRadius.circular(8),
        borderSide: BorderSide(
          color: const Color(0xFF50ABFF),
        ),
      ),
    ),
  );
}



headerFooterBoxDecoration(BuildContext context, bool isHeader) {
  final theme = Theme.of(context);
  return BoxDecoration(
    color: const Color(0xFF282C34),
    border: Border(
      top: isHeader ? BorderSide.none : BorderSide(width: 2, color: theme.primaryColor),
      bottom: isHeader ? BorderSide(width: 2, color: theme.primaryColor) : BorderSide.none,
    ),
  );
}

errorBoxDecoration(BuildContext context) {
  final theme = Theme.of(context);
  return BoxDecoration(
    border: Border.all(color: Colors.white),
    color: const Color(0xFF262626),
    borderRadius: const BorderRadius.all(Radius.circular(8)),
  );
}

infoBoxDecoration(BuildContext context) {
  final theme = Theme.of(context);
  return BoxDecoration(
    border: Border.all(color: Colors.red),
    color: const Color(0xFF1E222B),
    borderRadius: const BorderRadius.all(Radius.circular(8)),
  );
}

errorTextStyle(BuildContext context, {bool bold = false}) {
  final theme = Theme.of(context);
  return TextStyle(
    color: theme.errorColor,
    fontWeight: bold ? FontWeight.bold : FontWeight.normal,
  );
}

infoTextStyle(BuildContext context, {bool bold = false}) {
  return TextStyle(
    color: const Color(0xFF87B4FB),
    fontWeight: bold ? FontWeight.bold : FontWeight.normal,
  );
}

boldTextStyle() {
  return const TextStyle(color: Colors.red, fontWeight: FontWeight.bold);
}

MaterialColor forestGreenColor = MaterialColor(
  const Color.fromRGBO(135, 180, 251, 1.0).value,
  const <int, Color>{
    50: Color.fromRGBO(255, 255, 255, 1.0),
    100: Color.fromRGBO(255, 255, 255, 0.2),
    200: Color.fromRGBO(255, 255, 255, 0.3),
    300: Color.fromRGBO(255, 255, 255, 0.4),
    400: Color.fromRGBO(255, 255, 255, 0.5),
    500: Color.fromRGBO(255, 255, 255, 0.6),
    600: Color.fromRGBO(255, 255, 255, 0.7),
    700: Color.fromRGBO(255, 255, 255, 0.8),
    800: Color.fromRGBO(255, 255, 255, 0.9),
    900: Color.fromRGBO(255, 255, 255, 1),
  },
);


MaterialColor mistColor = MaterialColor(
  const Color.fromRGBO(30, 34, 43, 1.0).value,
  const <int, Color>{
    50: Color.fromRGBO(30, 34, 43, 1.0),
    100: Color.fromRGBO(30, 34, 43, 0.2),
    200: Color.fromRGBO(30, 34, 43, 0.3),
    300: Color.fromRGBO(30, 34, 43, 0.4),
    400: Color.fromRGBO(30, 34, 43, 0.5),
    500: Color.fromRGBO(30, 34, 43, 0.6),
    600: Color.fromRGBO(30, 34, 43, 0.7),
    700: Color.fromRGBO(30, 34, 43, 0.8),
    800: Color.fromRGBO(30, 34, 43, 0.9),
    900: Color.fromRGBO(30, 34, 43, 1),
  },
);

Color get darkRedColor => const Color(0xFFF7D66C);
Color get lightRedColor => const Color(0xFF393D44);
