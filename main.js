const words =['one','two','three','four','five','six','seven','eight',
'nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen',
'eigtheen','nineteen'];

const tens = ['twenty'];

var number, result;
function NumbersToWords(number){
    if (number < 0) return 'Not available yet';
    if (number === 0) return 'Zero';
    
    for(i = 0; i < number; i++){
        if(number < 20)
        result = words[i];
        if(number >= 20)
        result = tens[i];
    }
    console.log(result);
}

NumbersToWords(15);