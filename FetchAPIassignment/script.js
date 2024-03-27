// Define variables
const fetchFactButton = document.getElementById('fetchFactButton');
const factContainer = document.getElementById('factContainer');

// Event listener for fetch fact button
fetchFactButton.addEventListener('click', fetchRandomCatFact);

// Function to fetch random cat fact from Cat Facts API
function fetchRandomCatFact() {
    // Fetch random cat fact from API
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat')
    .then(response => response.json())
    .then(data => {
        displayCatFact(data.text);
    })
    .catch(error => {
        console.error('Error fetching random cat fact:', error);
        factContainer.innerHTML = '<p>Failed to fetch random cat fact. Please try again later.</p>';
    });
} 

// Function to display cat fact on the webpage
function displayCatFact(fact) {
    factContainer.innerHTML = `<p>${fact}</p>`;
}


