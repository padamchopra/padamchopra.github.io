import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:padamchopra/data.dart';

class Navigation extends StatelessWidget {

  Widget getNavLink(BuildContext context, String name, String url) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 18),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: GestureDetector(
          onTap: () => Data.launchUrl(url),
          child: Text(
            name,
            style: Theme.of(context).textTheme.subtitle1,
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (MediaQuery.of(context).size.width < Data.mobileMaxWidth) {
      return Padding(
        padding: const EdgeInsets.all(12),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [getNavLink(context, "Resume", "http://padamchopra.me/resume.pdf")],
        ),
      );
    } else {
      return Padding(
        padding: const EdgeInsets.all(24.0),
        child: Row(
          children: [
            MouseRegion(
              cursor: SystemMouseCursors.click,
              child: GestureDetector(
                onTap: () => Data.launchUrl("mailto:padam.chopra@uwaterloo.ca"),
                child: Text(
                  "padam.chopra@uwaterloo.ca",
                  style: Theme.of(context).textTheme.headline6,
                ),
              ),
            ),
            Spacer(),
            getNavLink(context, "Resume", "http://padamchopra.me/resume.pdf"),
            //getNavLink(context, "Experience"),
            //getNavLink(context, "Featured"),
            getNavLink(context, "Contact", "mailto:padam.chopra@uwaterloo.ca")
          ],
        ),
      );
    }
  }
}
