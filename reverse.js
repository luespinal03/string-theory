// let string1 = ["colin"]
// let string2 = ["mesuara"]

// string1.reverse()
// // // string2.reverse()

// console.log(string1.reverse())

// for (let i = 0; i < string1.length; i++) {
//     console.log(string1[i])
// }



function reverseString(str){
    return str.split("").reverse().join("")
}

console.log(reverseString("colin"))
console.log(reverseString("mesuara"))
