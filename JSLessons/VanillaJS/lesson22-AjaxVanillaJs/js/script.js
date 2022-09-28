document.querySelector('button').onclick= function(){
    const ajaxmethod = new XMLHttpRequest();
    ajaxmethod.onload=function(){
        document.querySelector('p').innerHTML = this.responseText;
    }
    ajaxmethod.open("GET","../data/example.xls");
    ajaxmethod.send()
}
