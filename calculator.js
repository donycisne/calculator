const home = document.querySelector('.home');
const welcome = document.querySelector('.welcome');
const ios = document.querySelector('.icon-ios');
const meta = document.getElementsByTagName('meta')[3];
const calc_ios = document.querySelector('.calc-ios');

ios.addEventListener('click', () => {
  welcome.style.display = 'none';
  calc_ios.style.display = 'flex';
  meta.content = '#000000';
});

home.addEventListener('click', () => {
  welcome.style.display = 'flex';
  calc_ios.style.display = 'none';
  meta.content = '#0e1663';
});
