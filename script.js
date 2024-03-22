import * as site from './site.js';
import * as config from './config.js';

const bodyElem = document.querySelector('body');
const characterElem = document.querySelector('.character');
const btnReloadElem = document.querySelector('.reload');

bodyElem.style.backgroundColor = config.siteBackgroundColor();

btnReloadElem.addEventListener('click', () => {
	site.renderSite(characterElem);
});

site.renderSite(characterElem);

