// const text = document.querySelector('p');

// const multiColor = ()=>{
//     document.querySelector('input').attributes[1].value = 'hello';
//     document.querySelector('p').attributes[0].value = "green";
// }

// multiColor();


// const nav  = document.querySelector('nav');
// const modeBtn = document.querySelector('.mode');

// const pageMode =()=>{
//     if (nav.className === "navbar navbar-expand-lg bg-light navbar-light") {
//         nav.className = "navbar navbar-expand-lg bg-dark navbar-dark";
//         modeBtn.innerHTML = "☀️";
//         modeBtn.className ="mode btn btn-light";
//         document.body.className = "bg-dark";

//     }else{
//         nav.className = "navbar navbar-expand-lg bg-light navbar-light";
//         modeBtn.innerHTML = "🌙";
//         modeBtn.className ="mode btn btn-dark";
//         document.body.className = "bg-light";

//     }
// }

// const pageMode =()=>{
//     if (document.body.className === "b") {
//         document.body.className = 'a';
//     }else{
//         document.body.className = 'b';
        

//     }
// }





// modeBtn.onclick = pageMode;

// document.querySelector('#a').innerHTML = document.body.innerHTML;


document.querySelector('button').onclick = ()=>{
    // document.querySelector('p').classList.toggle('a');
    // document.querySelector('p').style.backgroundColor = 'green';
    // document.querySelector('p').style.color = 'red';

}

const menuBtn = document.querySelector('#menu');
const header =  document.querySelector('header');

menuBtn.onclick = ()=>{
    // header.classList.toggle('hide');
    if (header.className === 'show') {
        header.className = 'hide'
    }else{
        header.className = 'show'
    }
}