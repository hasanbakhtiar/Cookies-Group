"use strict";
// var a: number = 5;
// var b: string = "hello";
// console.log(a, b);

// var infoArr: Array<number> = [1,2,3,4,5];
// var infoArr: number[] = [1,2,3,4,5];
// var infoData: any[] = ["hello", 1, true];

// type objType = {
//     title:string,
//     price:number
// }[]

// var infoObj:objType = [
//   {
//     title: "title1",
//     price: 10,
//   },
//   {
//     title: "title1",
//     price: 20,
//   },
// ]


// var infoObj1 = [
//     {
//       title: "title1",
//       price: 10,
//     },
//     {
//       title: "title1",
//       price: 20,
//     },
//   ];
// console.log(infoObj);

var dataCall =(c:number,d:number)=>{
    return c+d;
}

var infoFunc = (a:number,b?:number):void=>{
     let q:number =a;
     console.log(dataCall(q,10));
     
}
infoFunc(5);




// class Person {
//     public iname:string;
//     public isurname:string;
//     public ibirthyear:number;

//     constructor(name:string,surname:string,age:number){
//             this.iname = name;
//             this.isurname = surname;
//             this.ibirthyear = age;
//     }
//     sayHi(){
//         return `Hello, ${this.iname}`
//     }
// }
// var infoPerson = new Person("Jhon","Morgan",40);
// console.log(infoPerson.iname);

