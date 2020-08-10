# Transactions Manager

<img src="src/assets/img/preview.gif" alt="drawing" width="200"/>

# Requesites

- [node 12.13.0 or higher](https://nodejs.org/dist/v10.15.3/) [is indicate to use [nvm](https://github.com/nvm-sh/nvm)]
- [Open JDK 8](https://openjdk.java.net/install/)
- [react-native-cli or expo-cli](https://facebook.github.io/react-native/docs/getting-started)

# Development Workflow

Recommended use a linux SO distribution to develop

## Linux

### 1. Clone and cd into the repo:

```bash
git clone git@github.com:julianosbento/transaction-manager.git && cd transaction-manager
```

### 2. Install dependencies:

```bash
npm i || yarn
```

### 3. Start the project

To start the project you will need 2 terminals and a device (you can emulate one in [Android Studio](https://developer.android.com/studio/?gclid=EAIaIQobChMIrKivrfGl5QIVr4VaBR39FQbmEAAYASAAEgK8EPD_BwE))

First run the project

```bash
npm run start || yarn start
```

After that, run your device. To configure one follow the steps bellow:

1. Open Android Studio
2. Click in **Configure** and **SDK Manager**
3. Firsrt in SDK Plataforms tab select:
   - Android 10.0 (Q)
   - Android 8.1 (Oreo)
   - Android 8.0 (Oreo)
   - Android 7.0 (Nougat)
   - Android 6.0 (Marshmallow)
   - Android 5.1 (Lollipop)
   - Android 4.4 (KitKat)
4. Second in SKD Tools tab select:
   - Android SDK Build-Tools
   - NDK (Side by side)
   - CMAKE
   - Android Emulator
   - Android SDK Plataforms-Tools
   - Android SDK Tools
5. Click in Apply, wait download all the packages and after finish click in OK
6. Click in **Configure** and **AVD Manager**
7. Now we will create a new device, let's click in Create Virutal Device
   - Select a device that you want
8. Now run your device

After your device is running (you need wait until it's finish starting, like when you turn-on your phone), after that run the command bellow in a new terminal:

```bash
npm run android || yarn android
```

### Tips

Sometimes some errors happens .... here are some solutions we have found:

1. When your devide say "Not enough disk":
   Click in the icon More Actions and `Wipe Data`

2. KVM is required to run this avd
   Run command `sudo chown $USERNAME:$HOSTNAME /dev/kvm` and try again

3. node watchers bug or something envolving watchers when run npm start or yarn start ?

- Run command `bash shell/bug.sh` and try again

# Deploy

## Android

In a terminal, run the following commands

```
$ (cd android/ && ./gradlew bundleRelease)
```

This will generate an app bundle called `app-release.aab` inside `android/app/build/outputs/bundle/release`

Take this file and upload it on the Play Store release that you want to rollout

# Generating a new apk release

To generate a new release, at the root folder of the project, run this command

```
(cd android/ && ./gradlew installRelease)
```

This will generate an app bundle called `app-release.apk` inside `android/app/build/outputs/apk/release`

So you can install it directly on your device using this file (requires "allow unknown source" at device settings in order to work)

# Tests

## Unity tests

### Standard

- To run the unity tests, just run `npm test or yarn test` in your terminal

### Specific tests

- You could run a single test passing the relative path of test file, following the example

```
npm test or yarn test __test__/store/ducks/*.js
```

### Updating the snapshots

- To update the snapshots of app components run `npm test -- -u`

# Debug

## React

### Browser Console

- Shake the device (or use the command `bash shell/shake.sh`, depending on your device) and click in "Debug JS Remotly", this will open the browser console, there you can access the code, use break points and debug more deeply

### Logcat

- With the application running you can run `react-native log-android`, this will print every native log or JS log

### Perf Monitor

- To debug the frames and the performance, you could shake the device (or use the command `bash shell/shake.sh`, depending on your device) and click in perf monitor, this will open a small screen at the top of your screen with the parameters

### Toggle Inspector

- To debug the screen disposition, you could shake the device (or use the command `bash shell/shake.sh`, depending on your device) and click in Toogle Inspector to inspect the screen

# App structure

```
| -- __tests__
| -- android
| -- ios
| -- shell
| -- src
  | -- assets
  | -- components
    | -- general
    | -- global
    | -- some sub module components
  | -- config
  | -- lib
  | -- routes
  | -- screens
  | -- services
  | -- store
    | -- ducks
      |-- modules
  | -- types
  | -- utils

```
