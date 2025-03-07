//your JS code here. If required.
function manipulateArray() {
    const outputDiv = document.getElementById('output');

    // Initial promise resolves after 3 seconds with the array [1, 2, 3, 4]
    const initialPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });

    initialPromise
        .then((numbers) => {
            // First Transformation: Filter out odd numbers (after 1 second delay)
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evens = numbers.filter(num => num % 2 === 0);
                    outputDiv.innerText = JSON.stringify(evens);
                    resolve(evens);
                }, 1000);
            });
        })
        .then((evenNumbers) => {
            // Second Transformation: Multiply even numbers by 2 (after 2 seconds delay)
            return new Promise((resolve) => {
                setTimeout(() => {
                    const doubled = evenNumbers.map(num => num * 2);
                    outputDiv.innerText = JSON.stringify(doubled);
                    resolve(doubled);
                }, 2000);
            });
        })
        .catch((error) => {
            outputDiv.innerText = "Error: " + error.message;
        });
}

// Start the process when the page loads
manipulateArray();
