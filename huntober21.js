// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 

//str of character - reversed 
//returning str that has been reversed

function reversedString(str){
//return s/r/j
//return str.split('').reverse().join('')
//loop each character-adding charac to str
//ex leon -> noel -  empty str -> loop add each charac
let reverseStr = ''
for (let char of str){
    reverseStr = char + reverseStr
}
return reverseStr
}

console.log(reversedString('bob'), 'bob')
console.log(reversedString('john'), 'nhoj')
console.log(reversedString('sarah'), 'haras')