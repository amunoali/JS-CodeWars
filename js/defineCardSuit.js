// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

function defineSuit(card) {
    let x = card.substr(-1)
    switch(x){
        case '♣' : return 'clubs'
        case '♦' : return 'diamonds'
        case '♥' : return 'hearts'
        case '♠' : return 'spades'
    }
    
  }

//   simpler way:
//   function defineSuit(card) {
//     return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
// }