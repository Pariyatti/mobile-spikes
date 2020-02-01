# TITLE: Apache Cordova / Adobe PhoneGap Results

## STATUS: Rejected.

## CONTEXT

The Pariyatti Mobile App requires a cross-platform that can deliver artefacts to both iOS and Android (to start with) from a single codebase.

See `HOW-AND-WHY.md`

## DECISION

After a conversation with a friend who worked on the PhoneGap / Cordova team (as a dev and product lead) for over 10 years, I'm convinced that this isn't an option for us.

In his opinion, PhoneGap is a dead project --- Adobe is pulling designers and developers off of the project and the project health is in jeopardy.

He was confident about Cordova working well for a strong, cohesive, disciplined team of developers. The difficulties for less disciplined teams stem from leaky abstrations --- payments on iOS must go through Apple, path handling is not abstracted, graceful loading states are difficult, and the web/native division is not as clear as it would be if the app could be entirely server-side (since Apple won't permit this). To quote him:

> Foresight and a solid development team can manage the code well, 
> but it can become spaghetti code very quickly.

...this leaves me a bit cold on Cordova for this project. Pariyatti's software contributions in 2020 come from highly distributed volunteer developers. We will endeavour to be as disiplined as possible but the fact of the matter is: the project will benefit from a simple framework which helps guide the dev team as much as possible.

-steven (@deobald)

## CONSEQUENCES

By eliminating Cordova (and PhoneGap) we are left with cross-platform toolkits which approach the problem more directly but potentially neglect the web. Given how the Apple App Store treats mobile apps (they cannot load significant UI elements from the server) and the fact that a good global mobile app will inherently be built "offline first" anyway, ignoring the web within the scope of our mobile app toolkit seems like a reasonable choice. Hopefully our server-side API is clean enough to build up a vanilla web app separately without duplication of effort from the mobile app projet.
