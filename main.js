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
function solution(number){
    let sum = 0
    for (let i = 1; i < number.length; i++){
      if(number % 3 === 0 || number % 5 === 0){
        sum +=1
      }
        return sum
      }
  }
  function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }