// Function to toggle between light and dark modes
function toggleMode() {
  const body = document.querySelector('body');
  body.classList.toggle('light-mode');
  body.classList.toggle('dark-mode');
}

// Event listener for the toggle button
const toggleButton = document.getElementById('toggle-mode');
toggleButton.addEventListener('click', toggleMode);