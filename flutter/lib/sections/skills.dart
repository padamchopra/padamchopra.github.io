import 'package:flutter/material.dart';
import 'package:padamchopra/data.dart';

class Skills extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth + 100? true : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    Widget makeSkillBox(
        {@required String emoji,
        @required String title,
        @required String content}) {
      return Container(
        width: (MediaQuery.of(context).size.width * 0.6) / (mobileScreen ? 1 : 3),
        color: Colors.white,
        padding: const EdgeInsets.all(22),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              emoji,
              style: TextStyle(fontSize: 60),
            ),
            spaceInBetween,
            Text(
              title,
              style: Theme.of(context).textTheme.headline5,
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              content,
              style: Theme.of(context)
                  .textTheme
                  .subtitle1
                  .copyWith(color: Colors.black54, fontSize: 18),
            )
          ],
        ),
      );
    }

    return Container(
      width: MediaQuery.of(context).size.width,
      padding: const EdgeInsets.all(40),
      child: Stack(
        children: [
          Positioned.fill(
            left: MediaQuery.of(context).size.width * (mobileScreen ? 0.1 : 0.2),
            right: MediaQuery.of(context).size.width * (mobileScreen ? 0.1 : 0.2),
            child: Container(
              width: MediaQuery.of(context).size.width * (mobileScreen ? 0.8 : 0.5),
              color: Data.lightPurple,
            ),
          ),
          Container(
            padding: EdgeInsets.symmetric(vertical: 40),
            width: MediaQuery.of(context).size.width,
            child: Column(
              children: [
                Text(
                  "Skills",
                  style: Theme.of(context)
                      .textTheme
                      .headline4
                      .copyWith(color: Colors.black),
                ),
                Container(height: 5, width: 120, color: Data.darkPurple),
                spaceInBetween,
                mobileScreen ? IntrinsicWidth(
                  child: Column(
                    children: [
                      makeSkillBox(
                        emoji: "💻",
                        title: "Languages",
                        content:
                            "Java, C/C++, Python, R, Kotlin, Bash, Scala, Dart, Scheme, SQL, and GO",
                      ),
                      spaceInBetween,
                      makeSkillBox(
                        emoji: "🧰",
                        title: "Tools",
                        content:
                            "Git, Android, Flutter, TensorFlow, Pandas, MongoDB, Node.js, Firebase, and Postman",
                      ),
                      spaceInBetween,
                      makeSkillBox(
                        emoji: "📄",
                        title: "Interpersonal",
                        content:
                            "Leadership, Teamwork, Communication, Problem-Solving, and Adaptibility",
                      ),
                    ],
                  ),
                )
                : IntrinsicHeight(
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      makeSkillBox(
                        emoji: "💻",
                        title: "Languages",
                        content:
                            "Java, C/C++, Python, R, Kotlin, Bash, Scala, Dart, Scheme, SQL, and GO",
                      ),
                      SizedBox(
                        width: 40,
                      ),
                      makeSkillBox(
                        emoji: "🧰",
                        title: "Tools",
                        content:
                            "Git, Android, Flutter, TensorFlow, Pandas, MongoDB, Node.js, Firebase, and Postman",
                      ),
                      SizedBox(
                        width: 40,
                      ),
                      makeSkillBox(
                        emoji: "📄",
                        title: "Interpersonal",
                        content:
                            "Leadership, Teamwork, Communication, Problem-Solving, and Adaptibility",
                      ),
                    ],
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
