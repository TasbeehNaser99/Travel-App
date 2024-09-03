# Travel Planner
**Author: Tasbeeh Naser**

<p align="center">
  <a href="" rel="noopener">
 <img width=700px src="./src/client/public/img/imgofproject.PNG" alt="Project logo"></a>
</p>
A web application designed to help users plan and manage their trips efficiently. It integrates multiple APIs to provide comprehensive travel information, including weather forecasts, images, and more.

## Features

- **Location Data Retrieval**: Fetches detailed geographic information.
- **Weather Forecasting**: Provides weather updates specific to your trip.
- **Image Search**: Displays location images via the Pixabay API.
- **Trip Duration**: Calculates and displays the length of your trip.
- **Persistent Storage**: Saves trip details locally for easy access on return visits.

## Getting Started

### Prerequisites

- Node.js 18.18.2

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/TasbeehNaser99/Travel-App.git
    cd travel-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

### Development

- **Build for Development**

    ```bash
    npm run build
    ```

- **Start the Server**

    ```bash
    npm start
    ```

### Testing

- **Run Tests**

    ```bash
    npm test
    ```

### Configuration

- **API Keys**: Ensure your API keys for GeoNames, Weatherbit, and Pixabay are correctly configured in the respective configuration files.

## Usage

1. Launch the application in your web browser.
2. Input a destination and travel dates to receive trip information.
3. Access weather forecasts, location images, and calculate trip duration.


## Acknowledgements

- **GeoNames API**
- **Weatherbit API**
- **Pixabay API**
