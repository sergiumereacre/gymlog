# GymLog - Open sourced, fully local, fitness application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sergiumereacre/gymlog/fork)

An open-source fitness tracking application built with React Native. Contributions are welcome to the project.

## Features

- Track workouts & exercises
- Progress monitoring
- Fully local storage
- No databases, or services
- Cross-platform support

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Getting Started

### Pre-requisites

- [Windows Subsystem for Android (WSA)](https://gist.github.com/HimDek/eb8704e2da1d98240153165743960e17)
- [Android SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools)
- [Android studio](https://developer.android.com/studio)
- Node.js 18+ or Bun
- Expo CLI

### Installation

1. Clone the repository.

```bash
git clone https://github.com/sergiumereacre/gymlog.git
```

2. Install the dependencies using bun. (you can also just use npm)

```bash
bun install
```

3. Connect to Windows Subsystem for Android:

```bash
adb connect localhost:58526
```

4. Start the expo development environment for android.

```bash
bun expo run:android
```

5. Set up your local.properties file inside the android/ folder and bellow line.

```txt
sdk.dir = C:\\Users\\YOUR_USERNAME\\AppData\\Local\\Android\\sdk
```

## Project Structure

```txt
gymlog/
├── app/             # Navigation setup
├── assets/          # Static assets
├── components/      # Reusable components
├── constants/       # App constants
├── hooks/           # Custom hooks
├── stores/          # Stores for local storage
└── utils/           # Utility functions
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a feature branch locally.
3. Commit your changes to that branch.
4. Push the changes to the branch remotely.
5. Open a pull request into staging.
