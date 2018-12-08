var repeatString = function(phrase,number) {
    let repeatedString = ""
    if (number<0){
        return "ERROR"
    }
    for (var i = 0;i<number; i++) {
        repeatedString += phrase;
    }
    return repeatedString;
}

module.exports = repeatString
