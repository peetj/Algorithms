
function doSearch(srcArr, target) {
  console.log("binarySearch...");

  let min = 0
  let max = srcArr ? srcArr.length -1 : -1 ;
  let guess;

  while (max > min) {
    guess = Math.floor((min + max)/2)
    console.log(guess)
    if(srcArr[guess-1] === target){
      console.log(`Congratulations: You found the answer ${guess}`)
      return guess
    }
    else if (srcArr[guess-1] < target){
      min = guess +1
    }
    else {
      // Guess was too high!
      max = guess -1
    }
  }

  console.log(`Stop! Target ${target} is not present in array`)
  return -1
}

module.exports = { doSearch }