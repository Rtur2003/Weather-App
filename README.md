# Minimal Weather App

A modern and minimalist weather app that allows users to check the current weather in any city. The app fetches real-time data from the OpenWeatherMap API and displays the temperature, weather conditions, humidity, and wind speed for the entered city.

## Features

- 🌦 Fetch current weather data for any city.
- 🌡 Displays temperature in Celsius.
- 💨 Shows wind speed and humidity levels.
- 🌍 Easy-to-use, clean, and minimalist UI.
- 🚀 Fast and responsive interface.

## How to Get an API Key for OpenWeatherMap

To fetch weather data in this app, you'll need a free API key from OpenWeatherMap. Follow the steps below to get your API key:

### Step-by-Step Guide to Obtain an API Key:

1. **Visit OpenWeatherMap:**
   - Go to the official website: [OpenWeatherMap](https://openweathermap.org/)

2. **Sign Up / Log In:**
   - If you don't have an account, create one by clicking **Sign Up** on the top-right corner.
   - If you already have an account, simply click **Log In** and enter your credentials.

3. **Navigate to API Section:**
   - After logging in, go to your **Dashboard**.
   - Under the **API keys** section, you'll see an option to **Create Key**.

4. **Create API Key:**
   - Give your API key a name (e.g., `WeatherAppKey`) and click **Generate**.
   - Your API key will be displayed under **API Keys**. 

5. **Copy the API Key:**
   - Copy the API key to your clipboard, as you’ll need it in your project.

### Adding Your API Key to the Project

Now that you've obtained your API key, you need to add it to the `app.js` file to make sure the app fetches weather data correctly.

1. **Open the `app.js` file:**
   - In your project folder, open the `app.js` file in a text editor or IDE.

2. **Locate the API key section:**
   - At the top of the `app.js` file, you'll find the line that defines the API key.
   - Replace the placeholder value with the API key you just copied.

   Example:
   ```javascript
   const apiKey = 'YOUR_API_KEY';  // Replace 'YOUR_API_KEY' with the key you obtained

## Screenshots

![Weather App Screenshot](screenshot.png)

## Installation

1. **Clone this repository:**

   ```bash
   git clone https://github.com/HasanArthurAltuntas/Weather-App.git
