// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

function maxMultiple(divisor, bound){
 
    return  bound - bound % divisor 
  }