class OutOfRangeError extends Error {
  constructor(args) {
    super();
    this.name = "OutOfRangeError";
    this.message =
      "Expression should only consist of integers and +-/* characters and not '" +
      args +
      "' ";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super();
    this.name = "InvalidExprError";
    this.message =
      "Expression should not have an invalid combination of expression";
  }
}


function evalString() {
  let str = document.getElementById("input1").value;
  try {

    //write your code here
    for (let i = 0; i < str.length; i++) {
      if (
        [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "+",
          "/",
          " ",
          "-",
          "*",
        ].includes(str[i]) == false
      ) {
        throw new OutOfRangeError(str[i]);
      }
    }
    str.replace(" ", "");
    if (["+", "*", "/"].includes(str[0])) {
      throw new SyntaxError(
        "Expression should not start with invalid operator"
      );
    }
    if (["+", "*", "/", "-"].includes(str[str.length - 1])) {
      throw new SyntaxError(
        "Expression should not end with invalid operator"
      );
    }
    for (let i = 1; i < str.length - 1; i++) {
      if (
        (["+", "/", "-", "*"].includes(str[i - 1]) &&
          ["+", "/", "*"].includes(str[i])) ||
        (["+", "/", "-", "*"].includes(str[i - 1]) &&
          str[i] == "-" &&
          ["+", "-", "/", "*"].includes(str[i + 1]))
      ) {
        throw new InvalidExprError(
          "Bad expression, Expression should not consist of an invalid sequence of operation"
        );
      }
    }


    alert("passed");
  } catch (e) {
    alert("failed " + e.name + " " + e.message);
    if (window.Cypress) {
      throw e;
    }
  }
}

if (window.Cypress) {
  window.OutOfRangeError = OutOfRangeError
  window.InvalidExprError = InvalidExprError
}
