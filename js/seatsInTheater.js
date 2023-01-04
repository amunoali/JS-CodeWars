// Seats in Theater:
// function seatsInTheater(nCols, nRows, col, row){
//     return (nCols - col + 1) * (nRows - row)
// }
// seatsInTheater(832, 288, 137, 157)

  function findMultiples(integer, limit) {
    let result = []
    for (let i = integer; i<=limit ; i+=integer)
      result.push(i)
      return result
  }
  //simpler way:
//   function findMultiples(int,limit){
//     return Array(Math.floor(limit/int)).fill(1).map((x,i)=>int*(i+1));
//   }