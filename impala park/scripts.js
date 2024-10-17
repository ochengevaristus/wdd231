document.addEventListener('DOMContentLoaded', () => {
  const visitorMessage = document.getElementById('visitor-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = new Date().getTime(); // Get current date in milliseconds

  if (lastVisit) {
    const daysDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    if (daysDifference < 1) {
      visitorMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
      visitorMessage.textContent = "You last visited 1 day ago.";
    } else {
      visitorMessage.textContent = `You last visited ${daysDifference} days ago.`;
    }
  } else {
    visitorMessage.textContent = "Welcome to Impala Park! Let us know if you have any questions.";
  }

  // Store the current date as the last visit date
  localStorage.setItem('lastVisit', currentDate);
});
