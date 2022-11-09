var ol:any = document.createElement('ol');
var a = document.querySelector<HTMLLabelElement>('label');
document.body.appendChild(ol);
var productList = ()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res:any)=>res.json())
    .then((data:any)=>{
        let div:string = "";
        data.map((fd:any)=>{
            div+=`
            <li>
            <img width="100" src=${fd.image}>
            </li>
            `
        })
        ol.innerHTML = div;
    })
}
productList();