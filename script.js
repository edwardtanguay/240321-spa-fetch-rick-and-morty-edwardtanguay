const characterElem = document.querySelector('.character');

const getRandomIndex = (numberOfItems) => {
	return Math.floor(Math.random() * numberOfItems);
}

	characterElem.innerHTML = `
	<h1>Loading...</h1>
	`;

	setTimeout(async () => {
		const response = await fetch('https://rickandmortyapi.com/api/character');
		const data = await response.json();
		const characters = data.results;
		const randomIndex = getRandomIndex(characters.length);
		const character = characters[randomIndex];

		characterElem.innerHTML = `
		<h1>${character.name}</h1>
		<img src="${character.image}"/>
	`;
	}, 1000);




