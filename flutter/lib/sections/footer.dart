import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:padamchopra/data.dart';

class Footer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth ? true : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    final Widget hSpace = SizedBox(width: 30);

    return Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.symmetric(
          vertical: 40, horizontal: MediaQuery.of(context).size.width * 0.1),
      child: Column(
        children: [
          Container(
            height: 2,
            width: MediaQuery.of(context).size.width * 0.8,
            color: Color(0xffEEEEEE),
          ),
          spaceInBetween,
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                icon: FaIcon(FontAwesomeIcons.facebookF),
                onPressed: () =>
                    Data.launchUrl("https://www.facebook.com/chopra.padam/"),
              ),
              hSpace,
              IconButton(
                icon: FaIcon(FontAwesomeIcons.twitter),
                onPressed: () =>
                    Data.launchUrl("https://twitter.com/PadamChopra_"),
              ),
              hSpace,
              IconButton(
                icon: FaIcon(FontAwesomeIcons.linkedin),
                onPressed: () =>
                    Data.launchUrl("https://www.linkedin.com/in/padamchopra/"),
              ),
              hSpace,
              IconButton(
                icon: FaIcon(FontAwesomeIcons.github),
                onPressed: () =>
                    Data.launchUrl("https://github.com/padamchopra"),
              ),
              mobileScreen ? Container() : Spacer(),
              mobileScreen
                  ? Container()
                  : MouseRegion(
                    cursor: SystemMouseCursors.click,
                    child: GestureDetector(
                        onTap: () =>
                            Data.launchUrl("mailto:padam.chopra@uwaterloo.ca"),
                        child: Text(
                          "padam.chopra@uwaterloo.ca",
                          style: Theme.of(context).textTheme.headline6,
                        ),
                      ),
                  )
            ],
          )
        ],
      ),
    );
  }
}
