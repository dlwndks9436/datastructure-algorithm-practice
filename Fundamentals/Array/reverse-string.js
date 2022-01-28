// Create a function that reverses a string:
// 'Hi my name is David' should be:
// 'divaD si eman ym iH'

function reverseOrderOf(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a valid input";
  }

  let reversedString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  console.log(reversedString);
  return reversedString;
}

function easilyReverseOrderOf(str) {
  const reversedString = str.split("").reverse().join("");
  console.log(reversedString);
  return reversedString;
}

let message = "booyah this is a string";

reverseOrderOf(message);
easilyReverseOrderOf(message);
