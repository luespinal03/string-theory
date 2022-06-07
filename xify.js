function xify(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        newStr = newStr + "x" // same thing: newStr +=
    }

    return newStr
}

console.log(xify("hello"))
console.log(xify("hi there"))

