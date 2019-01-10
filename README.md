# React Native Starter

---

A simple React Native Starter app providing the following:

- [React Navigation](https://reactnavigation.org/) setup
- Email login and registration flow ready to integrate with your backend of choice
- Flow, ESLint and Prettier setup and configuration
- Multiple environment support

> This app provides the basis for all CS Frequency's React Native apps.

## Getting started

### Clone and install dependencies

1. Clone the `rn-starter` repository with the following command:

```
git clone https://github.com/CSFrequency/rn-starter
cd rn-starter
```

2. Install dependencies:

Either:

```
yarn
```

or:

```
npm install
```

3. **iOS** Initialise Cocoapods

```
cd ios
pod install
```

### Rename your app

We've provided a simple renaming tool that allows you to use your own application and company name.

Either:

```
yarn rename
```

or:

```
npm run rename
```

### Start your app

1. Start the React Native packager:

```
react-native start
```

2. **iOS** Build and run the iOS app:

```
react-native run-ios
```

> This will automatically start the iOS simulator for you if one is not already started.

3. **Android** Build and run the Android app:

```
react-native run-android
```

> You'll need to have an Android device attached or an emulator running already.
