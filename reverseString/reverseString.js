const reverseString = function(word) {
    let reversal = ""
    for(i = word.length-1;i>=0;i--){
        reversal += word[i];
    }
    return reversal;
}

module.exports = reverseString
