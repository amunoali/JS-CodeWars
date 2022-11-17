// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to']

//taking in a string of words
//output an array sorted last index alabetical order
//split it, sort it ascending order
//charcodeat is 0 index treating string as index value-returns the character itself not the lexical graphical

function last(str){
return str.split(' ').sort((a,b)=> a.charCodeAt(a.length -1 )-b.charCodeAt(b.length -1 ))

}


console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(last('what time are we climbing up the volcano'),['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])