console.log("problem1.js is loaded");

let stringParagraph = "Nisha is a good persoN";

// first and last letter match
function resultStr(str) {
  if (str[0] === str[str.length - 1]) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
}
resultStr(stringParagraph);
