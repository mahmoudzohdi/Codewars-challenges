// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// #Example:

// s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(s1, s2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,

// output: number as a string


function mxdiflg(a1, a2) {
  if(!a1.length || !a2.length) return -1;

  let lengthArr_1 = a1.map(a => a.length).sort((a,b) => a < b ? -1 : 1 );
  let lengthArr_2 = a2.map(a => a.length).sort((a,b) => a < b ? -1 : 1 );

  let diff_1 = lengthArr_1[lengthArr_1.length -1] - lengthArr_2[0];
  let diff_2 = lengthArr_2[lengthArr_2.length -1] - lengthArr_1[0];

  return Math.max(diff_1, diff_2);

}