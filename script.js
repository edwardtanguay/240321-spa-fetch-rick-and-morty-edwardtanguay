import * as site from './site.js';

const characterElem = document.querySelector('.character');
const btnReloadElem = document.querySelector('.reload');

btnReloadElem.addEventListener('click', () => {
	site.renderSite(characterElem);
});

site.renderSite(characterElem);

