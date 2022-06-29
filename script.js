const Word = prompt('Inserisci qui una parola palindroma');

const reverseWord = wordReverse(Word);

if (Word == reverseWord) {

    console.log('LA PAROLA INSERITA È PALINDROMA')

} else {

    console.log('LA PAROLA INSERITA NON È PALINDROMA')
}

