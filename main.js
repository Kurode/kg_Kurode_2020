function humanize(num){
  var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
              'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
              'seventeen', 'eighteen', 'nineteen'];
  var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
              'ninety']; //change for ones again

  var numString = num.toString();

  if (num < 0) throw new Error('Negative numbers are not supported.');

  if (num === 0) return 'zero';
    var result;
  //the case of 1 - 20
  if (num < 20) {
      result = ones[num];
      console.log(result);
    return result;
  }

  if (numString.length === 2) {
    result = ones[numString[0]] + ' ' + ones[numString[1]];
    console.log(result);
    return result;
  }

  //100 and more
  if (numString.length == 3) {
    if (numString[1] === '0' && numString[2] === '0'){
        result = ones[numString[0]] + ' zero zero';
        console.log(result);
        return result;
    }
    else{
        result = ones[numString[0]] + humanize(+(numString[1] + numString[2]));
        console.log(result);
        return result;
    }
  }
}

humanize(209);