document.getElementById('calculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('inputValue').value;
    const result = calculateEI(inputValue);
    document.getElementById('result').innerText = `Calculated EI: ${result}`;
});

function calculateEI(value) {
    // Example calculation logic
    return value * 2; // Replace with actual logic
}
