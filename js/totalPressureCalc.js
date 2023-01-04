// Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure P_total exerted by the molecules. Formula to calculate the pressure is: Ptotal= (m1M1+m2M2)RT\V
// Input
// Six values :

// M1, M2 : molar masses of both gases, in grams (g)
// m1, m2 : present mass of both gases, in  g⋅mol −1
// V: volume of the vessel, in dm^3 
// T: temperature, in  °C

// Output
// One value: P total, in units of atmatmatm.



solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    return (givenMass1/molarMass1 + givenMass2/molarMass2) * 0.082 * (temp+273.15) / volume;
  }