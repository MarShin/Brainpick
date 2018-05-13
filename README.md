Please install prettier and eslint plugin in your text editor/IDE before coding anything.
# Brainpick - `development`

## Stack

* [React Navigation](https://github.com/react-navigation/react-navigation)
* [React Native Elements](https://react-native-training.github.io/react-native-elements/
* Frontend: ES6,Eslint, Redux

## Quickstart

### Setup

```bash
$ npm install
```

### Run locally

* development primarily on iOS simulator version 10 (11 incredibaly slow as mentioned in some github issues, temporary solution use versoin 10 by creating new simulator in Xcode)

```bash
# run in developement mode (refreshes the app on source code changes)
$ react-native run-ios --simulator="iPhone ios10"
```
* on Android - trigger emulator AVD without calling Android Studio
```bash
~/Library/Android/sdk/tools/emulator -list-avds
~/Library/Android/sdk/tools/emulator -avd Pixel_2_API_23  https://stackoverflow.com/questions/42718973/run-avd-emulator-without-android-studio
```

lets setup trello to track todo later if neccessary (a lot of todos)
