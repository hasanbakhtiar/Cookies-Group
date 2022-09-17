var countStart = 0;
var countEnd = 50;
const counrtyList = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((comingApi) => {
      let li = "";
      for (let x = countStart; x < countEnd; x++) {
        li += `<li><span>${x + 1}-</span>${comingApi[x].name.common}</li>`;
      }
      document.querySelector("ul").innerHTML = li;
    });
};
const counter = () => {
  countStart += 50;
  countEnd += 50;
};
for (let x = 0; x < 5; x++) {
  document.querySelectorAll("button")[x].onclick = () => {
    counter();
    counrtyList();
  };
}
counrtyList();
