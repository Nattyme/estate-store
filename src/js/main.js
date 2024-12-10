import homePage from './pages/homePage';
import singleItem from './pages/singleItemPage';
import favouritesPage from './pages/favouritesPage';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';

// State
const state = {};

// For testing
window.state = state;

// Routes
const routes = [
  {path: '/', component: homePage},
  {path: 'item', component: singleItem},
  {path: 'favourites', component: favouritesPage},
  {path: 'bids', component: bidsPage}
];

// find component in routes by route
const findComponentByPath = function (path, routes) {
  return routes.find( function (route) {
    return route.path === path; //  return route we search for
  });
}

// Router 
const router = function () {
  // Split path to array
  const pathArray = location.hash.split('/');

  // Set current path
  let currentPath = pathArray[0] === '' ? '/' : pathArray[1]; // no params - main page
  currentPath = currentPath === '' ? '/' : currentPath; 

  // Current matching Component from router or error page
  const { component = errorPage } = findComponentByPath(currentPath, routes) || {};

  component(state);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
