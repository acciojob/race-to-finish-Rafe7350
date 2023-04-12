window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
window.promises = [];

// Add a new promise to the promises array
window.promises.push(new Promise((resolve, reject) => {
  // Generate a random time between 1 and 5 seconds
  const randomTime = Math.floor(Math.random() * 5) + 1;
  
  // Simulate some asynchronous work
  setTimeout(() => {
    // Resolve the promise with the random time
    resolve(randomTime);
  }, randomTime * 1000);
}));

// Do not change the code below this
console.log(window.promises);
