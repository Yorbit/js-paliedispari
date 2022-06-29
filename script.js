const Word = prompt('Inserisci qui una parola palindroma');

const reverseWord = wordReverse(Word);

if (Word == reverseWord) {

    console.log('LA PAROLA INSERITA È PALINDROMA')

} else {

    console.log('LA PAROLA INSERITA NON È PALINDROMA')
}

function wordReverse(Word) {

    let lengthWord = Word.length - 1;

    let wordTurn = '';

    while (lengthWord >= 0) {

        wordTurn += Word[lengthWord];

        lengthWord--;
    }
    console.log(wordTurn);

    return wordTurn;
}