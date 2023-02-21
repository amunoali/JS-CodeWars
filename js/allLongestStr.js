// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray) {
    let arrLength = 0
    let longestArr = []
    //find the longest len
   for (let i =0;i <inputArray.length; i++){
       if (inputArray[i].length >= arrLength){
           arrLength = inputArray[i].length
           
       }
       
   }
   //push only longest
   for (let j = 0; j< inputArray.length; j++){
       if (inputArray[j].length == arrLength){
           longestArr.push(inputArray[j])
       }
   }
   return longestArr
}
