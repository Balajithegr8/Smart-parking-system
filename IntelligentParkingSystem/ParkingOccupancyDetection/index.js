const { spawn } = require('child_process');
const temperatures = [];

// Function to run the Python script
function runPythonScript() {
    const sensor = spawn('python', ['op.py']);
    sensor.stdout.on('data', function(data) {
        // convert Buffer object to Float
        temperatures.push(parseFloat(data));
        console.log(temperatures);
    });
}

// Run the Python script initially
runPythonScript();

// Set up a periodic execution every minute (60,000 milliseconds)
const intervalId = setInterval(runPythonScript, 6000);

// Stop the interval after a certain duration (e.g., 5 minutes)
setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval stopped after 5 minutes.');
}, 5 * 60 * 1000);
