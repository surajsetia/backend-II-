/* Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/

/*let p=new Promise((resolve,reject)=>{
resolve("Wada pura kia");
});
console.log(p);

p.then((data)=>{
   console.log(data);
}).catch((err)=>{
    console.log(err);
}); */

let product=[{
    name:"samsung",
    amount:70000,
    quantity:100
},{
    name:"Iphone 16",
    amount:10000,
    quantity:0
}]


function buyProduct(product_Name){
    return new Promise((resolve,reject)=>{
        let isProduct=product.filter((p)=> p.name==product_Name)[0];
        if(!isProduct){
            return reject("product is not available");
        }
        resolve(isProduct.amount);
    });
}

buyProduct("Iphone 16").then((amount)=>{
    console.log(amount);
}).catch((err)=>{
    console.log(err);
});



// Three states of promise
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully. When resolve is called, (.then() method is called)
// 3. Rejected: The operation failed. When reject  is called, (.catch() method is called)