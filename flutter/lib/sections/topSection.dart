import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:padamchopra/data.dart';

class TopSection extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth ? true : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    return Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.all(Data.sectionPadding),
      child: Column(
        children: [
          Container(
            height: 120,
            width: 120,
            decoration: BoxDecoration(
                color: Data.lightBlue,
                borderRadius: BorderRadius.circular(1000)),
            child: Image.asset('images/me_smiling.png'),
          ),
          spaceInBetween,
          Text(
            "Hi, I'm Padam 👋🏼",
            style: mobileScreen
                ? Theme.of(context).textTheme.headline5.copyWith(fontSize: 22)
                : Theme.of(context).textTheme.headline5,
          ),
          spaceInBetween,
          Text(
            "Building solutions\nthrough code.",
            textAlign: TextAlign.center,
            style: mobileScreen
                ? Theme.of(context)
                    .textTheme
                    .headline2
                    .copyWith(color: Colors.black, fontSize: 28)
                : Theme.of(context)
                    .textTheme
                    .headline2
                    .copyWith(color: Colors.black),
          ),
          spaceInBetween,
          mobileScreen
              ? Text(
                  "Pursuing a Bachelor's in CS at the University of Waterloo 🇨🇦. I specialize in Mobile Applications, Natural Language Processing, and Flutter. Also a top 0.1% John Mayer fan according to Spotify!",
                  textAlign: TextAlign.center,
                  style: Theme.of(context)
                      .textTheme
                      .subtitle1
                      .copyWith(fontSize: 16),
                )
              : Text(
                  "Pursuing a Bachelor's in CS at the University of Waterloo, Canada.\nI specialize in Mobile Applications, Natural Language Processing, and Flutter.\nAlso a top 0.1% John Mayer fan according to Spotify 🎸",
                  textAlign: TextAlign.center,
                  style: Theme.of(context)
                      .textTheme
                      .subtitle1
                      .copyWith(fontSize: 22),
                ),
          spaceInBetween,
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () => Data.launchUrl("mailto:padam.chopra@uwaterloo.ca"),
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 42),
                decoration: BoxDecoration(
                    color: Data.almostBlack,
                    borderRadius: BorderRadius.circular(100)),
                child: Text(
                  "CONNECT WITH ME",
                  style: Theme.of(context)
                      .textTheme
                      .caption
                      .copyWith(color: Colors.white),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
