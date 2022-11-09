var ol = document.createElement('ol');
var a = document.querySelector('label');
document.body.appendChild(ol);
var productList = function () {
    fetch('https://fakestoreapi.com/products')
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var div = "";
        data.map(function (fd) {
            div += "\n            <li>\n            <img width=\"100\" src=".concat(fd.image, ">\n            </li>\n            ");
        });
        ol.innerHTML = div;
    });
};
productList();
