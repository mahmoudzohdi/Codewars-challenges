// Task
//  	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Rules
//  	1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// Good luck and enjoy!


// Solution
function wave(w){
  let wArr = [];
  for(let i = 0; i < w.length; i++){
      w[i] != ' ' && wArr.push(w.substr(0, i) + w[i].toUpperCase() + w.substr(i+1));
  }
  return wArr;
}