# User Interface Spikes: Why and How


## Why

None of us on the team (so far) are mobile app experts, though many of us have done considerable work in and around mobile app teams. The landscape of mobile app UI toolkits has changed a lot over the last two or three years (2018 and 2019) and deciding which framework will serve us well for the next 5 to 10 years requires a bit of research.

We are reasonably confident that a cross-platform UI toolkit is required. The `dhamma.org` mobile app is built natively on both platforms (iOS and Android) and this has caused drift between the two. ReactNative and Flutter, in particular, show a lot of promise in rectifying this situation without the development environment compromises that were required just a few years ago.

Our UI toolkit options include:

- Flutter
- ReactNative on TypeScript
- ReactNative on vanilla Javascript
- SvelteNative on TypeScript
- SvelteNative on vanilla Javascript
- Apache Cordova

Each has different language constraints and platform constraints we should consider.


## How

### Language

Not much spiking is required here, but we should be able to answer these questions:

- [ ] How much surface area does this language have in the general open source community? (This is to say: how easy will it be fore a new dhamma sevak to contribute to the existing codebase in 2023?)
- [ ] How "safe" is the language? (Javascript is obviously terrifying... Dart or TypeScript seems preferable.)
- [ ] How broad is creator support for the language?
- [ ] How is the tooling support?

### Framework

**High Priority**

- [ ] load testing: infinite scroll over 1000 fake Today items?
- [ ] i18n support? (an absolute requirement)
- [ ] offline-first: cross-platform storage?
- [ ] oflfine-first: cross-platform media storage (audio/video)?
- [ ] offline-first: how easy is text search on local storage?
- [ ] audio playback across platforms?
- [ ] video playback across platforms?
- [ ] what libraries exist for convenience already? (ex. social login, drop-in media playlist, etc.)

**Lower Priority**

- [ ] convenience of integration with other apps (podcasts, share on Twitter/FB, etc.)?
- [ ] how difficult is a horizontal carousel (see design `resource-01.png`)
- [ ] how difficult is a vertical carousel (see design `resource-05.png`)
- [ ] mobile-specific UI elements? (see design `resource-17.png`)
- [ ] material design overlays? (see design `resource-18.png`)
- [ ] rendering an epub/mobi (e-book) in the app? (is this even necessary at all?)
