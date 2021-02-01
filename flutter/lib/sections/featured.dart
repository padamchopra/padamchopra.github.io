import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:padamchopra/data.dart';

class Featured extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _FeaturedState();
  }
}

class _FeaturedState extends State<Featured> {
  var logosBase = [
    "algorand",
    "microsoft",
    "imaginecup",
    "yourstory",
    "digit",
    "ielts",
    "broadcastmantra",
    "deca"
  ];
  var logosPicture = [
    "algorand_bw",
    "microsoft_bw",
    "imaginecup_bw",
    "yourstory_bw",
    "digit_bw",
    "ielts_bw",
    "broadcastmantra_bw",
    "deca_bw"
  ];

  var links = [
    "https://medium.com/algorand/building-on-algorand-deltahack-hackathon-recap-and-code-7849e21e3bb2", //algorang
    "https://news.microsoft.com/en-in/ai-solutions-dominate-the-16th-edition-of-microsoft-imagine-cup-india-finals/", //microsoft
    "https://www.youtube.com/watch?v=WNtP97quERA", //imagine cup
    "https://yourstory.com/2019/01/students-app-deaf-blind-mute-communicate", //your story
    "https://www.youtube.com/watch?v=rXUREJo5OXo", //digit
    "https://www.youtube.com/watch?v=Ujp-Q4G3Uq0", //ielts
    "https://www.youtube.com/watch?v=zHtJ7seMXVo", //broadcast mantra
    "https://www.decadirect.org/2017/01/30/deca-idea-challenge-2016-global-winners-announced/" //deca
  ];

  void updateColor(int logoNo, bool entering) {
    setState(() {
      logosPicture[logoNo] = logosBase[logoNo] + (entering ? "_col" : "_bw");
    });
  }

  final Widget horizontalSpaceInBetween = SizedBox(width: 80);

  @override
  Widget build(BuildContext context) {
    bool mobileScreen =
        MediaQuery.of(context).size.width < Data.mobileMaxWidth ? true : false;

    final Widget spaceInBetween = SizedBox(
      height: mobileScreen ? 20 : 40,
    );

    return Container(
      width: MediaQuery.of(context).size.width,
      padding: const EdgeInsets.all(40),
      child: Column(
        children: [
          Text(
            "Featured",
            style: Theme.of(context)
                .textTheme
                .headline4
                .copyWith(color: Colors.black),
          ),
          Container(height: 5, width: 120, color: Colors.red),
          spaceInBetween,
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [0, 1, 2, 3]
                .map((e) => Container(
                      margin: EdgeInsets.symmetric(
                          horizontal: mobileScreen ? 20 : 50),
                      child: MouseRegion(
                        cursor: SystemMouseCursors.click,
                        onHover: (_) => updateColor(e, true),
                        onExit: (_) => updateColor(e, false),
                        child: GestureDetector(
                          onTap: () => Data.launchUrl(links[e]),
                          child: Container(
                            height: mobileScreen ? 20 : 50,
                            child: Image.asset('images/${logosPicture[e]}.png'),
                          ),
                        ),
                      ),
                    ))
                .toList(),
          ),
          spaceInBetween,
          spaceInBetween,
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [4, 5, 6, 7]
                .map((e) => Container(
                      margin: EdgeInsets.symmetric(
                          horizontal: mobileScreen ? 20 : 50),
                      child: MouseRegion(
                        cursor: SystemMouseCursors.click,
                        onHover: (_) => updateColor(e, true),
                        onExit: (_) => updateColor(e, false),
                        child: GestureDetector(
                          onTap: () => Data.launchUrl(links[e]),
                          child: Container(
                            height: mobileScreen ? 20 : 50,
                            child: Image.asset('images/${logosPicture[e]}.png'),
                          ),
                        ),
                      ),
                    ))
                .toList(),
          )
        ],
      ),
    );
  }
}
