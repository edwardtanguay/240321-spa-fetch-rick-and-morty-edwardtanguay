
export const getCharacters = () => {
	return new Promise((resolve, reject) => {
		setTimeout(async () => {
			try {
				const response = await fetch('xhttps://rickandmortyapi.com/api/character');
				const data = await response.json();
				const characters = data.results;
				resolve(characters);
			}
			catch (e) {
				console.log(e.message);
				reject({ message: '<h1>We\'re Sorry</h1> <p>At the moment, we are not able to fetch your data. Please contact you administrator at 23487/23437843.</p>' });
			}
		}, 1000);

	});
};