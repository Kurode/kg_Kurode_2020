

function NumbersToWords(num){
  var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  var result;
  var numString = num.toString();

  if (num === 0){
      console.log(ones[0]);
  }    
  
  if (num < 10) {
      result = ones[num];
      console.log(result);
  }

  if (numString.length === 2) {
    result = ones[numString[0]] + ones[numString[1]];
    console.log(result);
  }

  if (numString.length == 3) {   
  result = ones[numString[0]] +  ones[numString[1]] + ones[numString[2]];
  console.log(result);
    
  }
}

const args = process.argv.slice(2);
NumbersToWords(args);