// Task:
// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.
// Rules/Note:
// If n < 1 then it should return "" i.e. empty string.
// There are no whitespaces in the pattern.
// Pattern:
// 1
// 22
// 333
// ....
// .....
// nnnnnn
// Examples:
// pattern(5):

// 1
// 22
// 333
// 4444
// 55555
// pattern(11):

// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// 10101010101010101010
// 1111111111111111111111
// Hint: Use \n in string to jump to next line

//p taking in number, no whitespaces, and n should be greater than 1...if less thhan one then it should return empty string
//R: retuurning all of the numbers written how many times it says, for, should inclde spxace or return a new line,
//e: 2 -> 
// 1
// 22
//p: ned a .join(/n... if n <1 return empty string, if n>1, return )
function pattern(n){
    let output = "";
  for (let i =1; i<= n; i++){
    for (let j=0; j<i; j++){
       output += i
    }
   if (i === n) break
     output += "\n";
  }
   return output
  }