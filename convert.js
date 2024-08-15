

// function inchTofeet(inch){

// const feet = inch/12;
// return feet;

// }

// const shuvoHeight = inchTofeet(75);

// console.log(shuvoHeight);


// another way

function inchToFeet2(inch){

const feetFraction = inch/12;

const feetNumber = parseInt(feetFraction);

const inchRemaining = inch % 12;

const result = feetNumber + ' ft ' + inchRemaining + ' inch. '

return result;


}

const shuvoHeight2 = inchToFeet2(75);

console.log(shuvoHeight2);