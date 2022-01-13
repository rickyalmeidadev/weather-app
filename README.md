# ⛅ Weather App

Cross-platform app that consumes the user's current location and displays
the current address and weather data for the region.

## Screenshots

| Light Mode | Dark Mode |
| ---------- | --------- |
| ![Screenshot_1642021588](https://user-images.githubusercontent.com/60705947/149235276-b446a8ac-2815-4a77-9786-ec7902edddfb.png) | ![Screenshot_1642021582](https://user-images.githubusercontent.com/60705947/149235274-ff617f04-cb6f-4876-9c84-f3f6378654dc.png) |

## Technologies used

- [TypeScript](https://www.typescriptlang.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [Redux](http://redux.js.org)
- [Axios](https://axios-http.com/)
- [date-fns](https://date-fns.org/)

## Environment variables

To run this project, you will need to add the following environment variable to the `.env` file:

```.env
OPEN_WEATHER_KEY=your-open-weather-key
```

Visit the [Open Weather how to start](https://openweathermap.org/appid) to create an account and get your key.

## Running locally

Clone the project:

```bash
git clone https://github.com/rickyalmeidadev/weather-app.git
```

Enter the project directory:

```bash
cd weather-app
```

Install dependencies:

```bash
yarn install
```

Start the Expo server:

```bash
yarn start
```

Then the browser will automatically open at the address http://localhost:19002 where
you can scan the QRCode and run the app on your own device.
You can also scan the QRCode from the terminal if you prefer.

Make sure you have Expo Client on your device, you can
get it from [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
or [App Store](https://apps.apple.com/br/app/expo-go/id982107779).

If you have an Android emulator or iOS simulator and want to use it, you can use the commands:

```bash
yarn android
# or
yarn ios
```

## Running the tests

To run the tests, run the following command:

```bash
yarn test
```

In order to see the coverage report, you can run:
```bash
yarn test:coverage
```

You can also run the tests in watch mode:

```bash
yarn test:watch
```

## Author

Made with 💛 by Ricky Almeida - [E-mail](mailto:ricky.almeida.dev@gmail.com) - [LinkedIn](https://www.linkedin.com/in/rickyalmeidadev)
