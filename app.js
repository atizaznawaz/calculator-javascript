function getNumber(Num) {
  var result = document.getElementById("result");
  result.value += Num;
}

function clearresult() {
  var result = document.getElementById("result");
  result.value = " ";
}

function getResult() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
}
function square() {
  var result = document.getElementById("result");
  result.value = result.value * result.value;
}
