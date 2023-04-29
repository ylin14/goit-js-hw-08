// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const ref = {
    gallery: document.querySelector('.gallery'),
  };


  function createGalleryMarkup(arr) {
    return arr
      .map(
        ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`,
      )
      .join('');
  };
  
  ref.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

  const lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionsData: "alt",
   });
