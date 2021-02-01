import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:padamchopra/sections/awards.dart';
import 'package:padamchopra/sections/featured.dart';
import 'package:padamchopra/sections/footer.dart';
import 'package:padamchopra/sections/navigation.dart';
import 'package:padamchopra/sections/projects.dart';
import 'package:padamchopra/sections/skills.dart';
import 'package:padamchopra/sections/topSection.dart';
import 'package:padamchopra/sections/workAndEducation.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Padam Chopra',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        textTheme: TextTheme(
          headline1: GoogleFonts.nunitoSans(
              fontSize: 105, fontWeight: FontWeight.w300, letterSpacing: -1.5),
          headline2: GoogleFonts.nunitoSans(
              fontSize: 66, fontWeight: FontWeight.w600, letterSpacing: -2),
          headline3: GoogleFonts.nunitoSans(
              fontSize: 48, fontWeight: FontWeight.w600, letterSpacing: -2),
          headline4: GoogleFonts.nunitoSans(
              fontSize: 37, fontWeight: FontWeight.w600, letterSpacing: -1),
          headline5:
              GoogleFonts.nunitoSans(fontSize: 28, fontWeight: FontWeight.w600),
          headline6: GoogleFonts.nunitoSans(
              fontSize: 20, fontWeight: FontWeight.w700, letterSpacing: 0.15),
          subtitle1: GoogleFonts.nunitoSans(
              fontSize: 17, fontWeight: FontWeight.w400, letterSpacing: 0.15),
          subtitle2: GoogleFonts.nunitoSans(
              fontSize: 15, fontWeight: FontWeight.w500, letterSpacing: 0.1),
          bodyText1: GoogleFonts.roboto(
              fontSize: 16, fontWeight: FontWeight.w400, letterSpacing: 0.5),
          bodyText2: GoogleFonts.roboto(
              fontSize: 14, fontWeight: FontWeight.w400, letterSpacing: 0.25),
          button: GoogleFonts.roboto(
              fontSize: 14, fontWeight: FontWeight.w500, letterSpacing: 1.25),
          caption: GoogleFonts.roboto(
              fontSize: 12, fontWeight: FontWeight.w400, letterSpacing: 0.4),
          overline: GoogleFonts.roboto(
              fontSize: 10, fontWeight: FontWeight.w400, letterSpacing: 1.5),
        ),
      ),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            children: <Widget>[
              Navigation(),
              TopSection(),
              WorkAndEducation(),
              Skills(),
              Projects(),
              Achievements(),
              Featured(),
              Footer()
            ],
          ),
        ),
      ),
    );
  }
}
