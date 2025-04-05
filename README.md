# GymLog - Open sourced, fully local, fitness application

## Pre-requisites

Easiest way to develop for android is using Windows Subsytem for Android.

- Follow this [guide](https://gist.github.com/HimDek/eb8704e2da1d98240153165743960e17) to install WSA.

- Make sure to have android [sdk platform tools](https://developer.android.com/tools/releases/platform-tools) installed and added to path.

- Download [Android studio](https://developer.android.com/studio) so you can get the android sdk files inside your local app data.

Make sure developer options are enabled inside WSA and then connect to the local running environment using:

```bash
adb connect localhost:58526
```

## Installation

1. Clone the github repository to local space.

```bash
git clone https://github.com/sergiumereacre/gymlog.git
```

2. Install the dependencies using bun. (you can also just use npm)

```bash
bun install
```

3. Start the expo development environment for android.

```bash
bun expo run:android
```

4. Set up your local.properties file inside the android/ folder.
```sdk.dir = C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Android\\sdk```
