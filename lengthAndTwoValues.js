// Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

// for input:                5, true, false
// expected result would be: [true, false, true, false, true]

function alternate(n, firstValue, secondValue){
    // your code
    let results = []
    for (let i = 0; i< n; i++){
      results.push (i % 2 === 0 ? firstValue : secondValue)
  }
    return  results
  }
  