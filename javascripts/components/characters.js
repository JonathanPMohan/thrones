import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

const characters = [];

console.log(characters);

const characterClick = (e) => {
    const characterID = e.target.closest('.character-card').id;
    const currentCharacter = characters.find(x => x.id === characterID);
    detailsBuilder(currentCharacter);
    console.log('currentCharacter', currentCharacter);
};

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for(let i=0; i<characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
};


const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class="col-3 bg bg-none character-card" id='${character.id}'>`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" img src="${character.imageUrl}" alt="${character.name}">`;
        domString += `<div class="card-body ">`;
        domString +=    `<h4 class="card-title">${character.name}</h4>`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
    createEvents();
}

export{charactersBuilder}