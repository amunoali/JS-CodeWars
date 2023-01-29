// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"
//getting string of words, returning a string that doesnt have duplicates

// function removeDupeWords(str){
// //str - split '  ' => filter conscecutive duplicates- if this word is the same as the word before, dont include it. filter take sin 3 pramters-el (current word), index(next), arr
// return str.split(' ').filter((e, index, arr)=> e !== arr[index -1]).join(' ')
// }

// console.log(removeDupeWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")