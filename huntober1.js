// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.
function fizzBuzz(num){
if (num % 5 == 0 && num % 3 == 0){
    return 'Fizz Buzz'
}else if (num % 5 == 0){
    return 'Buzz'
}else{
    return 'Fizz'
}
}

console.log(fizzBuzz(20))
console.log(fizzBuzz(15))
console.log(fizzBuzz(18))
console.log(fizzBuzz(200))