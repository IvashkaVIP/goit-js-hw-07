import { galleryItems } from "./gallery-items.js";
// Change code below this line

const createImagesMarkup = (image) => {
  return image
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
    `;
    })
    .join("");
};

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

let lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: "250" });

// const lightboxOptions = lightbox.options;
// lightboxOptions.captions = true;
// lightboxOptions.captionDelay = 250;
// lightboxOptions.captionsData = "alt";

//console.log(lightbox.options);
