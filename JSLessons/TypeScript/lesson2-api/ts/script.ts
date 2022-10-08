var ul:any = document.querySelector<HTMLUListElement>('ul');


fetch('https://restcountries.com/v3.1/all')
.then((res:any)=>res.json())
.then((data:any)=>{
    let li:any = "";
    data.map((fd:any)=>{
        // console.log(fd.name.common);
        
        li+= `<li>${fd.name.common}</li>`
    })
    ul.innerHTML = li;
})