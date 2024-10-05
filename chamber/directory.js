// Fetch member data from JSON and display 2–3 randomly selected gold or silver members
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const filteredMembers = members.filter(member => member.membership === 'gold' || member.membership === 'silver');
    const randomMembers = filteredMembers.sort(() => 0.5 - Math.random()).slice(0, 3);  // Randomly select 2-3 members
    const directory = document.querySelector('.directory');

    directory.innerHTML = ''; // Clear existing content
    randomMembers.forEach(member => {
        const memberCard = `
            <div class="member-card">
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>`;
        directory.innerHTML += memberCard;
    });
}

// Fetch weather data using OpenWeatherMap API
async function fetchWeather() {
    const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
    const city = 'Timbuktu';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const weatherData = await response.json();
    
    document.getElementById('temp').textContent = weatherData.main.temp;
    document.getElementById('description').textContent = weatherData.weather[0].description;

    // 3-Day Forecast (simple placeholder)
    document.getElementById('forecast').textContent = 'Sunny, Cloudy, Rainy';
}

// Toggle between grid and list views
function toggleView(view) {
    const directory = document.querySelector('.directory');
    directory.className = `directory ${view}`;
}

// Set copyright year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    fetchWeather();
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
