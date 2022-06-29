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

//* PARI E DISPARI *//

const Choice = prompt('Scegli se Pari o Dispari')
console.log(Choice);

const Number = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(Number);

const cpuNumber = randomNumberCpu(1, 5);
console.log(cpuNumber);

let sum = Number + cpuNumber;
console.log(sum);

const determinesEvenOrOdd = evenOrOdd(sum);

if (determinesEvenOrOdd % 2 == 0) {

    console.log('Chi ha scelto PARI, ha vinto');

} else if (determinesEvenOrOdd % 2 !== 0) {

    console.log('Chi ha scelto DISPARI, ha vinto');
}

function randomNumberCpu(min, max) {

    let randomNum = Math.floor(Math.random() * (max - min) + min);

    return randomNum;
}