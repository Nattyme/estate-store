import filter from './../filter/filterController';

export default function () {
  document.querySelector('#app').innerHTML = markup;

  filter();
}

