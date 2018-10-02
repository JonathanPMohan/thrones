import { printToDom } from "../helpers/util.js";

const characters = [
    {id: 'character1', name: 'John Snow', house: 'Stark', imageURL: "https://" },
      {id: 'character2', name: 'Daenerys Targaryen', house: 'Targaryen', imageURL: "https://" },
      {id: 'character3', name: 'Cersei Lannister', house: 'Lannister', imageURL: "https://" },
      {id: 'character4', name: 'Tyrion Lannister', house: 'Lannister', imageURL: "https://" }

      
];


console.log('characters');

const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<h1>${character.name}</h1>`
    });
    printToDom(domString);
}

export{charactersBuilder}