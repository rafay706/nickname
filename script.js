document.getElementById("generateBtn").addEventListener("click", function () {
  var firstName = document.getElementById("firstNameInput").value;
  var lastName = document.getElementById("lastNameInput").value;
  var gender = document.getElementById("genderInput").value;

  if (firstName.length >= 3 && lastName.length >= 3) {
    if (
      !containsSymbolsOrNumbers(firstName) &&
      !containsSymbolsOrNumbers(lastName)
    ) {
      var nickname = generateNickname(firstName, lastName, gender);
      var outputElement = document.getElementById("output");
      outputElement.innerHTML = "Your nickname is: " + nickname;
      // outputElement.style.background = "black"; // Set the background color
      // setTimeout(function () {
      //     outputElement.innerHTML = "";
      //     outputElement.style.background = "none"; // Remove the background color
      // }, 4000); // Clear the output and remove the background after 5 seconds
    } else {
      document.getElementById("output").innerHTML =
        "Please enter only alphabetic characters for first name and last name.";
    }
  } else {
    document.getElementById("output").innerHTML =
      "Please enter at least 3 characters for both first name and last name.";
  }
});

function containsSymbolsOrNumbers(input) {
  var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/;
  return regex.test(input);
}

function generateNickname(firstName, lastName, gender) {
  var nickname = "";
  var firstChar = "";
  var secondChar = "";
  var randomVowels = generateRandomVowels(2);

  if (gender === "male") {
    firstChar = firstName.charAt(0).toUpperCase();
    var randomIndex = Math.floor(Math.random() * lastName.length);
    secondChar = lastName.charAt(randomIndex).toUpperCase();
  } else if (gender === "female") {
    firstChar = lastName.charAt(lastName.length - 1).toUpperCase();
    secondChar = firstName
      .charAt(Math.floor(Math.random() * firstName.length))
      .toUpperCase();
  }

  nickname = firstChar + secondChar + randomVowels;
  return nickname;
}

function generateRandomVowels(length) {
  var vowels = "AEIOU";
  var randomVowels = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * vowels.length);
    randomVowels += vowels.charAt(randomIndex);
  }
  return randomVowels;
}
