import { writable, readable } from 'svelte/store';

export const isLoggedIn = writable(false);

export const imgList = readable([
	'images/arsbasta01.png',
	'images/arsbasta03.gif',
	'images/arsbasta06.png',
	'images/arsbasta08.png',
	'images/arsbasta09.png',
	'images/arsbasta10.png',
	'images/arsbasta16.png',
	'images/arsbasta08.gif'
]);

export const bigHighlight = writable({ image: '', caption: '' });

export const smallHighlights = writable([
	{ id: 1, image: '', caption: '' },
	{ id: 2, image: '', caption: '' },
	{ id: 3, image: '', caption: '' },
	{ id: 4, image: '', caption: '' }
]);

export const otherImages = writable([]);
