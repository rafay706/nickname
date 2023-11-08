document.getElementById("convertBtn").addEventListener("click", function () {
  var input = document.getElementById("nameInput").value.trim();

  if (input === "") {
    document.getElementById("result").textContent = "Please enter a name.";
  } else if (!isNaN(input)) {
    document.getElementById("result").textContent =
      "Please enter your name in alphabets.";
  } else if (input.length < 3) {
    document.getElementById("result").textContent =
      "Please enter at least 3 characters for your name.";
  } else if (!/^[a-zA-Z]+$/.test(input) && !/^\d+$/.test(input)) {
    document.getElementById("result").textContent =
      "Please enter your name using only alphabets.";
  } else {
    var result = convertNameToNumber(input.toLowerCase());
    document.getElementById("result").textContent =
      "Your bike number is: " + result;
  }
});

function convertNameToNumber(name) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var number = "";

  for (var i = 0; i < name.length; i++) {
    var char = name.charAt(i);
    var index = alphabet.indexOf(char) + 1;
    number += index.toString();
  }

  return number;
}
