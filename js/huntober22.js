// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(str){
    let countObj = {}

    for (const c of str){
        if ( countObj[c] ){
            countObj[c]++
        }else{
            countObj[c]= 1
        }
    }return countObj
}
console.log(countChars('aba'), {'a': 2, 'b': 1})