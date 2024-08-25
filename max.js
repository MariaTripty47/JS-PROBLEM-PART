function getMax(num1,num2){
if(num1>num2){

    return num1;

}
else{
    return num2;
}

}

const max1 = getMax(77,99);
const max2 = getMax(112,99);
const ultimateMax = getMax(max1, max2);
console.log('max of two is:', ultimateMax);


// another

const jim = 56;
const tim = 89;
const kim = 68;

if(jim > tim && jim > kim){
    console.log('Jim is the ultimate boss')
}
else if(tim > jim && tim > kim){

    console.log('tim is the ultimate boss')
}
else{
    console.log('kim is the ultimate boss')
}

///-----or-----

function maxOfThree(num1,num2,num3){
if(num1>num2){

    return num1;

}
else if(num2>num3){
    return num2;
}
else{

    return num3;
}

}
const maximum1 = maxOfThree(77,99);
const maximum2 = maxOfThree(112,99);
const maximum3 = maxOfThree(1220,50);

const properMax = maxOfThree(maximum1, maximum2,maximum3);
console.log('maximum of three is:', properMax);

