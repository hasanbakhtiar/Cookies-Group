// p.innerHTML = `${window.location.hostname}`;
// p.innerHTML = `${window.location.pathname}`;
// p.innerHTML = `${window.location.port}`;
// p.innerHTML = `${window.location.protocol}`;
// p.innerHTML = `${window.location.href}`;
// if (location.port == 5500) {
//     console.log('blocked');
// }else{
//     console.log('access');
// }
// const a =()=>{history.back()}

// p.innerHTML = `${navigator.cookieEnabled}`;
// p.innerHTML = `${navigator.platform}`;
// p.innerHTML = `${navigator.language}`;
// p.innerHTML = `${navigator.onLine}`;

// if (navigator.language === 'en-US') {
//     console.log('us');
// }else{
//     console.log('other lang');
// }

const p = document.createElement("p");
// document.querySelector('button').onclick = ()=>{
//     if (confirm ('press button')) {
//         p.innerHTML = 'u pressed the button'
//     }else{
//         p.innerHTML = 'u didnt press the button'
//     }
    
// }
// p.innerHTML = prompt('alet','value');

document.body.appendChild(p);

// 1s = 1000ms
// setTimeout(function, milliseconds);
// setTimeout(()=>{
//     document.write('hello')
// },1000);
// setInterval(function, milliseconds)
// setInterval(()=>{
//     document.write('hello')
// },1000);

setTimeout(()=>{
    document.querySelector('.loading').style.display = 'none';
    document.querySelector('.wrapper').style.display = 'block';
},2000);

// p.innerHTML = new Date();
// p.innerHTML = new Date().getFullYear();
// p.innerHTML = new Date().getMinutes();
// p.innerHTML = new Date().getHours();
setInterval(() => {
    
    p.innerHTML = new Date().getSeconds();
}, 1000);