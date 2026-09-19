import { randomWord } from './utils.js';

let w1;
let w2;
let w3;


// Display random technobabble in the output paragraph
const outputRandomPhrase = document.querySelector('#output');
const button = document.querySelector('#my-Button');
const fiveButton = document.querySelector('#five-Button');

const generateTechno = (num) => {
    const phrases = []; 

    for (let i = 0; i < num; i++){
        const word1 = randomWord(w1); 
        const word2 = randomWord(w2); 
        const word3 = randomWord(w3); 

        const technoBabble = `${word1} ${word2} ${word3}`;
        phrases.push(technoBabble); 
    }

    outputRandomPhrase.textContent = phrases.join();
}; 


const fivePhrases = () => {
    generateTechno(5);

};

const onePhrase = () => {
    generateTechno(1);
};


const loadBabble = () => {
    console.log("load babble is called");

    // load json 
    fetch("./data/babble-data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error! Status ${response.status}`);
            }

            return response.json();
        })

        .then((data) => {

            w1 = data.words1;
            w2 = data.words2;
            w3 = data.words3

            console.log(data);

            fiveButton.addEventListener("click", fivePhrases);
            button.addEventListener("click", onePhrase);

            generateTechno(1);
        })

        .catch((error) => {
            console.log("error fetching data", error);
        });



}


window.onload = loadBabble;

