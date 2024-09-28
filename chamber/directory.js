// Fetch member data from JSON and display in the directory
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    const directory = document.querySelector('.directory');
    
    directory.innerHTML = ''; // Clear existing content
    members.forEach(member => {
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

// Toggle between grid and list views
function toggleView(view) {
    const directory = document.querySelector('.directory');
    directory.className = `directory ${view}`;
}

// Set copyright year and last modified date
document.addEventListener('DOMContentLoaded', () => {
    fetchMembers();
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
