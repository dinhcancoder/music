let more = document.querySelector('.player-more ion-icon');
more.addEventListener('click', () => {
  more.classList.toggle('displayMore');
})

let themeHeader = document.querySelector('.header-theme');
let themeClose = document.querySelector('.theme-close');
let theme = document.querySelector('.theme');
let opacity = document.querySelector('.opacity');

themeHeader.addEventListener('click', () => {
  theme.classList.toggle('displayTheme');
  opacity.classList.toggle('displayTheme');
})

themeClose.addEventListener('click', () => {
  theme.classList.toggle('displayTheme');
  opacity.classList.toggle('displayTheme');
})

opacity.addEventListener('click', () => {
  opacity.classList.toggle('displayTheme');
  theme.classList.toggle('displayTheme');
})

let list = document.querySelector('.list');
let playerListSong = document.querySelector('.player-listSong');
playerListSong.addEventListener('click', () => {
  playerListSong.classList.toggle('playerListSong');
  list.classList.toggle('showlistMusic');
})

let lyris = document.querySelector('.lyris');
let lyrisClose = document.querySelector('.lyris-close');
let lyrisSong = document.querySelector('.lyrisSong');
let isLyris = false;
lyrisSong.addEventListener('click', () => {
  lyris.classList.toggle('showLyris');
  if (isLyris) {
    lyrisSong.style.color = ''
    isLyris = false;
  } else {
    lyrisSong.style.color = '#c273ed'
    isLyris = true;
  }
})

lyrisClose.addEventListener('click', () => {
  lyris.classList.toggle('showLyris');
})