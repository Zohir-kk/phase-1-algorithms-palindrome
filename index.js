function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}


/*
  Add your pseudocode here
  function isPalindrom(word)
  the word is split then reversed then joined again equals
  'word' then it checks if its equal to original word
*/

/*
  Add written explanation of your solution here
  the function isPalindrom takes a word splits it into letters, reverses the order than joins them again then
  checks if its the same as the original word it returns true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("work"));
}

module.exports = isPalindrome;
