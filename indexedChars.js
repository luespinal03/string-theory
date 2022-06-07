function indexedChars(str) {
    let newStr = ""

    for(let i = 0; i < str.length; i++){
    newStr = newStr + i + str[i] 
}

    return newStr
}

console.log(indexedChars("hello"))
// h0e1l2l3o4