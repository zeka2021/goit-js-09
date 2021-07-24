import menuElement from './menu.json';
import menuTemplate from './templates/templates.hbs';
import './js/changeTheme.js';
import './styles.css';

const menu = document.querySelector('.js-menu');
const markup = menuTemplate(menuElement);
menu.insertAdjacentHTML('beforeend', markup);

