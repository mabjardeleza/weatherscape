# WeatherScape

WeatherScape is a weather application showing a 16 day forecast from the current day. The initial location is retrieved by Geolocation and can be changed by location name on the search bar.

Each location will trigger a change in the background image, showing a relevant photo randomly taken from [Unsplash](https://unsplash.com).

## Prerequisites

Make sure to have the following:

1. [NodeJS](https://nodejs.org/en/) of at least version 8.x.
2. [Yarn](https://classic.yarnpkg.com/en/)
3. [WeatherBit](https://www.weatherbit.io/) account with an API Key.
4. [Unsplash](https://unsplash.com/developers) developer account with an ACCESS Key.

## Environmental Variables

Create a `.env` file on the project root and add the following:

```
REACT_APP_WEATHERBIT_API_KEY=<YOUR-WEATHERBIT-API-KEY>
REACT_APP_UNSPLASH_ACCESS_KEY=<YOUR-UNSPLASH-ACCESS-KEY>
REACT_APP_UNSPLASH_APP_NAME=<YOUR-UNSPLASH-APP-NAME>
```

## Running the app

`$ yarn install` to install all dependencies.

`$ yarn start` to run the application.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Notes

Demo applications for Unsplash have a rate limit of 50 requests per hour.
