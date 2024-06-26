// ----- IMPORTS | Fetch-Search

import { optionsIMDB } from './api/imdb-api';
import { paginationFetch } from './pagination-fetch';
import { paginationSearch } from './pagination-search';

import { Loading } from 'notiflix/build/notiflix-loading-aio';

import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-aio.js';

import { findGenresOfMovie } from './find-genre';
import img from '../images/foto.jpg';

// ----- DECLARATIONS | Fetch

let BASE_URL = optionsIMDB.specs.baseURL;
let API_KEY = optionsIMDB.specs.key;
let page = 1;

// ----- DECLARATIONS | Search

const refs = {
  galleryFetchContainer: document.querySelector('.gallery_fetch-container'),
  gallerySearchContainer: document.querySelector('.gallery_search-container'),
  paginationItemsFetchContainer: document.querySelector(
    '.pagination-fetch_container'
  ),
  paginationItemsSearchContainer: document.querySelector(
    '.pagination-search_container'
  ),
};

const libraryFetchEl = document.querySelector('.gallery_fetch-box');
const librarySearchEl = document.querySelector('.gallery_search-box');
const searchInputEl = document.querySelector('input[name="searchQuery"]');
const searchFormEl = document.getElementById('search-form');

const optionError = {
  width: '390px',
  position: 'center-top',
  distance: '145px',
  fontSize: '14px',
  opacity: 1,
  useIcon: false,
  failure: {
    textColor: '#FF001B',
    background: 'rgba(0,0,0,0)',
  },
};

// ----- FUNCTIONS | Fetch Movies

async function fetchMovies() {
  refs.galleryFetchContainer.classList.remove('is-hidden');
  refs.paginationItemsFetchContainer.classList.remove('is-hidden');

  Loading.pulse({
    svgColor: 'purple',
  });

  try {
    const res = await axios.get(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    libraryFetchEl.innerHTML = '';
    clearGalleryMarkup();

    renderFetchMoviesCard(res.data.results);

    page = optionsIMDB.specs.page;

    optionsIMDB.specs.totalPages = res.data.total_pages;
    totalPages = optionsIMDB.specs.totalPages;

    refs.paginationItemsFetchContainer.addEventListener(
      'click',
      onFetchPaginationClick
    );
    paginationFetch(page, totalPages);

    Loading.remove(100);

    return res;
  } catch (error) {
    console.log(error);
  }
}

async function onFetchPaginationClick({ target }) {
  let fetchStatus = 0;

  if (
    target.classList.contains('btn-left') &&
    !target.classList.contains('disabled')
  ) {
    fetchStatus = 1;
  }

  if (
    target.classList.contains('btn-right') &&
    !target.classList.contains('disabled')
  ) {
    fetchStatus = 2;
  }

  if (!fetchStatus) {
    if (target.nodeName === 'UL' || target.classList.contains('disabled')) {
      return;
    }

    if (isNaN(Number(target.textContent)) && fetchStatus != 0) {
    } else if (isNaN(Number(target.textContent))) {
      return;
    }

    if (Number(target.textContent) === optionsIMDB.specs.page) {
      return;
    }
  }

  switch (fetchStatus) {
    case 0:
      optionsIMDB.specs.page = Number(target.textContent);
      break;
    case 1:
      optionsIMDB.specs.page--;
      break;
    case 2:
      optionsIMDB.specs.page++;
      break;
  }

  globalCurrentPage = optionsIMDB.specs.page;

  let BASE_URL = optionsIMDB.specs.baseURL;
  let API_KEY = optionsIMDB.specs.key;
  let page = optionsIMDB.specs.page;

  Loading.pulse({
    svgColor: 'purple',
  });

  try {
    const res = await axios.get(
      `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`
    );

    clearGalleryMarkup();

    renderFetchMoviesCard(res.data.results);
    totalPages = optionsIMDB.specs.totalPages;

    paginationFetch(page, totalPages);

    Loading.remove(100);

    return res;
  } catch (err) {
    console.log('ERROR: ', err.message);
    console.log('ERROR CODE: ', err.code);
  }

  refs.paginationItemsFetchContainer.addEventListener(
    'click',
    onFetchPaginationClick
  );
  paginationFetch(optionsIMDB.specs.page, optionsIMDB.specs.totalPages);
}

function renderFetchMoviesCard(movies) {
  const markup = movies
    .map(movie => {
      const { poster_path, title, genre_ids, release_date, id } = movie;
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
            <div class="card" id="${id}">
                <img class="card_img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
                <p class="card_title"> ${title} <br />
                    <span class="card_text">${findGenresOfMovie(
                      genre_ids
                    )} | ${date}</span>
                </p>
            </div>`;
      }
      return `
            <div class="card" id="${id}">
                <img class="card_img"  src="${img}" alt="${title}" />
                <p class="card_titel"> ${title} <br />
                    <span class="card_text">${findGenresOfMovie(
                      genre_ids
                    )} | ${date}</span>
                </p>
            </div>`;
    })
    .join('');

  libraryFetchEl.insertAdjacentHTML('beforeend', markup);
}

// ----- FUNCTIONS | Search Movies

async function onSearchMovies(e) {
  e.preventDefault();

  refs.galleryFetchContainer.classList.add('is-hidden');
  refs.gallerySearchContainer.classList.remove('is-hidden');
  refs.paginationItemsFetchContainer.classList.add('is-hidden');

  optionsIMDB.specs.query = searchInputEl.value.trim();
  console.log(optionsIMDB.specs.query);
  if (optionsIMDB.specs.query === '') {
    onResultSearchError();
    return;
  } else if (optionsIMDB.specs.query !== undefined) {
    initializeParam();

    let BASE_URL = optionsIMDB.specs.baseURL;
    let API_KEY = optionsIMDB.specs.key;
    let query = optionsIMDB.specs.query;
    let page = optionsIMDB.specs.page;

    try {
      const res = await axios.get(
        `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
      );

      if (res.data.results.length === 0) {
        Notify.failure('No entries found. Please input again in search form.');
        initializeParam();
      } else {
        libraryFetchEl.innerHTML = '';
        refs.paginationItemsFetchContainer.innerHTML = '';
        refs.paginationItemsSearchContainer.classList.remove('is-hidden');
        clearGalleryMarkup();

        renderSearchMoviesCard(res.data.results);

        optionsIMDB.specs.totalPages = res.data.total_pages;
        totalPages = optionsIMDB.specs.totalPages;

        refs.paginationItemsSearchContainer.addEventListener(
          'click',
          onSearchPaginationClick
        );
        paginationSearch(optionsIMDB.specs.page, optionsIMDB.specs.totalPages);
      }
      return res;
    } catch (error) {
      Notify.failure(error);
    }
  }
}

