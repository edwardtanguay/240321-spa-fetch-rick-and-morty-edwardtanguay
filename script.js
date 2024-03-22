// import { getRandomIndex } from './tools.js'; // 1. import individual functions
import * as tools from './tools.js'; // 2. import namespace "tools" with intellisense
// import { getRandomIndex } from './tools.js'; // 3. import indvidiaul function as the default
// import  capitalizeAllLetters from './tools.js';
import * as appModel from './appModel.js';

const characterElem = document.querySelector('.character');

characterElem.innerHTML = `
	<h1>Loading...</h1>
	`;

try {
	const characters = await appModel.getCharacters();
	const randomIndex = tools.getRandomIndex(characters.length);

	const character = characters[randomIndex];

	characterElem.innerHTML = `
		<h1>${tools.capitalizeAllLetters(character.name)}</h1>
		<img src="${character.image}"/>
	`;
}
catch (e) {
	characterElem.innerHTML = e.message;
}
