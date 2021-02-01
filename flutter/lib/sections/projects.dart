import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:padamchopra/data.dart';

class Projects extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _ProjectsState();
  }
}

class _ProjectsState extends State<Projects> {
  Color defaultColor = Data.almostBlack;
  Color backgroundColor = Data.almostBlack;
  void updateColors(Color color) {
    setState(() {
      backgroundColor = color;
    });
  }

  Widget makeProjectCard(
      {@required int index}) {
    return Expanded(
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 20),
        child: MouseRegion(
          cursor: SystemMouseCursors.click,
          onHover: (_) => updateColors(projectThemes[index]),
          onExit: (_) => updateColors(defaultColor),
          child: GestureDetector(
            onTap: () => Data.launchUrl(projectLinks[index]),
            child: Container(
              color: Colors.white24,
              padding: const EdgeInsets.all(28),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    projectNames[index],
                    style: Theme.of(context)
                        .textTheme
                        .headline5
                        .copyWith(color: Colors.white),
                  ),
                  Text(
                    projectStacks[index],
                    style: Theme.of(context)
                        .textTheme
                        .subtitle2
                        .copyWith(color: Colors.white),
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  Text(
                    projectDescriptions[index],
                    style: Theme.of(context)
                        .textTheme
                        .subtitle1
                        .copyWith(color: Colors.white),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }

  Widget makeMobileProjectCard(
      {@required int index}) {
    return GestureDetector(
      onTap: () => Data.launchUrl(projectLinks[index]),
      child: Container(
        width: double.infinity,
        color: Colors.white24,
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              projectNames[index],
              style: Theme.of(context)
                  .textTheme
                  .headline5
                  .copyWith(color: Colors.white),
            ),
            Text(
              projectStacks[index],
              style: Theme.of(context)
                  .textTheme
                  .subtitle2
                  .copyWith(color: Colors.white),
            ),
            Text(
              projectDescriptions[index],
              style: Theme.of(context)
                  .textTheme
                  .subtitle1
                  .copyWith(color: Colors.white, fontSize: 14),
            )
          ],
        ),
      ),
    );
  }

  var projectThemes = [
    Color(0xffD7263D),
    Color(0xff2F2D2E),
    Color(0xff255F85),
    Color(0xffF18F01),
    Color(0xffFF715B),
    Color(0xff904E55)
  ];

  var projectNames = [
    "Habito",
    "VM",
    "Practikality",
    "Paysy",
    "Racket.js",
    "Encryptid"
  ];
  var projectStacks = [
    "Flutter, Firebase, and Node.js",
    "C++ and NCurses library",
    "Android, IBM Watson, Azure, Google Cloud, OpenCV and TensorFlow",
    "Java, Swing, Android, Firebase, and Blockchain",
    "Racket, Bash and Node.js",
    "Node.js, Express, Firebase and HTML/CSS"
  ];
  var projectDescriptions = [
    "Habito is a mobile application to help track and build habits. Available for both iOS and Android, it allows users to log their habit progress each day for 21 days.",
    "A complete vim-like text editor with indistinguishable feature quality and high performance. Implemented using MVC architecure and SOLID principles of OOP.",
    "A three-tier Android app to assist the mute, deaf and visually impaired. Winner at Microsoft Image Cup India and youngest world finalists in 2018.",
    "A blockchain powered payments app that allows local businesses to power up their payments by faster automated checkouts and a secure blockchain verified transaction system.",
    "A transpiler for translating code files written in Racket to Javascript with support for the entire Beginner Racket dialect and auto-indentation.",
    "Web-app with API support for organising trivia quizzes. Featured a terminal-like interface with bash commands to launch levels and progress further on the leaderboard."
  ];

  var projectLinks = ["https://www.youtube.com/watch?v=WC_CHbA3rZ8", "https://github.com/padamchopra/vm", "https://www.youtube.com/watch?v=VhdyqzMQOGE", "https://devpost.com/software/paysy", "https://devpost.com/software/racket-js-z53ly4", "https://github.com/padamchopra/encryptid"];

  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth + 100
            ? true
            : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    return AnimatedContainer(
      curve: Curves.easeIn,
      duration: Duration(milliseconds: 100),
      width: MediaQuery.of(context).size.width,
      color: backgroundColor,
      margin: const EdgeInsets.symmetric(vertical: 40),
      padding: const EdgeInsets.all(40),
      child: Padding(
        padding: EdgeInsets.symmetric(
            horizontal: MediaQuery.of(context).size.width * 0.12),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: mobileScreen
              ? [
                  Text(
                    "Projects",
                    style: Theme.of(context)
                        .textTheme
                        .headline4
                        .copyWith(color: Colors.white),
                  ),
                  Container(height: 5, width: 120, color: Colors.white24),
                  spaceInBetween,
                  makeMobileProjectCard(index: 0),
                  spaceInBetween,
                  makeMobileProjectCard(index: 1),
                  spaceInBetween,
                  makeMobileProjectCard(index: 2),
                  spaceInBetween,
                  makeMobileProjectCard(index: 3),
                  spaceInBetween,
                  makeMobileProjectCard(index: 4),
                  spaceInBetween,
                  makeMobileProjectCard(index: 5),
                ]
              : [
                  Text(
                    "Projects",
                    style: Theme.of(context)
                        .textTheme
                        .headline4
                        .copyWith(color: Colors.white),
                  ),
                  Container(height: 5, width: 120, color: Colors.white24),
                  spaceInBetween,
                  IntrinsicHeight(
                    child: Row(
                      children: [0, 1, 2]
                          .map((e) => makeProjectCard(index: e))
                          .toList(),
                    ),
                  ),
                  spaceInBetween,
                  IntrinsicHeight(
                    child: Row(
                      children: [3, 4, 5]
                          .map((e) => makeProjectCard(index: e))
                          .toList(),
                    ),
                  ),
                ],
        ),
      ),
    );
  }
}
