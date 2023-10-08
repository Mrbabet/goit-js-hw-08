// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const createElement = function (tag) {
  const element = document.createElement(tag);
  return element;
};

const appendElement = function (parent, child) {
  const element = parent.append(child);
  return element;
};

const createGaleryItem = function (item) {
  const galleryList = document.querySelector('.gallery');
  const galleryItem = createElement('li');
  const galleryLink = createElement('a');
  const galleryImage = createElement('img');

  appendElement(galleryList, galleryItem);
  appendElement(galleryItem, galleryLink);
  appendElement(galleryLink, galleryImage);

  galleryItem.classList = 'gallery__item';
  galleryLink.classList = 'gallery__link';
  galleryImage.classList = 'gallery__image';

  galleryLink.setAttribute('href', item.original);
  galleryImage.setAttribute('src', item.preview);
  galleryImage.setAttribute('alt', item.description);
};

galleryItems.forEach(item => {
  createGaleryItem(item);
});

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
