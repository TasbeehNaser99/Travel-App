import './styles/styles.scss';
import { getGeoCoordinates, getWeatherForecast, getImageForLocation, renderTripDetails, calculateTripLength } from './js/app.js';

// Event listener for the travel form submission
document.getElementById('travel-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Retrieving user inputs
    const destinationInput = document.getElementById('location').value;
    const tripStartDate = document.getElementById('start-date').value;
    const tripEndDate = document.getElementById('end-date').value;

    try {
        // Fetching coordinates, weather, and image data
        const locationCoordinates = await getGeoCoordinates(destinationInput);
        const locationWeather = await getWeatherForecast(locationCoordinates.lat, locationCoordinates.lng);
        const locationImage = await getImageForLocation(destinationInput);

        // Calculating the trip duration
        const tripLength = calculateTripLength(tripStartDate, tripEndDate);

        // Rendering the trip details on the page
        renderTripDetails(locationCoordinates, locationWeather, locationImage, tripStartDate, tripEndDate, tripLength);
    } catch (error) {
        console.error('An error occurred while fetching trip data:', error);
        alert('Failed to retrieve trip details. Please check your input and try again later.');
    }
});
