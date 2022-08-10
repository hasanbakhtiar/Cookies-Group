//  function funksiyaninAdi(parametr){
//     // hadise ve ya kod qurulushlari ucundur
//  }

// function salamNecesenYaxsisan

// function infoFunc(item){
//     // return item;
//     console.log(item);
// }
// // console.log(infoFunc(10));
// let myValue = 5;
// infoFunc(myValue);

// const infoFunc = function(item){
//     return item
// }

// console.log(infoFunc(5));

// oz-ozunu cagiran funksiya

// (function info(a,b){
//     console.log(a+b);
// })(10,15)

// NaN = Not a Number

// function info(a=100,b=20){
//     return a+b;
// }

// console.log(info(undefined,5));

// ES6
// Arrow function
// const infoFunc1 = function(){}
// const infoFunc2 = ()=>{}
// function infoFunc3(){}

// OBJECT
const infoObj = {
  car: [
    {
      brand: "BMW",
      model: "X7",
      color: "white",
      doorType: 4,
    },
    {
        brand: "BMW",
        model: "X5",
        color: "black",
        doorType: 2,
      },
      {
        brand: "Mercedes",
        model: "S500",
        color: "blue",
        doorType: 2,
      },
  ],
  speed:(s=100,t)=>{
        console.log(s/t); 
  }
};

// console.log(infoObj.speed(undefined,2));
// infoObj.speed(undefined,4);




// console.log(infoObj.car.length);

// for (let index = 0; index < infoObj.car.length; index++) {
//     console.log(infoObj.car[index].color, infoObj.car[index].model);
    
// }


// for (let i = 0; i < 3; i++) {
//     console.log(infoObj.car[i].color);
// }
