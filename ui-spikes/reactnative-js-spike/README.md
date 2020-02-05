
# Introduction
The spike is based on Expo (http://expo.io) framework which is "Ruby on Rails"-like set of tools for ReactNative applications.

# Prerequisites
```
sudo npm install expo-cli --global
```

# Template created with
```
expo init pariyatti
# option: `blank`
```

# Setup the app
```
cd pariyatti
npm install

```

# Running the app
```
cd pariyatti
npm start

```

(iOS only for now)
This will start Expo console web app and open a link in the browser. Choose "Run iOS simulator" to see the app in OSX IPhone Simulator. Alternatively publish it in Echo profile and interact with the app in IPhone via iOS Expo app.  


# Troubleshooting

## Fails to run `npm start` with `Your project is in SDK version >= 33.0.0, but the expo package version seems to be older.`

```
npm install --package-lock
```

# Notes

## Expo vs bare ReactNative

Expo is an easy and convenient way to start development of the app without need to use XCode or Android Studio. Other benefits include fast deployment to mobile device via Expo app, where application can be seen and interacted with no need to use App Stores. There is a migration path in case the need for native modules arises.
https://apiko.com/blog/expo-vs-vanilla-react-native/
https://niteco.com/resources/blogs/from-expo-to-react-native/
https://docs.expo.io/versions/latest/expokit/eject/
