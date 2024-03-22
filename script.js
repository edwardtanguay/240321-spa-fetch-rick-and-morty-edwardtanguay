// import { getRandomIndex } from './tools.js'; // 1. import individual functions
import * as tools from './tools.js'; // 2. import namespace "tools" with intellisense
// import { getRandomIndex } from './tools.js'; // 3. import indvidiaul function as the default
// import  capitalizeAllLetters from './tools.js';
import * as appModel from './appModel.js';
import { CharacterPanel } from './components/CharacterPanel.js';

const characterElem = document.querySelector('.character');
const btnReloadElem = document.querySelector('.reload');

btnReloadElem.addEventListener('click', () => {

});

characterElem.innerHTML = `
	<h1>Loading...</h1>
	`;

try {
	const characters = await appModel.getCharacters();
	const randomIndex = tools.getRandomIndex(characters.length);
	const character = characters[randomIndex];
	CharacterPanel(characterElem, character);
}
catch (e) {
	characterElem.innerHTML = e.message;
}
