// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

// Great coding <3


function power(x,y){
    var result = 1;
    for(var i=0;i<y;i++){
      result = result*x;
    }
    return result;
  }

//   A simpler way is to use ** for exponents. 
// ex: function power(x,y){
//     return x**y
// }
// or
// const power = (x,y) => x ** y ;
