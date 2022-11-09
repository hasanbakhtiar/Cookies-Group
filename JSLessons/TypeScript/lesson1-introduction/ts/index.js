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
var dataCall = function (c, d) {
    return c + d;
};
var infoFunc = function (a, b) {
    var q = a;
    console.log(dataCall(q, 10));
};
infoFunc(5);
