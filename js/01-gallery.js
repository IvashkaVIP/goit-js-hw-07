import { galleryItems } from './gallery-items.js';
// Change code below this line

const createImagesMarkup = (image) => {
    return image.map(({preview,original,description}) => {
     return `
        <li>
            <img src="${preview}" alt="${description}"/>
        </li>
    `;
    }).join('');
    
}

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
const galleryMarkup = galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

console.log(createImagesMarkup(galleryItems));

//console.log(galleryItems);
// preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine