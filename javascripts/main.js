import {getCharacters} from './data/charactersData.js';
import {sortEvents} from './components/characters.js';

const initApp = () =>  {
    sortEvents();
    getCharacters();
};

initApp();