// // //gravity flip

// // const flip=(d, a)=>{
// //     if(d === 'R') return a.sort((a,b)=>a-b);
// //     if(d === 'L') return a.sort((a,b)=>b-a);
// //   }

// //   const flip = (d, a) => d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a)

// //   const flip = (d, a) => d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b-a)

// // highAndLow("1 2 3 4 5");  // return "5 1"

// function highAndLow(numbers){
//     numbers = numbers.split(' ')
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`
// }
//return the smallest value
// function smallValue(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }
// function solution(number){
//     let sum = 0
//     for (let i = 1; i < number.length; i++){
//       if(number % 3 === 0 || number % 5 === 0){
//         sum +=1
//       }
//         return sum
//       }
//   }
//   function solution(number){
//     var sum = 0;
    
//     for(var i = 1;i< number; i++){
//       if(i % 3 == 0 || i % 5 == 0){
//         sum += i
//       }
//     }
//     return sum;
//   }



//return odd or even
// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }

//return longest string:
// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array. strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// function longestConsec(strarr, k){
//   let longest = ""
//   for(let i = 0; k > 0 && i <= strarr.length - k;i++){
//     let tempArray = strarr.slice(i, i+k)
//     let tempStr = tempArray.join("")
//     if (tempStr.length > longest.length){
//       longest = tempStr
//     }
//   }
//   return longest
// }


// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// function pigIt(str){
//   const arr = str.split(' ')
//   return arr
//   .map((word) =>{
//     return word.match(/[A-z]/i)
//     ? `${word.substr(1)}${word.substr(0,1)}ay`
//     : word
//   })
//   .join(' ')
// }

// function isPrime(num){
//   for (let i = 2; i <= Math.sqart(num); i++){
//     if(num % i == 0){
//       return false
//     }
//   }
//   return num > 1
// }
//cipher question we did not get
// function rot13(message) {
//   return message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
// } 
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

// Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
// function sumOfParts(num) {
//   return num.split('').reduce((a, b) => a + +b, 0)
// } 

// function orderWeight(string) {
//   return string
//       .split(' ')
//       .sort((a, b) => sumOfParts(a) - sumOfParts(b) || a > b || -(a < b))
//       .join(' ');
// }
//return a quadratic function:

// function quadratic(x1, x2) {
//   return [1, -(x2 + x1), x1 * x2];
// }

//same case porblem
// function sameCase(a, b){
//   if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
//      return -1
//    }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//        return 1
//    }else{
//      return 0
//    }
//  }

//  function sameCase(a, b){
//   // Am regex fiend, but trying to force myself not to use it
//   // If a character is not a letter then the cases will match each other
//   if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
//     return -1;
//   }
//   return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
// }