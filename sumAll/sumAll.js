const sumAll = function(startNumber,endNumber) {
    if (Number.isInteger(startNumber) != true ||
    Number.isInteger(endNumber)!= true || startNumber<0 || endNumber<0 ){
        return 'ERROR';
    }
    if (startNumber>endNumber){
        temp = startNumber;
        startNumber = endNumber;
        endNumber = temp;
    }
    let sum = 0;
    for (i=startNumber;i<=endNumber;i++){
        sum +=i;
    }
    return sum;
}

module.exports = sumAll
