// const products = [
// { name:'shampoo',price:1000},
// { name:'moisturizer',price:400},
// { name:'shirt',price:700},
// { name:'pants',price:1400},


// ]

// function getShoppingTotal(products){

//     let total = 0;
// for(const product of products){

//     total = total + product.price;
// }

// return total;

// }

// const total = getShoppingTotal(products);
// console.log('total is: ', total);


// another example

const products = [
    { name:'shampoo',price:1000, quantity:2},
    { name:'moisturizer',price:400, quantity:3},
    { name:'shirt',price:700, quantity:5},
    { name:'pants',price:1400, quantity:1},
    
     ]
 function cartTotal(products){

    let total = 0;

    for(const product of products){

        const thisProductCost = product.price * product.quantity;
        total = total + thisProductCost;
    }
    return total;
 }

 const shoppingCost = cartTotal(products);

 console.log(shoppingCost);
