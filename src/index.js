module.exports = function check(str, bracketsConfig) {
  const openBracket = [];
  const closeBracket = [];
  const bracketsPair = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (
      openBracket.includes(currentSymbol) && //
      (!closeBracket.includes(currentSymbol) || //
        !stack.includes(currentSymbol)) // // if str = "|(||)|" WRONG!!!!!
    ) {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1];
      if (topElement === bracketsPair[currentSymbol]) {
        stack.pop();
      } else return false;
    }
  }
  return stack.length === 0;
};
// if str = "|(||)|" WRONG!!!!!
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/*function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; ) {
      if (str.includes(bracketsConfig[i].join(""))) {
          str = str.replace(bracketsConfig[i].join(""), "");
          i = 0;
      } else i++;
  }
  return str.length === 0 ? true : false;
};*/
