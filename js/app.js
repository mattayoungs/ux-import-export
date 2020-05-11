import { Person, render } from "./personalProfile.js";

let people = [
  new Person("Bob", "../images/bob-ross.jpg"),
  new Person("Frida", "../images/frida-kahlo.jpg"),
  new Person("Dali", "../images/dali.jpg"),
];

window.onload = () => {
  renderList(people);
};

function renderList(people) {
  let html = "";
  html += `<ul>`;
  for (let person of people) {
    html += "<li>";
    html += render(person);
    html += "</li>";
  }
  html += "</ul>";

  document.getElementById("list").innerHTML = html;
}
