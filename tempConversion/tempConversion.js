const ftoc = function(fahrenheit) {
    return Math.round(((fahrenheit-32)*(5/9))*10)/10;
}

const ctof = function(celcius) {
    return Math.round((((celcius)*(9/5))+32)*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
