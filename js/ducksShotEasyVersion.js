// You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?

// You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect - hey maybe someone fiddled with the sights on the gun...

// Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.

// Example of start and end duck string with two successful shots:

// Start ---> |~~~~~22~2~~~~~|

// Bang!! Bang!!

// End ---> |~~~~~XX~2~~~~~|

// All inputs will be correct type and never empty.


function duckShoot(ammo, aim, ducks){
    //p-taking in string-also number of ammo, his aim
      //returning a string of how many ducks shot-mark X if not leave unchanfe
      //e duckShoot(6, 0.41, '|~~~~~22~2~~~~~|'), '|~~~~~XX~2~~~~~|';
      //p times ammo by aim and depending on that number is the number of ducks shot.
    for (let i =0; i< Math.floor(ammo * aim); i++){
      ducks = ducks.replace('2', 'X')
    }
     return ducks
    
    }
    