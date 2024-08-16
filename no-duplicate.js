/**
 * array has some duplicate elements
 */

const bookReader = ['ayesha','mayesha','tanisha','avisha','ayesha','alisha'];
const numbers = [1,5,61,5,87,7,5,81,61];

function noDuplicate(array){
const unique = [];
for(const item of array){
if(unique.includes(item) === false){

    unique.push(item);
}

}
return unique;
}

const uniqueArray = noDuplicate(bookReader);
console.log(uniqueArray);