const removeFromArray = function() {
    let stuffToBeRemoved = [];
    for (i=1;i<arguments.length;i++){
        stuffToBeRemoved.push(arguments[i]);
    }
    console.log(stuffToBeRemoved);
    let arrayReceived = arguments[0];
    console.log(arrayReceived);
    let newArray = [];
    let check = 0;
    for (i=0;i<arrayReceived.length;i++){
        for (j=0;j<stuffToBeRemoved.length;j++){
            if (stuffToBeRemoved[j] != arrayReceived[i]){
                check =1;
            }
            else{
                check = 0;
                break;
            }
        }
        if (check == 1){
            newArray.push(arrayReceived[i]);
        }
    }
    return newArray;
}

module.exports = removeFromArray