function initializeParam() {
  searchInputEl.value = '';
  optionsIMDB.specs.page = 1;
}

function onResultSearchError() {
  librarySearchEl.innerHTML = `<h1 style="font-size=80px">Search result not successful. <br>Enter the correct movie name.</h1>`;
  Notiflix.Report.failure(
    'Search Failure',
    'Search result not successful. Enter the correct movie name.',
    'Okay'
  );
  searchInputEl.value = '';
  refs.paginationItemsSearchContainer.classList.add('is-hidden');
  initializeParam();
}

async function onSearchPaginationClick({ target }) {
  let searchStatus = 0;

  if (
    target.classList.contains('btn-left') &&
    !target.classList.contains('disabled')
  ) {
    searchStatus = 1;
  }

  if (
    target.classList.contains('btn-right') &&
    !target.classList.contains('disabled')
  ) {
    searchStatus = 2;
  }

  if (!searchStatus) {
    if (target.nodeName === 'UL' || target.classList.contains('disabled')) {
      return;
    }

    if (isNaN(Number(target.textContent)) && searchStatus != 0) {
    } else if (isNaN(Number(target.textContent))) {
      return;
    }

    if (Number(target.textContent) === optionsIMDB.specs.page) {
      return;
    }
  }

  switch (searchStatus) {
    case 0:
      optionsIMDB.specs.page = Number(target.textContent);
      break;
    case 1:
      optionsIMDB.specs.page--;
      break;
    case 2:
      optionsIMDB.specs.page++;
      break;
  }

  globalCurrentPage = optionsIMDB.specs.page;

  let BASE_URL = optionsIMDB.specs.baseURL;
  let API_KEY = optionsIMDB.specs.key;
  let query = optionsIMDB.specs.query;
  let page = optionsIMDB.specs.page;

  try {
    const res = await axios.get(
      `${BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );

    renderSearchMoviesCard(res.data.results);
    optionsIMDB.specs.totalPages = res.data.total_pages;
    totalPages = optionsIMDB.specs.totalPages;

    paginationSearch(response.data.page, response.data.total_pages);

    return res;
  } catch (err) {
    console.log('ERROR: ', err.message);
    console.log('ERROR CODE: ', err.code);
  }

  refs.paginationItemsSearchContainer.addEventListener(
    'click',
    onSearchPaginationClick
  );
  paginationSearch(optionsIMDB.specs.page, optionsIMDB.specs.totalPages);
}

function clearGalleryMarkup() {
  libraryFetchEl.innerHTML = '';
}

function renderSearchMoviesCard(movies) {
  librarySearchEl.innerHTML = '';
  const markup = movies
    .map(movie => {
      const { poster_path, title, genre_ids, release_date, id } = movie;
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
            <div class="card" id="${id}">
                <img class="card_img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
                <p class="card_title"> ${title} <br />
                    <span class="card_text">${findGenresOfMovie(
                      genre_ids
                    )} | ${date}</span>
                </p>
            </div>`;
      }
      return `
            <div class="card" id="${id}">
                <img class="card_img"  src="${img}" alt="${title}" />
                <p class="card_titel"> ${title} <br />
                    <span class="card_text">${findGenresOfMovie(
                      genre_ids
                    )} | ${date}</span>
                </p>
            </div>`;
    })
    .join('');

  librarySearchEl.insertAdjacentHTML('beforeend', markup);
}

// ----- FUNCTION | Run Program

fetchMovies();

// ---------- EVENT LISTENERS

searchFormEl.addEventListener('submit', onSearchMovies);
