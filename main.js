let bodyElement = document.body;
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let infoContainer = document.createElement('div');
let imageElement = document.createElement('img');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');

cardElement.className = 'card';
imageContainer.className = 'image-container';
infoContainer.className = 'info-container';
imageElement.className = 'image';
headingElement.className = 'heading';
paragraphElement.className = 'paragraph';
btnElement.className = 'btn';


//works the same as the className property except it sets the source ofthe imageElement
imageElement.src = 'https://source.unsplash.com/random';

btnElement.setAttribute('href', '#');
