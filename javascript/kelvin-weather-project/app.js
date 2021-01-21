// This is Kelvin's current temperature
var kelvin = 0;
// This is celsius temperature.
var celsius = kelvin - 273;
// This line converts to fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
// This line rounds down the number.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The current newton is: ${newton}`);