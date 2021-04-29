

function NumbersToWords(num){
  var ones = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  var numString = num.toString();
  const WordsArray = [];

  if (num === 0){
    WordsArray.push(ones[0]);
    console.log(WordsArray);
  }    
  
  if (num < 10) {
    WordsArray.push(ones[num]);
    console.log(WordsArray);
  }

  if (numString.length === 2) {
    WordsArray.push(ones[numString[0]] + ones[numString[1]]);
    console.log(WordsArray);
  }

  if (numString.length == 3) {   
    WordsArray.push(ones[numString[0]] +  ones[numString[1]] + ones[numString[2]]);  
  console.log(WordsArray); 
  }
}

const args = process.argv.slice(2);
NumbersToWords(args);