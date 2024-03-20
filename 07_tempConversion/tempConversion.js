const convertToCelsius = function(degF) {
  celsius = (degF - 32) * (5/9);
  return (Math.round(celsius * 10) / 10);

};

const convertToFahrenheit = function(degC) {
  farenheit = (degC * (9/5)) + 32;
  return (Math.round(farenheit * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
