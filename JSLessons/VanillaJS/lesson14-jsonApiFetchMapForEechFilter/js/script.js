// var car = '{"brand":"BMW","color":"red"}';

// var infoData = JSON.parse(car);

// console.log(infoData.brand);

// var car = {brand:"BMW",color:"red"};
// console.log(car.brand);
// var infoData = JSON.stringify(car);

// console.log(infoData);

// json
// ['hello']
// {
//     "name":"BMW"
// }

//js
// {
//     name:"BMW"
// }
// ['hello']

// // fetch data
// fetch('https://restcountries.com/v3.1/all')
// // if responce success
// .then((res)=>res.json())
// //use coming data
// // .then((data)=>console.log(data[1].name.common))
// .then((data)=>{
//     data.map((comingdata)=>{
//         return console.log(comingdata.name);
//     })
// })
// // map =>  looping array in data (with api or manual data)
// // if responce reject
// .catch((err)=>console.log(err));

// import {infoText,cars} from './utils.js';
// console.log(infoText);
// console.log(cars);
// import * as utilsData from './utils.js';
// // console.log(utilsData.infoText);
// // console.log(utilsData.cars);

// const ol = document.querySelector('ol');
// let li = "";
// utilsData.cars.map((a)=>
//    {return li += `<li>${a.model}:${a.color}</li>`}
//     // console.log(a.model)
// )
// ol.innerHTML = li;

const ol = document.querySelector("ol");
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    let li = "";
    if (data) {
      // data.map((k)=>(
      //     // li+=`<li>${k.name.common}</li>`
      //     console.log(k)
      // ))

    //   for (let n = 0; n < 1000; n += 50) {
    //     for (let x = n; x < n + 50; x++) {
    //       li += `<li>${data[x].name.common}</li>`;
    //     }
    //   }

        // for (let x = 0; x < 50 ; x++) {
        //   li += `<li>${data[x].name.common}</li>`;
        // }
    }
    ol.innerHTML = li;
  });
