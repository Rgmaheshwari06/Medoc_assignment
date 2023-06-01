function coinToss() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();
  
    // Assign "Heads" if the number is less than 0.5, otherwise assign "Tails"
    var result = randomNum < 0.5 ? "Heads" : "Tails";
  
    return result;
  }
  
  var numTosses = parseInt(prompt("Enter the number of coin tosses:"));
  
  var results = [];
  for (var i = 0; i < numTosses; i++) {
    var result = coinToss();
    results.push(result);
  }
  
  console.log("Coin Toss Results:");
  for (var i = 0; i < results.length; i++) {
    console.log("Toss " + (i + 1) + ": " + results[i]);
  }
  