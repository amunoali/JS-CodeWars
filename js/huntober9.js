// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//string-with characters-empty spaces allowed--string left and right
//returning string
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function encodeDupes(string){
//toLowerCase
//split -> map -> (see if it repeats) indexOf == lastIndexOf ? '(' : ')'
//join back string
return string.toLowerCase()
            .split('')
            .map( (l,i,a) => a.indexOf(l) == a.lastIndexOf(l) ?  '(' : ')' )
            .join('')

}
//O(n^2)

console.log(encodeDupes("din"), "(((" )
console.log(encodeDupes("recede"))
