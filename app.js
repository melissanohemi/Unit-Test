// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
    }
    const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar / 1.2 ) * 127.9;
    return valueInYen;
    
    }
    
    // this is my function that sums two numbers
    const sum = (a,b) => {
    return a + b
    }
    
    
    const fromYenToPound = function (valueInYen){
        let valueInPound = (valueInYen/127.9) * .8
        return valueInPound
    }
    module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
    
   