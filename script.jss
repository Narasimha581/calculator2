function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result = "document.getElementById("result")";

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Error: Division by zero.";
        } else {
          result = (num1 / num2).toFixed(2); // Rounded to 2 decimal places
        }
        break;
      default:
        result = "Invalid operation.";
    }
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}
