// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// Test.assertEquals(mygcd(30,12),6)
// Test.assertEquals(mygcd(8,9),1)
// Test.assertEquals(mygcd(1,1),1)

function mygcd(x,y){
    for (let i = Math.min(x,y); i > 0; i--){
        if( x % i === 0 && y % i === 0){
            return i
        }
    }
}

// Using recursion 
function mygcd(a,b){
    if(b === 0){
        return a
    }
    return mygcd(b, a % b)
}

console.log(mygcd(30,12), 6)
console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)
