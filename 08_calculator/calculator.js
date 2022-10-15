function formatInput(input) {
  const inputArr = Array.from(input).flat();
  
  if (!inputArr.length) {
    return [0];

  // test if every value in the array is a number
  } else if (!(inputArr.every(value => {
    return typeof value === 'number';
  }))) {
    return 'ERROR'

  } else {
    return inputArr;
  }
}

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return (num * factorialize(num - 1));
  }
}

const add = function() {
  const input = formatInput(arguments);
  if (input !== 'ERROR') {
    const calcValue = input.reduce((prevVal, curVal) => prevVal + curVal);
    return calcValue;

  } else {
    return input;
  }
  
};

const subtract = function() {
  const input = formatInput(arguments);
  if (input !== 'ERROR') {
    const calcValue = input.reduce((prevVal, curVal) => prevVal - curVal);
    return calcValue;
    
  } else {
    return input;
  }
};

const sum = function() {
  const input = formatInput(arguments);
  if (input !== 'ERROR') {
    const calcValue = input.reduce((prevVal, curVal) => prevVal + curVal);
    return calcValue;
    
  } else {
    return input;
  }
};

const multiply = function() {
  const input = formatInput(arguments);
  if (input !== 'ERROR') {
    const calcValue = input.reduce((prevVal, curVal) => prevVal * curVal);
    return calcValue;
    
  } else {
    return input;
  }
};

const power = function() {
  const input = formatInput(arguments);
  if (input !== 'ERROR') {
    const calcValue = input.reduce((prevVal, curVal) => prevVal ** curVal);
    return calcValue;
    
  } else {
    return input;
  }
};

const factorial = function() {
  const input = formatInput(arguments);
  if (input !== 'ERROR') {
    const facNum = input[0];
    return factorialize(facNum);
    
  } else {
    return input;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
