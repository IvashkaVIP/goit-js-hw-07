import { galleryItems } from "./gallery-items.js";
// Change code below this line
//import * as basicLightbox from "basiclightbox";

const createImagesMarkup = (image) => {
  return image
    .map(({ preview, original, description }) => {
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
    })
    .join("");
};

const galleryContainer = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
     `);

  instance.show();

  if (basicLightbox.visible()) {
    document.addEventListener("keydown", onEscapeClick);
    function onEscapeClick(evt) {
      document.removeEventListener("keydown", onEscapeClick);
      instance.close();
    }
  }

  // console.log(basicLightbox.visible());
  // console.log(evt.target.dataset.source);
}
