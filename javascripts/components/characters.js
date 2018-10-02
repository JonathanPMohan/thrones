import { printToDom } from "../helpers/util.js";

const characters = [
    {id: 'character1', name: 'John Snow', house: 'Stark', imageURL: 'https://s3.r29static.com//bin/entry/4f0/720x864,85/1801540/image.jpg' },
    {id: 'character2', name: 'Daenerys Targaryen', house: 'Targaryen', imageURL: "https://" },
    {id: 'character3', name: 'Cersei Lannister', house: 'Lannister', imageURL: "https://" },
    {id: 'character4', name: 'Tyrion Lannister', house: 'Lannister', imageURL: "https://" }

      
];


console.log('characters');

const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<div class='col-2 character'>`;
        domString += `<div class="card">`;
        domString += `<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString +=    `<h5 class="card-title">${character.name}</h5>`;
        domString +=        `</div>`;
        domString +=    `</div>`;
        domString += `</div>`;
    });
    printToDom(domString);
}

export{charactersBuilder}