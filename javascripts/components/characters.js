import { printToDom } from "../helpers/util.js";

const characters = [
    {id: 'character1', name: 'John Snow', house: 'Stark', imageUrl: 'https://s3.r29static.com//bin/entry/4f0/340x408,85/1801540/image.jpg'},
    {id: 'character2', name: 'Daenerys Targaryen', house: 'Targaryen', imageUrl: "http://getwallpapers.com/wallpaper/full/8/1/e/39080.jpg" },
    {id: 'character3', name: 'Cersei Lannister', house: 'Lannister', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfwluv_D2AP_30U9nAjdvJVqKKsrEA2c1kFxRBJtPoKu9BC4-" },
    {id: 'character4', name: 'Tyrion Lannister', house: 'Lannister', imageUrl: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg" }

      
];


console.log(characters);

const characterClick = (e) => {
    const characterID = e.target.closest('character-card').id;
    const currentCharacter = characters.find((x) => {
        return x.id === characterID
    })
    console.log(e.target.closest('.character-card').id);
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