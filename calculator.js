
let total = 0.0;
let strbuffer = "0";
let operator = "";
makesSymbol("C");
makesSymbol("=");

function calculate(operator) {
  intBuffer = parseInt(strbuffer);
  if (operator === "+") {
    total += intBuffer;
  }
  if (operator === "-") {
    total -= intBuffer;
  }
  if (operator === "x") {
    total *= intBuffer;
  }
  if (operator === "÷") {
    total /= intBuffer;
  }
}

function makesNumber(value) {
  if (strbuffer === "0") {
    strbuffer = value.toString();
    next = false;
  } else {
    strbuffer = strbuffer + "" + value.toString();
  }
}

function makesSymbol(symbol) {
  if (symbol === "C") {
    total = 0;
    strbuffer = "0";
    operator = ""
  } else if (symbol === "←") {
    total = Math.floor(total / 10);
    console.log(strbuffer);
    strbuffer = strbuffer.substring(0, strbuffer.length - 1);
  } else if (symbol === "=") {
    if (operator === ""){
        return
    }
    calculate(operator);
    strbuffer = total.toString();
    total = 0;
    operator = "";
  } else {
    console.log(total,strbuffer)
    if (total == 0) {
        total = parseInt(strbuffer) 
    } else { calculate(operator); }
    operator = symbol;
    strbuffer = "0";
    
  }
}

function setListeners() {
  let buttons = document.querySelectorAll(".buttons");
  for (item of buttons) {
    const text = item.innerText;
    item.addEventListener("click", function () {
      buttonClicked(text);
    });
  }
}


setListeners();


function buttonClicked(valueClicked) {
  if (isNaN(parseInt(valueClicked))) {
    //NaN means "Not a Number"
    makesSymbol(valueClicked);
  } else {
    makesNumber(valueClicked);
  }
  document.querySelector(".result-screen").innerHTML = strbuffer;
  console.log(total, strbuffer, valueClicked, operator);
}
