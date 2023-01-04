// He did manage to research the formula for blood-alcohol content before getting too drunk, which he describes below.

// BAC calculator Formula:

// BAC% = (A × 5.14 / W × r) - .015 × H 

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours
// Source:

function bloodAlcoholContent(drinks, weight, sex, time){
    return +(drinks.ounces * drinks.abv * 5.14 / weight * (sex === 'male' ? 0.73 : 0.66) - 0.015 * time).toFixed(4) 
      
    }