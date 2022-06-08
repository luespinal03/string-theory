
function email(str) {
    let newStr = ""


    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            newStr = newStr + "."
        } else if (newStr = newStr + str[i]) {
        } 
    }

    return newStr + "@codeimmersives.com"
}

console.log(email("luis espinal"))








