var input = document.querySelector("#input-expression");

var numbers = document.querySelectorAll(".number");
var all_btn = document.querySelectorAll(".button")
var dot = document.querySelector(".dot");

var operators = document.querySelectorAll(".operator")
var sum_operator = document.querySelector(".sum");
var div_operator = document.querySelector(".div");
var sub_operator = document.querySelector(".sub");
var mul_operator = document.querySelector(".mul");
var mod_operator = document.querySelector(".mod");
var equal_operator = document.querySelector(".equal");

var clean_btn = document.querySelectorAll(".clean");
var backspace_btn = document.querySelector(".backspace");

var equal = () => {
  if (
    input.textContent.includes("+") ||
    input.textContent.includes("-") ||
    input.textContent.includes("*") ||
    input.textContent.includes("/") ||
    input.textContent.includes("%")
  ) {
    var expression = input.textContent;
    var result;
    var num1;
    var num2;
    if (expression.charAt(0) != "-") {
      if (expression.includes("+")) {
        num1 = expression.split("+")[0]
        num2 = expression.split("+")[1]
        result = parseInt(num1) + parseInt(num2)
      }
      if (expression.includes("-")) {
        num1 = expression.split("-")[0]
        num2 = expression.split("-")[1]
        result = parseInt(num1) - parseInt(num2)
      }
      if (expression.includes("*")) {
        num1 = expression.split("*")[0]
        num2 = expression.split("*")[1]
        result = parseInt(num1) * parseInt(num2)
      }
      if (expression.includes("/")) {
        num1 = expression.split("/")[0]
        num2 = expression.split("/")[1]
        result = parseInt(num1) / parseInt(num2)
      }
      if (expression.includes("%")) {
        num1 = expression.split("%")[0]
        num2 = expression.split("%")[1]
        result = parseInt(num1) % parseInt(num2)
      }
      input.textContent = (isNaN(result)) ? "" : result
    }
  }
  if (
    input.textContent.substring(1).includes("+") ||
    input.textContent.substring(1).includes("-") ||
    input.textContent.substring(1).includes("*") ||
    input.textContent.substring(1).includes("/") ||
    input.textContent.substring(1).includes("%")
  ) {
    var expression = input.textContent.substring(1);
    var result;
    var num1;
    var num2;
    if (input.textContent.charAt(0) == "-") {
      if (expression.includes("+")) {
        num1 = -Math.abs(expression.split("+")[0])
        num2 = expression.split("+")[1]
        result = parseInt(num1) + parseInt(num2)
      }
      if (expression.includes("-")) {
        num1 = -Math.abs(expression.split("-")[0])
        num2 = expression.split("-")[1]
        result = parseInt(num1) - parseInt(num2)
      }
      if (expression.includes("*")) {
        num1 = -Math.abs(expression.split("*")[0])
        num2 = expression.split("*")[1]
        result = parseInt(num1) * parseInt(num2)
      }
      if (expression.includes("/")) {
        num1 = -Math.abs(expression.split("/")[0])
        num2 = expression.split("/")[1]
        result = parseInt(num1) / parseInt(num2)
      }
      if (expression.includes("%")) {
        num1 = -Math.abs(expression.split("%")[0])
        num2 = expression.split("%")[1]
        result = parseInt(num1) % parseInt(num2)
      }
      input.textContent = (isNaN(result)) ? "" : result
    }
  }
}

var clean = () => {
  input.textContent = ""
}

var backspace = () => {
  input.textContent = input.textContent.slice(0, -1);
}


numbers.forEach((btn) => {
  btn.addEventListener('click', () => {
    input.textContent += btn.value;
  })
})

operators.forEach((btn) => {
  btn.addEventListener('click', () => {
    equal()
  })
})

sub_operator.addEventListener('click', () => {
  input.textContent += sub_operator.value
})

dot.addEventListener('click', () => {
  if (input.textContent.length == 0) {
    return
  } else {
    input.textContent += dot.value
  }
})

sum_operator.addEventListener('click', () => {
  if (input.textContent.length == 0) {
    return
  } else {
    input.textContent += sum_operator.value
  }
})

div_operator.addEventListener('click', () => {
  if (input.textContent.length == 0) {
    return
  } else {
    input.textContent += div_operator.value
  }
})

mul_operator.addEventListener('click', () => {
  if (input.textContent.length == 0) {
    return
  } else {
    input.textContent += mul_operator.value
  }
})

mod_operator.addEventListener('click', () => {
  if (input.textContent.length == 0) {
    return
  } else {
    input.textContent += mod_operator.value
  }
})

//Dau "="
equal_operator.addEventListener('click', () => {
  equal()
})

//Xoa tat ca
clean_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    clean();
  })
})

//Backspace
backspace_btn.addEventListener('click', () => {
  backspace();
})