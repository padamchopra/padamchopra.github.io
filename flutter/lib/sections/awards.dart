import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:padamchopra/data.dart';

class Achievements extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth ? true : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    Widget makeAwardCard(
        {@required String title, @required String description}) {
      return Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              title,
              style: Theme.of(context).textTheme.headline5,
            ),
            Text(
              description,
              style: Theme.of(context)
                  .textTheme
                  .subtitle1
                  .copyWith(color: Colors.black54),
            )
          ],
        ),
      );
    }

    var awardsColumn = [
      Container(
        padding: EdgeInsets.symmetric(horizontal: 20),
        width: mobileScreen ? (MediaQuery.of(context).size.width * 0.8) : (MediaQuery.of(context).size.width * 0.5),
        child: Align(
          alignment: Alignment.centerRight,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Achievements",
                style: Theme.of(context)
                    .textTheme
                    .headline4
                    .copyWith(color: Colors.black),
              ),
              Container(height: 5, width: 120, color: Colors.red),
              spaceInBetween,
              makeAwardCard(
                  title: "Sponsor Winner, DeltaHacks VI",
                  description:
                      "Built a blockchain merchant application using Algorand's proprietary\nJDKs to help small-scale businesses escape the big-bank fees."),
              spaceInBetween,
              makeAwardCard(
                  title: "Mentor, Google Summer of Code",
                  description:
                      "Mentored two-university students for the Sustainable Computing Research\nGroup organisation's GSoC projects involving the MEAN stack."),
              spaceInBetween,
              makeAwardCard(
                  title: "World Finalist, Microsoft Imagine Cup",
                  description:
                      "Presented my Azure-integrated mobile application at the Microsoft\nHeadquarters in USA as the youngest team in Imagine Cup 2018."),
              spaceInBetween,
              makeAwardCard(
                  title: "Grand Prize Winner, Google Code-in",
                  description:
                      "Completed 70+ tasks for an open-source organisation using MEAN/MERN,\nPython, Bash and Android; getting the opportunity to visit Googleplex."),
              spaceInBetween,
              makeAwardCard(
                  title: "Global Winner, DECA Idea Challenge",
                  description:
                      "Organised as part of the Global Entrepreneurship Week, ideated\nthe use a plastic bottle as a bottle for gardening with multiple tools."),
            ],
          ),
        ),
      ),
      mobileScreen ? Container() : Container(
        width: MediaQuery.of(context).size.width * 0.5,
        child: Stack(
          children: [
            Align(
              alignment: Alignment.center,
              child: Container(
                width: 600,
                height: 600,
                decoration: BoxDecoration(
                    color: Data.lightBlue, shape: BoxShape.circle),
              ),
            ),
            Align(
              alignment: Alignment.center,
              child: Container(
                width: 600,
                height: 600,
                margin: EdgeInsets.only(top: 100, right: 100),
                decoration: BoxDecoration(
                    border: Border.all(color: Data.onLightBlue),
                    shape: BoxShape.circle),
              ),
            ),
            Align(
              alignment: Alignment.center,
              child: Container(
                height: 200,
                width: 200,
                margin: EdgeInsets.only(right: 500, top: 300),
                child: Image.asset('images/me_confetti.png'),
              ),
            ),
            Align(
              alignment: Alignment.center,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    "Got a Project?",
                    style: Theme.of(context)
                        .textTheme
                        .headline3
                        .copyWith(color: Colors.black),
                  ),
                  MouseRegion(
                    cursor: SystemMouseCursors.click,
                    child: GestureDetector(
                      onTap: () => Data.launchUrl("http://m.me/chopra.padam"),
                      child: Text(
                        "Let's Talk!",
                        style: Theme.of(context)
                            .textTheme
                            .headline3
                            .copyWith(color: Colors.black, decoration: TextDecoration.underline),
                            
                      ),
                    ),
                  ),
                ],
              ),
            )
          ],
        ),
      )
    ];

    return Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.symmetric(vertical: 40),
      child: IntrinsicHeight(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: awardsColumn,
        ),
      ),
    );
  }
}
