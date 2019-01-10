# React Native Starter

A simple React Native Starter app providing the following:

- [React Navigation](https://reactnavigation.org/) setup
- Email login and registration flow ready to integrate with your backend of choice
- Flow, ESLint and Prettier setup and configuration
- Multiple environment support

> This app provides the basis for all CS Frequency's React Native apps.

## Getting started

### Clone and install dependencies

- Clone the `rn-starter` repository with the following command:

    ```
    git clone https://github.com/CSFrequency/rn-starter
    cd rn-starter
    ```

- Install dependencies:

    Run `yarn` or `npm install`

- **[iOS]** Initialise Cocoapods:

    > Follow the instructions [here](https://guides.cocoapods.org/using/getting-started.html) if you don't already have CocoaPods installed.

    ```
    cd ios
    pod install
    ```
    

### Rename your app

We've provided a simple renaming tool that allows you to use your own application and company name.

- Run `yarn rename` or `npm run rename`
- Follow the on screen instructions
- Take note of your package name as you may need this at a later date

### Start your app

- Start the React Native packager:

    ```
    react-native start
    ```

- **[iOS]** Build and run the iOS app:

    ```
    react-native run-ios
    ```

    > This will automatically start the iOS simulator for you if one is not already started.

3. **Android** Build and run the Android app:

    > You'll need to have an Android device attached or an emulator running already.

    ```
    react-native run-android
    ```

## React Navigation setup

This starter app leans on our experience building React Native apps and uses the following battle-tested app hierarchy:

- `StackNavigator`
    - `SwitchNavigator`
        - Screen for Initialisation 
        - `StackNavigator` for logged out application screens
            - Logged out screens
        - `StackNavigator` for logged in application flow
            - `TabNavigator` for logged in tabs
                - `StackNavigator` for tab 1
                    - Screens for tab 1 go here
                - `StackNavigator` for tab 2
                    - Screens for tab 2 go here
            - Modal screens that need to show over the tabs go here
    - Common logged out / logged in screens go here

## Login and Registration flow

We've provided example email login and registration screens which are set up ready to connect to your favoured backend, e.g. Firebase, AWS Amplify, AuthO, etc.

- Login: `src/screens/LoggedOut/Login/index.js`
- Registration: `src/screens/LoggedOut/Registration/index.js`

## Flow, ESLint and Prettier

We've included our favoured Flow, ESLint and Prettier configurations as a starting point.

- `.flowconfig` is the standard React Native `.flowconfig`
- `.eslintrc.js` is based off the Airbnb ESLint ruleset with a few little tweaks
- `prettier.config.js` is a fairly standard Prettier configuration

## Multiple environments

We know how useful it is to be able to test your app against different environments, which is why we've built in support for dual environments: Debug and Release.

This allows you to use different configuration files for each environment:

### iOS

- Add configuration files to:
    - Debug: `ios/Config/Debug`
    - Release: `ios/Config/Release`
- Select either the `Debug` or `Release` schema from within XCode when running or building your app

### Android

- Add configuration files to:
    - Debug: `android/app/src/debug`
    - Release: `android/app/src/release`
    - Shared: `android/app/src/main

## Contributing

If you find any problems, please [open an issue](https://github.com/CSFrequency/rn-starter/issues/new) or submit a fix as a pull request.

## Need help building your app?

This repository is a great place to start, but if you'd prefer to sit back and have your new project built for you, [get in touch with us directly](https://csfrequency.com) and we can organise a quote.

## License

[Apache License, Version 2.0](LICENSE)
