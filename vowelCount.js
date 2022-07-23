// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {

//     return str.replace(/[^aeiou]/gi, '').length
      
//   }
  // The "g" makes it so the regex search is global (i.e., all matches in a string are returned, as opposed to a single match) and the "i" makes it so the search is case-insensitive.

  function getCount(str) {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i < str.length; i++){
      for (let j = 0; j <vowels.length; j++){
        if (str[i] == vowels[j]){
             count++
        }
       
      }
   
    }
       return count
  }