import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');
const inputSearch = document.querySelector('input');
const buttonSearch = document.querySelector('button');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const search = e.target.elements.search.value;
  if (search === '') {
    return;
  }
  searchImg().then(data => {
    renderImg(data.hits);
  });
  e.target.reset();
});

const searchParams = new URLSearchParams({
  key: '42245077-d2f8998b656235f8798291f32',
  q: 'cat',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
});

function searchImg() {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const PARAMS = `?${searchParams}`;

  const URL = BASE_URL + END_POINT + PARAMS;
  return fetch(URL).then(response => response.json());
}

function templateImg(images) {
  return `<li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
          width="360"
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
    </li>`;
}

function renderImg(images) {
  const markup = templateImg();
  gallery.insertAdjacentHTML('beforeend', markup);
}
