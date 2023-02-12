module.exports = function check(str, bracketsConfig) {
  const openBracket = [];
  const closeBracket = [];
  const bracketsPair = {};
  let j = 0;
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
    bracketsPair[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBracket.includes(currentSymbol)) {
      stack.push(currentSymbol);

      if (
        closeBracket.includes(currentSymbol) &&
        openBracket.includes(currentSymbol)
        //stack.includes(currentSymbol) &&
        // stack[stack.length - 1] === stack[stack.length - 2]
      ) {
        stack.pop();
      }
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
  //console.log(stack);
  return stack.length === 0;
};
