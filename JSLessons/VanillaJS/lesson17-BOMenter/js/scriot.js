const p = document.createElement('p');
// const text = document.createTextNode(`${screen.width}px`);
// const text = document.createTextNode(`${screen.availHeight}px`);
const text = document.createTextNode(`${screen.colorDepth}bit`);

p.appendChild(text);
document.body.appendChild(p);
