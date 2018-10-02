import { printToDom } from "../helpers/util.js";
import {detailsBuilder} from "./detail.js";

const characters = [
    {id: 'character1', name: 'John Snow', house: 'Stark', imageUrl: 'https://s3.r29static.com//bin/entry/4f0/340x408,85/1801540/image.jpg'},
    {id: 'character2', name: 'Daenerys Targaryen', house: 'Targaryen', imageUrl: "http://getwallpapers.com/wallpaper/full/8/1/e/39080.jpg" },
    {id: 'character3', name: 'Cersei Lannister', house: 'Lannister', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfwluv_D2AP_30U9nAjdvJVqKKsrEA2c1kFxRBJtPoKu9BC4-" },
    {id: 'character4', name: 'Tyrion Lannister', house: 'Lannister', imageUrl: "https://pbs.twimg.com/profile_images/668279339838935040/8sUE9d4C_400x400.jpg" },
    {id: 'character5', name: 'Sansa Stark', house: 'Stark', imageUrl: "https://pixel.nymag.com/imgs/daily/vulture/2016/06/20/20-sansa-got.w700.h700.jpg" },
    {id: 'character6', name: 'Arya Stark', house: 'Stark', imageUrl: "http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e9/Arya_Stark_4.jpg/revision/latest/scale-to-width-down/2000?cb=20140428152515" },
    {id: 'character7', name: 'Ned Stark', house: 'Stark', imageUrl: "https://www.indiewire.com/wp-content/uploads/2017/08/5ned-stark.jpg?w=640" },
    {id: 'character8', name: 'Robb Stark', house: 'Stark', imageUrl: "https://vignette.wikia.nocookie.net/p__/images/9/9e/The_Young_Wolf_in_Winterfell.jpeg/revision/latest?cb=20160702093620&path-prefix=protagonist" }

      
];

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