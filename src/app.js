/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
let action = ["ate ", "peed ", "crushed ", "broke "];
let what = ["my homework ", "the keys ", "the car "];
let when = [
  "before the class.",
  "right on time.",
  "when I finished.",
  "during my lunch.",
  "while I was praying."
];

window.onload = () => {
  document.querySelector("#rand").innerHTML =
    who[Math.floor(Math.random() * who.length)] +
    action[Math.floor(Math.random() * action.length)] +
    what[Math.floor(Math.random() * what.length)] +
    when[Math.floor(Math.random() * when.length)];

  add.Who = () => {
    if (input == null) {
      return;
    } else {
      who.push(input.value);
      input.value = "  ";
      document.querySelector("#rand");
      console.log(who);
    }
  };
};