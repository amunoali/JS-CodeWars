// This is awkward... I had a challenge planned for today, but I kept the computer open while I went to water my plants and came back to chaos on the screen. Not to worry, though! I've figured out what happened and we'll fix it today, ready to get back to our main decoding functions tomorrow.

// It turns out that a cat snuck in the house and decided to do some typing while I was away from my desk. Lucky break though, somehow the last key the cat managed to type was a lowercase 'c', and it also somehow managed to be the only lowercase 'c' the cat typed.

// If we remove everything up to and including that first 'c' we'll be at a great starting point! Go ahead and scrap all that cat scratch from the string below.



function letsFixIt(n){
    n.replace(/c/g, '').remove('Eek').reverse()
}