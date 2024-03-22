// import { getRandomIndex } from './tools.js'; // 1. import individual functions
// import * as tools from './tools.js'; // 2. import namespace "tools" with intellisense
import getRandomIndex from './tools.js'; // 3. import indvidiaul function as the default
import { capitalizeAllLetters } from './tools.js';

const characterElem = document.querySelector('.character');

characterElem.innerHTML = `
	<h1>Loading...</h1>
	`;

setTimeout(async () => {
	try {
		const response = await fetch('https://rickandmortyapi.com/api/character');
		const data = await response.json();
		const characters = data.results;
		const randomIndex = getRandomIndex(characters.length);

		const character = characters[randomIndex];

		characterElem.innerHTML = `
		<h1>${capitalizeAllLetters(character.name)}</h1>
		<img src="${character.image}"/>
	`;
	}
	catch (e) {
		console.log(e.message);
		characterElem.innerHTML = `
		<h1>We're Sorry</h1>
		<p>At the moment, we are not able to fetch your data. Please contact you administrator at 23487/23437843.</p>
	`;
	}
}, 1000);




