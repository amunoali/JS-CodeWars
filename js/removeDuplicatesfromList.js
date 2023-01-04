// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

function distinct(a) {
    let results = []
    for (let i = 0; i < a.length; i++){
      if(!results.includes(a[i])){
        results.push(a[i])
      }
    }
      return results
    }