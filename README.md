# WeatherAppJS

A simple web interface to display real-time weather information using the OpenWeatherMap API.

## Features

- **Real-time Weather Data**: Fetches current temperature, humidity, wind speed, and weather conditions.
- **Search Functionality**: Allows users to search for weather conditions in any city globally.
- **Dynamic UI**: Background images and icons change based on the current weather (Clear, Rain, Snow, Clouds, Haze).
- **Error Handling**: Gracefully handles invalid city names with a "Not Found" display.
- **Responsive Design**: Clean and responsive user interface.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- A text editor (VS Code) if you wish to modify the code.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/condog220/WeatherAppJS.git
    cd WeatherAppJS
    ```
    *(Or simply download the ZIP file and extract it)*

2.  **Configure the API Key:**
    > You need your own API key from OpenWeatherMap to make this application work.

    - Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api).
    - Generate an API Key.
    - Open `index.js` in your text editor.
    - Locate the line:
      ```javascript
      const APIKey = "Enter API Key here";
      ```
    - Replace `"Enter API Key here"` with your actual API key string.

### Usage

1.  Open `index.html` in your web browser.
2.  Enter a city name in the search bar (e.g., "London", "New York", "Tokyo").
3.  Click the search button (magnifying glass icon).
4.  View the current weather details for that location.
