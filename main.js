function send() {
  num1 = document.getElementById("number1").value;
  num2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1) * parseInt(number2);

  question_number = "<h4>" + num1 + " x " + num2 + "</h4>";
  input_box = "<br>Answer: <input type = 'text' id = 'input_check_box'>";
  check_button =
    "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
  row = question_number + input_box + check_button;

  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}
