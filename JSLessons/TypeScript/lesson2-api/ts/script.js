var ul = document.querySelector('ul');
fetch('https://restcountries.com/v3.1/all')
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var li = "";
    data.map(function (fd) {
        // console.log(fd.name.common);
        li += "<li>".concat(fd.name.common, "</li>");
    });
    ul.innerHTML = li;
});
