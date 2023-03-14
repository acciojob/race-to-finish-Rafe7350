window.promises = [];
const promises = []

Promise.any(promises).then(result => {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = `The winner is ${result.toFixed(2)} seconds!`;
});

// Do not change the code above this
// add your promises to the array `promises`
