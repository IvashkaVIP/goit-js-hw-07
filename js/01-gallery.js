import { galleryItems } from './gallery-items.js';
// Change code below this line
//import * as basicLightbox from "basiclightbox";


const createImagesMarkup = (image) => {
    return image.map(({preview,original,description}) => {
     return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
    }).join('');
    
}

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
const galleryMarkup = galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)

function onGalleryContainerClick(evt) {
    evt.preventDefault();
     if (!evt.target.classList.contains('gallery__image')) {
         return;
     }
    //const urlMainImage = evt.target.contains()
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `);

    instance.show();


    // console.log(evt.target.dataset.source);
}


//console.log(createImagesMarkup(galleryItems));

//console.log(galleryItems);
// preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpin

//insertAdjacentHTML
