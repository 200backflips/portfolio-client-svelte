import { writable } from 'svelte/store';

export const isLoggedIn = writable(false);

export const imageList = writable([
]);

export const bigHighlight = writable({ image: '', caption: '' });

export const smallHighlights = writable([
	{ id: 0, image: '', caption: '' },
	{ id: 1, image: '', caption: '' },
	{ id: 2, image: '', caption: '' },
	{ id: 3, image: '', caption: '' }
]);

export const otherImages = writable([]);
