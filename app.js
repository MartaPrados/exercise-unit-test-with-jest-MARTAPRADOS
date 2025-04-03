let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
  };
  
  const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
  };
  
  const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro * oneEuroIs.JPY;
  };
  
  const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro * oneEuroIs.GBP;
  };
  
  const sum = (a, b) => {
    return a + b;
  };
  
  console.log(sum(7, 3));
  console.log("10 euros en dólares:", fromEuroToDollar(10));
  console.log("10 dólares en yenes:", fromDollarToYen(10));
  console.log("10 yenes en libras:", fromYenToPound(10));
  
  module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, sum };
  