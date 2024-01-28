const os = require('os');

// Function to simulate CPU usage
function simulateCpuUsage() {
  const start = Date.now();
  const durationMs = 2000; // Simulate CPU load for 5 seconds

  while (Date.now() - start < durationMs) {
    // Perform a CPU-intensive task
    for (let i = 0; i < 100000; i++) {
      Math.sqrt(Math.random() * Math.random());
    }
  }

  console.log('CPU simulation complete');
}

// Function to simulate memory usage
function simulateMemoryUsage() {
  const start = Date.now();
  const durationMs = 5000; // Simulate memory load for 5 seconds

  const memoryUsageArray = [];
  while (Date.now() - start < durationMs) {
    // Allocate and release memory to simulate memory usage
    const array = new Array(1000000);
    memoryUsageArray.push(array);
  }

  console.log('Memory simulation complete');
}

module.exports.startSimulation = () => {
  // Check current CPU usage before simulating more
  const cpuUsage = os.loadavg()[0];
  console.log({ cpuUsage })
  if (cpuUsage < 0.8) {
    simulateCpuUsage();
  } else {
    console.log('CPU usage is high. Skipping CPU simulation.');
  }

  // Check available memory before simulating more
  const freeMemory = os.freemem();
  const totalMemory = os.totalmem();
  const freeMemoryPercentage = freeMemory / totalMemory;
  console.log({ freeMemoryPercentage })
  if (freeMemoryPercentage > 0.2) {
    // simulateMemoryUsage();
    console.log("done-- no memory test")
  } else {
    console.log('Free memory is low. Skipping memory simulation.');
  }
}
