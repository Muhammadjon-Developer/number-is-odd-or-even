function checkNumber() {
  const number = parseInt(prompt("Enter a number:"));

  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }

  const remainder = number % 2;

  if (remainder === 0) {
    alert("The number is even.");
  } else {
    alert("The number is odd.");
  }
}

checkNumber();