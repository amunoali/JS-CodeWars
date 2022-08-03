// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    //split the string by dash or underscore
    let words = str.split(/-|_/g)
    let camelCase = words[0]
    //a place to store camelCase string
    //skip capitalizating the first word
    
    //iterate over the split stri
    for (let i = 1; i <words.length; i++){
      const word = words[i]
      //append the current word capitlized to the camelCase string
      camelCase += word[0].toUpperCase() + word.slice(1)
    }
    //return camelCase string
    return camelCase
  
  }