window.promises = [];
const promises = [
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 5000)),
  new Promise(resolve => setTimeout(() => resolve(Math.random() * 4 + 1), Math.random() * 5000))
];

Promise.any(promises).then(result => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `The winner is ${result.toFixed(2)} seconds!`;
});

// Do not change the code above this
// add your promises to the array `promises`
