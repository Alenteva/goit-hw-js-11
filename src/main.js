import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const inputSerch = document.querySelector('input');
const buttonSerch = document.querySelector('button');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
const URL =
  'https://pixabay.com/api/?key=42245077d2f8998b656235f8798291f32&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true';

form.addEventListener('sabmit', event => {
  event.preventDefault();
  if (inputSerch.value.trim() === '') {
    return;
  }
  fetchImg()
    .then(images => renderImg(images))
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
    });
});

function fetchImg() {
  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function renderImg(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        ` <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}"
            data-source="${largeImageURL}"
            width="360px"
            height="200px"
            alt="${tags}"  
          />
        </a>
         <div class="thumb-block">
        <div class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${likes}</p>
        </div>
        <div class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${views}</p>
        </div>
        <div class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${comments}</p>
        </div>
        <div class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${downloads}</p>
        </div>
      </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
