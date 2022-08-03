// Assigment Operators
// =
// +=
// -=
// *=
// **=
// /=
// %=

// var numOne = 5;
// var numTwo = 10;
// // numOne = numOne + numTwo;
// numOne **= numTwo;
// console.log(numOne);



// ==================================================
// Arithmetic Operators

// +
// -
// /
// *
// %
// **
// ++
// --

// var numOne = 5;
// var numTwo = 10;
// numOne--;

// console.log(numOne);

// ==================================================
// Comparison Opertors 

// ==
// ===
// <
// <=
// >
// >=
// != 
// !==

// var numOne = "10";
// var numTwo = 10;

// if (numOne !==  numTwo) {
//     console.log(true);
// }else{
//     console.log(false);
// }

// ==================================================
// Logical Opertors 
// && - AND 
// || - OR
// ! - NOT



// if (!true) {
//     console.log("Duzdu kardes");
// }else{
//     console.log("Sehvdi kardes");

// }

// var dataUsername = "EminAbdullayev";
// var dataPass = "Emin123";

// var inputUsername = "EminAbdullayev";
// var inputPass = "Emin123";

// if ((dataUsername === inputUsername) && (dataPass === inputPass)) {
//     console.log('login successfull');
// }else{
//     console.log('pass or username wrong...');
// }


// ==================================================
// String Operators
// var info = "Java";
// var infoTwo = "Script";
// info += infoTwo;
// console.log(info);
// console.log(info+infoTwo);

// ==================================================
// Special Operators


// --------------------------------------------------------------------------------------------------
// Other (Special) Operators (Xüsusi operatorlar) Start

// ,            (vergül)(kodları bir-birindən ayırmaq və sintaksis qanun uyğunluqları icra etmək üçündür )
// var a = 5, b = 10;
// console.log(a,b);

// \            (tərs slash)(Qaçındırma operatorudur)
// var a = "JavaScript\"s Lessons";
// console.log(a);

// typeof       (tip üçün)(datanın tipini təyin etmək üçündür)
// var a = true;
// console.log(typeof(a));

// ?:           (sual üst-üstə qoşa nöqtə)((şərt) ? ifadə1 : ifadə2)(ternary)
// şərt            ? true                 : false
// (5<10) ? console.log("Duzdur"): console.log("Sehvdir");


// void         (dəyişkənin dəyərini undefined etmək üçündür)
// var a = undefined;
// console.log(a);

// delete       (objectin dəyərini silmək üçündür)
// var b = {
    // test:"Hello"
// };
// delete b.test;

// console.log(b);

// new          (yeni dəyər yaratməq üçündür)
// class Human{
//     constructor(name){
//         this.ad = name;
//     }
//     sayHi(){
//         return `Hello ${this.ad}`;
//     }
// }

// const myHuman = new Human("Shamil");
// console.log(myHuman.sayHi());
// this         (mövcud dəyəri işarələmək üçündür)

// in           (dəyişkənin(object) daxilində dəyərin olub olmamasını yoxlamaq üçündür)
// const car = { make: 'Honda', model: 'Accord', year: 1998 };

// console.log('make' in car);
// // expected output: true

// delete car.make;
// if ('make' in car === false) {
//   car.make = 'Suzuki';
// }

// console.log(car.make);
// // expected output: "Suzuki"

// instanceof   (dəyişkənin(objectin xüsusiyyətinin) içində xüsusiyyət olub olmamasını yoxlamaq üçündür)

// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   const auto = new Car('Honda', 'Accord', 1998);
  
//   console.log(auto instanceof Car);
  // expected output: true
  
//   console.log(auto instanceof Object);
  // expected output: true
  



    

// Other (Special) Operators (Xüsusi operatorlar) End
// --------------------------------------------------------------------------------------------------



