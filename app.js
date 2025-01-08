// OpenWeatherMap API Configuration
const apiKey = 'Your_API_KEY';

// DOM Elements
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('getWeather');
const resultSection = document.getElementById('result');

// Fetch weather data from API
async function getWeather(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`
        );
        const data = await response.json();

        // Check if API call was successful
        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        // Validate weather data
        if (!data.main || !data.weather || !data.weather[0]) {
            throw new Error('Weather data not available');
        }

        // Process weather data
        const weather = {
            name: data.name,
            temp: Math.round(data.main.temp), // Round temperature to nearest integer
            description: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
            icon: data.weather[0].icon
        };

        displayWeather(weather);
    } catch (error) {
        displayError(error.message);
    }
}

// Display weather information
function displayWeather(weather) {
    // Remove hidden class to show the result section
    resultSection.classList.remove('hidden');
    
    const weatherIcon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    
    resultSection.innerHTML = `
        <div class="weather-info">
            <h2>${weather.name}</h2>
            <div class="weather-main">
                <img src="${weatherIcon}" alt="${weather.description}" class="weather-icon" />
                <div class="temperature">
                    <span class="temp-value">${weather.temp}</span>
                    <span class="temp-unit">°C</span>
                </div>
            </div>
            <p class="weather-description">${weather.description.charAt(0).toUpperCase() + weather.description.slice(1)}</p>
            <div class="weather-details">
                <div class="detail">
                    <span class="label">Humidity</span>
                    <span class="value">${weather.humidity}%</span>
                </div>
                <div class="detail">
                    <span class="label">Wind Speed</span>
                    <span class="value">${weather.windSpeed} m/s</span>
                </div>
            </div>
        </div>
    `;
}

// Display error messages
function displayError(message) {
    resultSection.classList.remove('hidden');
    resultSection.innerHTML = `
        <div class="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <p>${message}</p>
        </div>
    `;
}

// Event Listeners
getWeatherButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    
    if (city) {
        getWeather(city);
    } else {
        displayError('Please enter a city name');
    }
});

// Handle Enter key press
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getWeatherButton.click();
    }
});

// Clear input on focus
cityInput.addEventListener('focus', () => {
    cityInput.value = '';
});
