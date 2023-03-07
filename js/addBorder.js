// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example

// For

// picture = ["abc",
//            "ded"]
// the output should be

// solution(picture) = ["*****",
//                      "*abc*",
//                      "*ded*",
//                      "*****"]

function solution(picture) {
    picture = picture.map(e => '*'.concat(e,'*'))
    let x = picture[0].length
    picture.unshift(Array(x).fill('*').join(''))
    picture.push(Array(x).fill('*').join(''))

    return picture;
}
