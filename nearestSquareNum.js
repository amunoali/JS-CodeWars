// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers


function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2);
}
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);