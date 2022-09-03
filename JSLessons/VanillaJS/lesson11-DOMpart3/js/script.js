

// window.onscroll = ()=>{coloFull()}

// const coloFull = ()=>{
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.querySelector('header').style.backgroundColor = 'green';
//     }else{
//         document.querySelector('header').style.backgroundColor = 'red';

//     }
// }



// document.querySelector('button').onclick = ()=>{

    // document.querySelector('h1').classList.add('a');
    // document.querySelector('h1').classList.toggle('a');
    // document.querySelector('h1').classList.remove('a');

// }



const modeBtn = document.querySelector('#mode');
const nav  = document.querySelector('nav');
const modeItem = {
    dark: "navbar navbar-expand-lg bg-dark navbar-dark",
    light: "navbar navbar-expand-lg bg-light navbar-light",
    }

modeBtn.onclick = ()=>{
    if (nav.className === modeItem.light) {
        localStorage.setItem('mode',modeItem.dark);
        nav.className = localStorage.getItem('mode');

    }else{
        localStorage.setItem('mode',modeItem.light);
        nav.className = localStorage.getItem('mode');

    }
}

nav.className = localStorage.getItem('mode');

// Lang

const multiLangValues = {
    az: ["Ana Sehife","Haqqimizda","Xidmetlerimiz","Meqale","Elaqe"],
    en: ["Home","About","Services","Blog","Contact"],
}
const multiLangItem = document.querySelectorAll('.nav-link');
const langBtn = document.querySelector('#lang');

langBtn.onclick=()=>{
    if (langBtn.innerHTML === 'AZ') {
        localStorage.setItem('langData',multiLangValues.az);
     for( let m in multiLangValues.az){
        multiLangItem[m].innerHTML = localStorage.getItem('langData').split(',')[m];
     }

        localStorage.setItem('langBtn','EN');
        langBtn.innerHTML = localStorage.getItem('langBtn');

    }else{
        localStorage.setItem('langData',multiLangValues.en);
        for( let m in multiLangValues.en){
            multiLangItem[m].innerHTML = localStorage.getItem('langData').split(',')[m];
         }
        
        localStorage.setItem('langBtn','AZ');
        langBtn.innerHTML = localStorage.getItem('langBtn');
        


    }
}
for( let m =0 ; m< multiLangItem.length; m++){
multiLangItem[m].innerHTML = localStorage.getItem('langData').split(',')[m];
}
langBtn.innerHTML = localStorage.getItem('langBtn');




// localStorage.setItem('text','Bye');
// document.querySelector('h1').innerHTML = localStorage.getItem('text');
// localStorage.removeItem('text');
// localStorage.clear();