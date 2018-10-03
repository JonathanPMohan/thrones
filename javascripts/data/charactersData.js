import {setCharacters, charactersBuilder} from '../components/characters.js';

function executeThisCodeAfterFileLoaded () {
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder();

  
}

function ececuteThisCodeIfXhrFails () {
    console.log('things be broke');
}

const getCharacters = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myRequest.addEventListener('error', ececuteThisCodeIfXhrFails);
    myRequest.open('GET', './db/characters.json');
    myRequest.send();
};

export{getCharacters};
