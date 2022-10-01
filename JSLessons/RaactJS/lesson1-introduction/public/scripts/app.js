"use strict";

var list = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
  style: {
    "color": "red"
  }
}, "Hello"), /*#__PURE__*/React.createElement("li", null, "Hello"), /*#__PURE__*/React.createElement("li", null, "Hello"), /*#__PURE__*/React.createElement("li", null, "Hello"));
var mytext = /*#__PURE__*/React.createElement("h1", null, "Hello everyone");
var temp = /*#__PURE__*/React.createElement("div", null, list, list, list, list, list, mytext);
ReactDOM.render(temp, document.querySelector('#root'));
