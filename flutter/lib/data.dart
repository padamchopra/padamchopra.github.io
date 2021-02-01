import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class Data {
  static Color lightBlue = Color(0xffeaf9fa);
  static Color lightPurple = Color(0xfff0f4ff);
  static Color darkPurple = Color(0xffb5c0ff);
  static Color onLightBlue = Color(0xff99c9cd);
  static Color lightMusk = Color(0xffF4CEB1);
  static Color almostBlack = Color(0xff0d0e0f);

  static double mobileMaxWidth = 960;
  static double sectionPadding = 40;

  static void launchUrl(String url) async {
    if (await canLaunch(url)) {
      await launch(
        url,
        forceSafariVC: false,
        forceWebView: false,
      );
    } else {
      throw 'Could not launch $url';
    }
  }
}
