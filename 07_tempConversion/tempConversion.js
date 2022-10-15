const ctof = function(cTemp) {
  if (typeof cTemp === 'number'){
    let fTemp = (cTemp * 9 / 5) + 32;
    return Math.round(fTemp * 10 ) / 10;
  } else {
    return 'ERROR';
  }
};

const ftoc = function(fTemp) {
  if (typeof fTemp === 'number'){
    let cTemp = (fTemp - 32) * 5 / 9;
    return Math.round(cTemp * 10 ) / 10;
  } else {
    return 'ERROR';
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
