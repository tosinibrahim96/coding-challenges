//My initial solution
var defangIPaddr = function (address) {
  let addressArray = address.split('');
  let result = addressArray.map((char, index) => {
    if (char === '.') {
      return (addressArray[index] = '[.]');
    }
    return char;
  });

  return result.join('');
};

//Another interesting solution using String.replace and regex
var defangIPaddr = function (address) {
  return (NewAddress = address.replace(/\./g, '[.]'));
};
