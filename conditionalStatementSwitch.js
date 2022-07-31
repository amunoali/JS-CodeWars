// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).
// describe("Tests", () => {
//     it("test", () => {
//       Test.assertSimilar(howManydays(1),31);
//       Test.assertSimilar(howManydays(2),28);
//       Test.assertSimilar(howManydays(3),31);
//       Test.assertSimilar(howManydays(4),30);
//       Test.assertSimilar(howManydays(12),31);
//     });
//   });

function howManydays(month){
    var days;
    switch (month){
        case 2: return 28
        case 4:
        case 6:
        case 9:
        case 11: return 30
        }
    return 31
        
    
    }
  