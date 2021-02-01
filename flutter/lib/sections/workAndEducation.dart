import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:padamchopra/data.dart';

class WorkAndEducation extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth ? true : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    Widget makeWorkExCard(
        {@required String company,
        @required String role,
        @required String from,
        @required String to}) {
      return Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              company,
              style: Theme.of(context).textTheme.headline5,
            ),
            Text(
              role,
              style: Theme.of(context).textTheme.headline6,
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              "$from - $to",
              style: Theme.of(context)
                  .textTheme
                  .subtitle1
                  .copyWith(color: Colors.black54),
            )
          ],
        ),
      );
    }

    Widget makeEducationCard(
        {@required String institute,
        @required String type,
        @required String subject,
        @required String dateRange,
        @required String grade}) {
      return Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              institute,
              style: Theme.of(context).textTheme.headline5,
            ),
            Text(
              "$type • $subject",
              style: Theme.of(context).textTheme.headline6,
            ),
            SizedBox(
              height: 20,
            ),
            Text(
              dateRange,
              style: Theme.of(context)
                  .textTheme
                  .subtitle1
                  .copyWith(color: Colors.black54),
            )
          ],
        ),
      );
    }

    var workAndEducationColumns = [
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Work Experience",
            style: Theme.of(context)
                .textTheme
                .headline4
                .copyWith(color: Colors.black),
          ),
          Container(height: 5, width: 120, color: Colors.red),
          spaceInBetween,
          makeWorkExCard(
            company: "Ceridian Dayforce",
            role: "Developer Intern, Dayforce Assistant",
            from: "January 2021",
            to: "April 2021",
          ),
          spaceInBetween,
          makeWorkExCard(
            company: "Ceridian Dayforce",
            role: "Android Developer Intern",
            from: "May 2020",
            to: "August 2020",
          ),
          spaceInBetween,
          MouseRegion(
            cursor: SystemMouseCursors.click,
            child: GestureDetector(
              onTap: () => Data.launchUrl("http://padamchopra.me/resume.pdf"),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    "See More",
                    style: Theme.of(context).textTheme.bodyText1,
                  ),
                  Icon(
                    Icons.arrow_forward_ios,
                    size: 12,
                  )
                ],
              ),
            ),
          )
        ],
      ),
      mobileScreen ? SizedBox(height: 40) : SizedBox(width: 180),
      Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Education",
            style: Theme.of(context)
                .textTheme
                .headline4
                .copyWith(color: Colors.black),
          ),
          Container(height: 5, width: 120, color: Colors.red),
          spaceInBetween,
          makeEducationCard(
            institute: "University of Waterloo",
            type: "2A",
            subject: "Computer Science (co-op)",
            dateRange: "September 2020 - Present",
            grade: "91%",
          ),
          spaceInBetween,
          makeEducationCard(
            institute: "Amity International School",
            type: "XII",
            subject: "CBSE National Board",
            dateRange: "Grad. 2019",
            grade: "98%",
          ),
        ],
      )
    ];

    return Container(
      width: MediaQuery.of(context).size.width,
      padding: EdgeInsets.all(Data.sectionPadding),
      child: mobileScreen ? Column(
        children: workAndEducationColumns,
      )
      :  Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: workAndEducationColumns,
      ),
    );
  }
}
