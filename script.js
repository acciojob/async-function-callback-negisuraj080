const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.
// Async function that takes a callback function
async function fetchData(callback) {
    try {
        // Fetch data from the API using async/await
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Call the callback function with the result
        callback(data.title);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Callback function to display the title on the webpage
function displayTitle(title) {
    const outputElement = document.getElementById('output');
    outputElement.textContent = title;
}

// Event listener for button click
document.getElementById('btn').addEventListener('click', () => {
    // Call the async function with the callback
    fetchData(displayTitle);
});
