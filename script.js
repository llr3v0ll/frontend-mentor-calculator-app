const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");
const num0 = document.querySelector("#num0");
const reset = document.querySelector("#reset");
const resultmonitor = document.querySelector("#screen-show");
const del = document.querySelector("#delbut");
const dotbut = document.querySelector("#decimalbut");
const addbut = document.querySelector("#addbut");
const removal = document.querySelector("#decreasebut");
const divide = document.querySelector("#dividebut");
const multiply = document.querySelector("#multiplicationbut");
const result = document.querySelector("#result");
let operator = 0;
let total;
let firstarg = "";
let secondarg = "";
//NUMBER BUTTONS
num1.addEventListener("click", getValue);
num2.addEventListener("click", getValue);
num3.addEventListener("click", getValue);
num4.addEventListener("click", getValue);
num5.addEventListener("click", getValue);
num6.addEventListener("click", getValue);
num7.addEventListener("click", getValue);
num8.addEventListener("click", getValue);
num9.addEventListener("click", getValue);
num0.addEventListener("click", getValueNum0);
function getValue(event) {
  if (firstarg[0] == 0 && firstarg.length == 1) {
    firstarg = event.target.innerText;
    resultmonitor.innerText = firstarg;
  } else {
    firstarg = firstarg + event.target.innerText;
    resultmonitor.innerText = firstarg;
  }
}
function getValueNum0(event) {
  if (firstarg.length == 1 && firstarg[0] == 0) {
  } else {
    firstarg = firstarg + event.target.innerText;
    resultmonitor.innerText = firstarg;
  }
}
//DECIMALS
dotbut.addEventListener("click", decimalfun);
function decimalfun() {
  let check = 0;
  for (let i = 0; i < firstarg.length; i++) {
    if (firstarg[i] == ".") {
      check = 1;
    }
  }
  if (check == 0) {
    firstarg = firstarg + ".";
  }
  resultmonitor.innerText = firstarg;
}
//DEL
del.addEventListener("click", delfun);
function delfun() {
  firstarg = "";
  resultmonitor.innerText = "-";
}
//RESET
reset.addEventListener("click", resetfun);
function resetfun() {
  resultmonitor.innerText = "-";
  firstarg = "";
  secondarg = "";
}
//ADD
addbut.addEventListener("click", addfun);
function addfun() {
  secondarg = firstarg;
  firstarg = "";
  operator = 1;
}
//REMOVAL
removal.addEventListener("click", removefun);
function removefun() {
  secondarg = firstarg;
  firstarg = "";
  operator = 2;
}
//DIVISION
divide.addEventListener("click", dividefun);
function dividefun() {
  secondarg = firstarg;
  firstarg = "";
  operator = 3;
}
//MULTIPLICATION
multiply.addEventListener("click", multiplyfun);
function multiplyfun() {
  secondarg = firstarg;
  firstarg = "";
  operator = 4;
}
//RESULT
result.addEventListener("click", resultfun);
function resultfun() {
  if (operator == 1) {
    total = Number(firstarg) + Number(secondarg);
    firstarg = total;
    if (firstarg == 0) {
      firstarg = "";
    }
    secondarg = "";
    resultmonitor.innerText = total;
    operator = 0;
  }
  if (operator == 2) {
    total = Number(secondarg) - Number(firstarg);

    firstarg = total;
    if (firstarg == 0) {
      firstarg = "";
    }
    secondarg = "";
    resultmonitor.innerText = total;
    operator = 0;
  }
  if (operator == 3) {
    if (firstarg != 0) {
      total = Number(secondarg) / Number(firstarg);
      firstarg = total;
      secondarg = "";
      resultmonitor.innerText = total;
      operator = 0;
    } else {
      resultmonitor.innerText = "ERROR";
      firstarg = "";
      secondarg = "";
      operator = 0;
    }
  }
  if (operator == 4) {
    total = Number(secondarg) * Number(firstarg);
    firstarg = total;
    if (firstarg == 0) {
      firstarg = "";
    }
    secondarg = "";
    resultmonitor.innerText = total;
    operator = 0;
  }
}
//THEME
const bod = document.querySelector("body");
console.log(bod);
let stat = 1;
const toggle = document.querySelector("#toggle-theme");
toggle.addEventListener("click", indicmove);
function indicmove() {
  const indicator = document.querySelector("#indicator");
  let time = null;
  clearInterval(time);
  time = setInterval(frame, 5);
  let i = 45;
  function frame() {
    if (stat < 22) {
      indicator.style.left = 5 + stat + "px";
      stat++;
      if (stat == 22) {
        bod.classList.remove("theme1body");
        bod.classList.add("theme2body");

        clearInterval(time);
      }
    }
    if (stat > 21 && stat < 46) {
      indicator.style.left = 5 + stat + "px";
      stat++;
      if (stat == 46) {
        bod.classList.remove("theme2body");
        bod.classList.add("theme3body");

        clearInterval(time);
      }
    }
    if (stat > 45) {
      indicator.style.left = 5 + i + "px";
      i--;
      if (i == -1) {
        stat = 1;
        bod.classList.remove("theme3body");
        bod.classList.add("theme1body");
        clearInterval(time);
      }
    }
  }
}
