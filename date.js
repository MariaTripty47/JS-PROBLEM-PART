const today = new Date();
const date = new Date('2062-10-09')
console.log(date.getMonth());
const specificDate = new Date(2091,0,26);
specificDate.setMonth(9);
console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString('en-GB'));

