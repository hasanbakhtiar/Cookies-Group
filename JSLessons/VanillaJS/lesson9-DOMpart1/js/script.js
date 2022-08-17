// DOM - Document Object Module

// Selectors

// document.getElementsByTagName('p')[0].innerHTML = "Bye";
// document.getElementById('info').innerHTML = "bye1";
// document.getElementsByClassName('test')[0].innerHTML = "bye2";

// let cars = [
//     {
//         name:'bmw',
//         color:'white'
//     },
//     {
//         name:'lada',
//         color:'red'
//     }
// ]
// let fruits = ['apple','banan','cerry','orange'];

// for (let index = 0; index < fruits.length; index++) {
//     document.getElementsByTagName('li')[index].innerHTML = cars[index].name;
// }
// querySlectors

// document.querySelector('#b').innerHTML="bye q";
// document.querySelector('.a').innerHTML="bye qu";
// document.querySelectorAll('.a')[0].innerHTML="bye qu";

// Events
// const powerJs = ()=>{
//     document.querySelector('.pjs').innerHTML = "React JS";
// }

// document.querySelectorAll('button')[0].onclick = powerJs;

// const powerJs1 = ()=>{
//     document.querySelector('.pjs').innerHTML = "JS";
// }

// document.querySelectorAll('button')[1].onclick = powerJs1;
// document.querySelector('button').addEventListener('click',powerJs,false);

// Toggle
// const myText = document.querySelector('.pjs');
// const myBtn = document.querySelector('button');

// const myToggle =()=>{
//     if (myText.innerHTML == "JS") {
//         myText.innerHTML = "React JS";
//     }else{
//         myText.innerHTML = "JS";

//     }
// }
// myBtn.onclick = myToggle;
// myBtn.addEventListener('dblclick',myToggle);
// myBtn.addEventListener('mouseleave',myToggle);

const langItem = document.querySelectorAll(".nav-link");
const langBtn = document.querySelector(".lang");

// lang data
let az = ["Ana sehife", "Haqqimizda", "Xidmetlerimiz", "Meqale", "Elaqe"];
let en = ["Home", "About", "Services", "Blog", "Contact"];
const multiLang = () => {
  if (langBtn.innerHTML == "AZ") {
    for (let index = 0; index < az.length; index++) {
      langItem[index].innerHTML = az[index];
      langBtn.innerHTML = "EN";
    }
  } else {
    for (let index = 0; index < en.length; index++) {
      langItem[index].innerHTML = en[index];
      langBtn.innerHTML = "AZ";
    }
  }
};

langBtn.onclick = multiLang;

