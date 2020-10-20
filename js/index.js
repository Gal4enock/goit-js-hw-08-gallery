import gallery from './gallery-items.js';
const list = document.querySelector(".js-gallery");
const lightBox = document.querySelector('.lightbox');
const btn = document.querySelector('.lightbox__button');
const img = document.querySelector('.lightbox__image');
const overlay = document.querySelector('.lightbox__overlay');
console.log(list);

// for (let picture of gallery) {
//   const { preview, original, description } = picture;
//   list.insertAdjacentHTML('beforeend', `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);
// }

gallery.map(element => {
  const { preview, original, description } = element;
  list.insertAdjacentHTML('beforeend', `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></li>`);
})

const getPicture = function (e) {
  e.preventDefault();
  lightBox.classList.add('is-open');
  const link = e.target.dataset.source;
  img.setAttribute('src', `${link}`);
  btn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

const closeModal = function () {
  lightBox.classList.remove('is-open');
  img.removeAttribute('src');
  btn.removeEventListener('click', closeModal);
  overlay.removeEventListener('click', closeModal);
}

list.addEventListener('click', getPicture);

