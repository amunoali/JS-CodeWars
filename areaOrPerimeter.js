// You are given the length and width of a 4-sided polygon. The polygon can be a rectangle or a square.
// If it's square, return its area. If it's rectangle, return its perimeter.

// area_or_perimeter(6, 10) --> 32
// area_or_perimeter(3, 3) --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

const areaOrPerimeter = function(l , w) {
    // Return your answer
    // p = 2 *(l*w)
    //a = l*w
    if(l === w){
      return l*w
    }else{
     return  2 * (l + w)
    }
  };

//   or easier way:
//   const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l + w)
//   };
