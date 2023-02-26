// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1, s2) {
    let count = 0
    //split it
    let splitedS1 = s1.split('')
    let splitedS2 = s2.split('')
    //loop it
    for (let i=0; i <s1.length; i++ ){
        const index = s2.indexOf(s1[i])
        if (index >= 0){
              s2 = s2.replace(s1[i],'');
            count++
        }
    }
    return count
    }