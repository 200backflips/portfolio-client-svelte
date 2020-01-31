import { writable, readable } from 'svelte/store';

export const path = readable('http://127.0.0.1:8080')

export const isLoggedIn = writable(false);

export const imageList = writable([]);

export const dataList = writable([]);

export const otherImages = writable([]);

export const uploadList = writable([]);
