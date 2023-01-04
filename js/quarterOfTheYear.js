
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
    // there are 4 quarters month 1-3 first q, mon4-6 second q, 7-9 in third q, 10-12 in 4th w
      if( month <= 3){
        return 1
      }else if (month <= 6){
        return 2
      }else if(month <= 9){
        return 3
      }else{
        return 4
      }
    }
    


//shorter way:

const quarterOf = (month) => {
    // Your code here
    return Math.ceil(month / 3);
  }