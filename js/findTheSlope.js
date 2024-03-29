// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

//    a:x1
//    b:y1
//    c:x2
//    d:y2
// Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope:

function slope(points){
if (points[0] == points[2] ){
  return 'undefined' 
}else{
return ((points[3] - points[1]) / (points[2] - points[0])).toString()
}
  }