function getOriginalRandom() {
  // Generate random number between 9 and 20.
  return Math.floor(Math.random() * (20 - 9 + 1)) + 9;
}

function getNewRandom(originalRandom) {
  // We can first convert the random number to a number between 1 and 120 by:
  // 1. Finding the minimum number required to make the minimum original random to be 1;
  // That is 1 / 9.
  // 2. Finding the maximum number required to make the minimum original random to be 120;
  // That is 120 / 20 which is 6.
  // 3. What we can do now is to randomize the factor between (1 / 9) and 6; that is function generateRandomFactor
  // Using this method, there is always possibility of having numbers between 1 and 120 inclusive
  return Math.floor(originalRandom * generateRandomFactor());
}

function generateRandomFactor() {
  return Math.floor(Math.random() * (6 - (1 / 9))) + (1 / 9);
}

const originalRandom = getOriginalRandom();
console.log('Original random is:', originalRandom);
console.log('New random between 1 and 120 is:', getNewRandom(originalRandom));
