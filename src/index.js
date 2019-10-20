import menuItems from './menu.json';
import postFeedTpl from './post-feed-item.hbs';
import './styles.css';

const body = document.body;
const defaultTheme = localStorage.getItem('theme');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('#menu'),
};

const markup = postFeedTpl(menuItems);
refs.menu.insertAdjacentHTML('beforeend', markup);

const checkboxControl = {
  switch: document.querySelector('#theme-switch-control'),
};

const setDefaultTheme = function() {
  body.classList.add(defaultTheme);
  if (body.classList.contains(Theme.DARK)) {
    checkboxControl.switch.checked = true;
  }
};

checkboxControl.switch.addEventListener('change', e => {
  if (checkboxControl.switch.checked) {
    body.classList.add(Theme.DARK);
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
});
setDefaultTheme();
