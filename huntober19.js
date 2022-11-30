// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

// function missingVowel(str){
// //list all vowels - loop through each vowel  and see if str exist 
// let vowels = 'aeiou'
// for (let i = 0; i< vowels.length; i++){
//     if(str.indexOf(vowels[i]) == -1) //whatever vowel im currenly in if theres an index of a, e in the string. if letter not inside str, it wont have index. index also gives -1 val, loop through each val and see if a has an index inside str
//     return i
// }

// }

// //loop inside loop- its O(5n)

function missingVowel(str){
    return [...'aeiou'].findIndex(x => !str.includes(x))


}
console.log(missingVowel("John Doe hs seven red pples under his bsket"  ), '0' )
console.log(missingVowel("Bb Smith sent us six neatly arranged range bicycles"  ), '3' )