function coinToss() {
    // Generate a random number between 0 and 1
    let randomNum = Math.random();
  
    // Assign "Heads" if the number is less than 0.5, otherwise assign "Tails"
    let result = randomNum < 0.5 ? "Heads" : "Tails";
  
    return result;
  }
  
  let numTosses = parseInt(prompt("Enter the number of coin tosses:"));
  
  let results = [];
  for (let i = 0; i < numTosses; i++) {
    let result = coinToss();
    results.push(result);
  }
  
  console.log("Coin Toss Results:");
  for (let i = 0; i < results.length; i++) {
    console.log("Toss " + (i + 1) + ": " + results[i]);
  }
  