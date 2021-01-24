// This is the age variable
var myAge = 14;
// This is how early the dogs are
let earlyYears = 2;
earlyYears *= 10.5;
// Accounted for the first two years.
let laterYears = myAge - 2;
// Multiply laterYears by 4.
laterYears *= 4;
console.log(earlyYears, laterYears);
// This line will add earlyYears and laterYears
var myAgeInDogYears = earlyYears + laterYears;
// This line converts to lowercase letters
var myName = "ERIC".toLowerCase();
// This line prints the code
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);