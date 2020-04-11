# PolkaKey Mobile Apps

## Development

Navigate to cordova folder:

```
cd cordova/
```

Install cordova dependencies:

```
yarn
```

### Android

Create the Android platform:

```
yarn install:android
```

Create the development build:

```
yarn dev:android
```

Follow the steps in [Cordova Android - Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html#installing-the-requirements) to setup your development environment.

In Android Studio choose "Import project" and select the `cordova/platforms/android` folder.
You should now be able to run the app on device or emulator.

### iOS

Create the iOS platform:

```
yarn install:ios
```

Create the development build:

```
yarn dev:ios
```

Troubleshooting: In case you see the infamous `error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance`, you need to run:

```
sudo xcode-select -switch /Applications/Xcode.app/Contents/Developer
```

Follow the steps in [Cordova iOS - Installing the Requirements](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html#installing-the-requirements) to setup your development environment.

Open the Project folder in Xcode:

```
open ./platforms/ios/PolkaKey.xcworkspace/
```

You can now select a device from the dropdown in the upper-left corner and run the application.
