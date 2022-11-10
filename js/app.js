let listSong = [
  {
    id: 0,
    title: 'Cưới hông chốt nha (Single)',
    avatar: 'cuoihongchotnha.jpg',
    author: 'Út nhị Mino, Đỗ Thành Duy, NH4T',
    singer: 'Út nhị Mino, Đỗ Thành Duy - 12/10/2022',
    like: '720 người yêu thích',
    time: '04:26',
    source: 'cuoihongchotnha.mp3',
    tym: '373K',
    listen: '5.8M'
  },
  {
    id: 1,
    title: 'Waiting For You',
    avatar: 'watingforyou.jpg',
    author: 'Mono, Onionn',
    singer: 'Mono - 18/08/2022',
    like: '1k người yêu thích',
    time: '04:16',
    source: 'waitingforyou.mp3',
    tym: '858K',
    listen: '25.4M'
  },
  {
    id: 2,
    title: 'Chẳng thể tìm được em',
    avatar: 'changthetimduocem.jpg',
    author: 'PhucXP, Freak D',
    singer: 'PhucXP, Freak D - 25/11/2022',
    like: '2k người yêu thích',
    time: '05:48',
    source: 'changthetimduocem.mp3',
    tym: '2.2M',
    listen: '90.5M'
  },
  {
    id: 3,
    title: 'Có chơi có chịu',
    avatar: 'cochoicochiu.jpg',
    author: 'Karik, Only C',
    singer: 'Karik, Only C - 25/09/2022',
    like: '797 người yêu thích',
    time: '03:44',
    source: 'cochoicochiu.mp3',
    tym: '790K',
    listen: '21M'
  },
  {
    id: 4,
    title: 'Đám cưới nha',
    avatar: 'damcuoinha.jpg',
    author: 'Hồng Thanh, DJ Mie',
    singer: 'Hồng Thanh, DJ Mie - 20/03/2022',
    like: '5k người yêu thích',
    time: '2:55',
    source: 'damcuoinha.mp3',
    tym: '1.7M',
    listen: '80.5M'
  },
  {
    id: 5,
    title: 'Còn gì đau hơn chữ đã từng',
    avatar: 'congidauhonchudatung.jpg',
    author: 'Quân A.P',
    singer: 'Quân A.P - 12/01/2019',
    like: '36k người yêu thích',
    time: '05:05',
    source: 'congidauhonchudatung.mp3',
    tym: '13.1M',
    listen: '237.8M'
  },
  {
    id: 6,
    title: 'Nơi này có anh (Masew Bootleg)',
    avatar: 'noinaycoanh.jpg',
    author: 'Sơn tùng M-TP, Masew',
    singer: 'Sơn tùng M-TP, Masew - 02/05/2017',
    like: '4k người yêu thích',
    time: '04:17',
    source: 'noinaycoanh.mp3',
    tym: '2.1M',
    listen: '35.7M'
  },
  {
    id: 7,
    title: 'Có không giữ mất đừng tìm',
    avatar: 'cokhonggiumatdungtim.jpg',
    author: 'Trúc Nhân',
    singer: 'Trúc Nhân - 12/05/2022',
    like: '740 người yêu thích',
    time: '04:17',
    source: 'cokhonggiumatdungtim.mp3',
    tym: '575k',
    listen: '17.9M'
  },
  {
    id: 8,
    title: 'Vì mẹ anh bắt chia tay',
    avatar: 'vimeanhbatchitay.jpg',
    author: 'Miu Lê, Karik, Châu Đăng Khoa',
    singer: 'Miu Lê, Karik, Châu Đăng Khoa - 13/06/2022',
    like: '3k người yêu thích',
    time: '04:22',
    source: 'vimeanhbatchitay.mp3',
    tym: '1.5M',
    listen: '53.4M'
  },
  {
    id: 9,
    title: 'Vũ Trụ Trong Anh (Single)',
    avatar: 'vutrutronganh.jpg',
    author: 'Hoàng Lan',
    singer: 'Hoàng Lan - 28/04/2022',
    like: '662 người yêu thích',
    time: '03:57',
    source: 'vutrutronganh.mp3',
    tym: '701K',
    listen: '33.2M'
  },
  {
    id: 10,
    title: 'Duyên Duyên Số Số (Single)',
    avatar: 'duyenduyensoso.jpg',
    author: 'DuUyen',
    singer: 'DuUyen - 28/04/2022',
    like: '144 người yêu thích',
    time: '05:22',
    source: 'duyenduyensoso.mp3',
    tym: '204K',
    listen: '7.8M'
  },
  {
    id: 11,
    title: 'Giao Quẻ',
    avatar: 'giaoque.jpg',
    author: 'Hoàng Thùy Linh, Đen',
    singer: 'Hoàng Thùy Linh, Đen - 01/01/2022',
    like: '13K người yêu thích',
    time: '03:19',
    source: 'giaoque.mp3',
    tym: '104K',
    listen: '25.8M'
  },
  {
    id: 12,
    title: 'Vì Yêu Cứ Đâm Đầu',
    avatar: 'viyeucudamdau.jpg',
    author: 'Min, Đen, JustaTee',
    singer: 'Min, Đen, JustaTee - 01/01/2022',
    like: '3K người yêu thích',
    time: '03:51',
    source: 'viyeucudamdau.mp3',
    tym: '8.4K',
    listen: '120.5M'
  },
  {
    id: 12,
    title: 'BlackJack (Single)',
    avatar: 'soobin.jpg',
    author: 'Soobin, Binz',
    singer: 'Soobin, Binz - 30/11/2020',
    like: '1K người yêu thích',
    time: '03:17',
    source: 'blackJack.mp3',
    tym: '880K',
    listen: '32.9M'
  },
  {
    id: 13,
    title: 'The Playah (Special Performance) (Single)',
    avatar: 'theplayah.jpg',
    author: 'Soobin, SlimV',
    singer: 'Soobin, SlimV - 14/05/2021',
    like: '457 người yêu thích',
    time: '07:30',
    source: 'theplayah.mp3',
    tym: '203K',
    listen: '9M'
  },
  {
    id: 14,
    title: 'Như những phút ban đầu',
    avatar: 'nhunhungphubandau.jpg',
    author: 'Hoài Lâm',
    singer: 'Hoài Lâm - 12/09/2016',
    like: '596 người yêu thích',
    time: '05:35',
    source: 'nhunhungphubandau.mp3',
    tym: '2.6M',
    listen: '106.2M'
  },
  {
    id: 15,
    title: 'Anh Vi Cá (Vi Cá Tiền Truyện OST)',
    avatar: 'anhvica.jpg',
    author: 'Blackbi',
    singer: 'Blackbi - 06/11/2018',
    like: '5k người yêu thích',
    time: '03:05',
    source: 'anhvica.mp3',
    tym: '265K',
    listen: '38.2M'
  },
  {
    id: 16,
    title: 'Xin đừng nhấc máy',
    avatar: 'xindungnhacmay.jpg',
    author: 'B Ray, Han Sara, Great',
    singer: 'B Ray, Han Sara, Great - 01/04/2021',
    like: '251 người yêu thích',
    time: '03:08',
    source: 'xindungnhacmay.mp3',
    tym: '468K',
    listen: '19.6M'
  },
  {
    id: 17,
    title: 'Như những phút ban đầu (Cover)',
    avatar: 'can.jpg',
    author: 'Kan Kan',
    singer: 'Kan Kan - 17/10/2022',
    like: '142K người yêu thích',
    time: '01:41',
    source: 'can.mp3',
    tym: '1.2M',
    listen: '50.6M'
  },
  {
    id: 18,
    title: 'Cuối cùng thì',
    avatar: 'cuoicungthi.jpg',
    author: 'Jack J-97',
    singer: 'Jack J-97 - 06/11/2022',
    like: '350K người yêu thích',
    time: '03:41',
    source: 'cuoicungthi.mp3',
    tym: '1.2M',
    listen: '50.6M'
  }
];

let song = document.querySelector('.song');
let play = document.querySelector('.player-play');
let avatar = document.querySelector('.music-avatar');
let btnPlay = document.querySelector('.music-btn a');
let musicList = document.querySelector('.music-lists');
let prev = document.querySelector('.back');
let next = document.querySelector('.next');
let repeat = document.querySelector('.repeat');
let musicAvatar = document.querySelector('.music-avatar img');
let musicTitle = document.querySelector('.music-title');
let musicSinger = document.querySelector('.music-author a');
let musicLike = document.querySelector('.music-like');
let playerAvatar = document.querySelector('.player-avatar img');
let playerTitle = document.querySelector('.player-name');
let playerAuthor = document.querySelector('.player-author');
let playerStart = document.querySelector('.player-start');
let playerEnd = document.querySelector('.player-end');
let playerRange = document.querySelector('.player-range');
let isPlaySong = true;
var indexSong = 0;
let isMix = false;

listSong.map((item, index) => {
  musicList.innerHTML += `
  <!-- music item -->
  <div class="music-item item">
    <div class="music-listIcons">
      <div id="music-icons">
        <div class="icon">
          <ion-icon name="headset-outline"></ion-icon>
          <div class="icon-box">Nge cùng lời bài hát</div>
        </div>
        <div class="icon">
          <ion-icon name="heart-outline"></ion-icon>
          <div class="icon-box">Thêm vào thư viện</div>
        </div>
        <div class="icon">
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
          <div class="icon-box">Khác</div>
          </div>
        </div>
    </div>
    <div class="music-group">
      <div class="music-icon">
        <ion-icon name="musical-notes-outline"></ion-icon>
      </div>
      <div class="music-img">
        <img src="./assets/image/${item.avatar}" alt="">
        <div class="music-svg">
          <img src="./assets/image/playing.gif" alt="">
        </div>
        <div class="music-pause">
          <ion-icon name="play"></ion-icon>
        </div>
      </div>
      <div class="music-info">
        <h3 class="music-name">${item.title}</h3>
        <div class="music-singer"><a href="#!">${item.author}</a></div>
      </div>
    </div>
    <div class="music-album">${item.title}</div>
    <div class="music-time">${item.time}</div>
  </div>
  `
})

let listContent = document.querySelector('.list-content');
listSong.map((item, index) => {
  listContent.innerHTML += `
  <div class="list-item">
    <div class="list-avatar">
      <img src="./assets/image/${item.avatar}" alt="">
      <div class="music-svg">
        <img src="./assets/image/playing.gif" alt="">
      </div>
      <div class="list-playPause">
        <ion-icon name="play"></ion-icon>
      </div>
    </div>
    <div class="list-box">
      <h3 class="list-title">${item.title}</h3>
      <p class="list-author">${item.author}</p>
    </div>
  </div>
  `
})

let listItems = document.querySelectorAll('.item');
song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);

play.addEventListener('click', playPause);
btnPlay.addEventListener('click', playPause);
function playPause(indexSong) {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('light');
  }
  if (isPlaySong) {
    song.play();
    isPlaySong = false;
    play.innerHTML = `<ion-icon name="pause"></ion-icon>`;
    avatar.classList.add('isPlayAvatar');
    btnPlay.innerHTML = `<ion-icon name="pause"></ion-icon> Tạm dừng`;
    listItems[indexSong].classList.add('light');
  } else {
    song.pause();
    isPlaySong = true;
    play.innerHTML = `<ion-icon name="play"></ion-icon>`;
    avatar.classList.remove('isPlayAvatar');
    btnPlay.innerHTML = `<ion-icon name="play"></ion-icon> Tiếp tục`;
    listItems[indexSong].classList.remove('light');
  }
}

function playPause() {
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove('light');
    listitem[i].classList.remove('light');
  }
  if (isPlaySong) {
    song.play();
    isPlaySong = false;
    play.innerHTML = `<ion-icon name="pause"></ion-icon>`;
    avatar.classList.add('isPlayAvatar');
    btnPlay.innerHTML = `<ion-icon name="pause"></ion-icon> Tạm dừng`;
    listItems[indexSong].classList.add('light');
    listitem[indexSong].classList.add('light');
  } else {
    song.pause();
    isPlaySong = true;
    play.innerHTML = `<ion-icon name="play"></ion-icon>`;
    avatar.classList.remove('isPlayAvatar');
    btnPlay.innerHTML = `<ion-icon name="play"></ion-icon> Tiếp tục`;
    listItems[indexSong].classList.remove('light');
    listitem[indexSong].classList.remove('light');
  }
}

next.addEventListener('click', () => {
  changeSong(1);
})

prev.addEventListener('click', () => {
  changeSong(-1);
})

let timmer = setInterval(displayTimer, 500);

function changeSong(dir) {
  if (dir == 1) {
    if (isMix) {
      indexSong = Math.floor(Math.random() * listSong.length);
      song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
      isPlaySong = true;
    } else {
      indexSong++;
      if (indexSong >= listSong.length) {
        indexSong = 0;
      }
      isPlaySong = true;
      timmer = setInterval(displayTimer, 500);
    }
  } else if (dir === -1) {
    if (isMix) {
      indexSong = Math.floor(Math.random() * listSong.length);
      song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
      isPlaySong = true;
    } else {
      indexSong--;
      if (indexSong < 0) {
        indexSong = listSong.length - 1;
      }
      isPlaySong = true;
      clearInterval(timmer);
    }
  };

  song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
  playPause(indexSong);
  displayInfo(indexSong);
}

song.addEventListener('ended', handleEndedSong);
function handleEndedSong() {
  if (isRepeat) {
    song.load();
    song.play();
  } else {
    changeSong(1);
  }
}

let moreAvatar = document.querySelector('.more-info img');
let moreTitle = document.querySelector('.more-div h4');
let viewLike = document.querySelector('.viewLike');
let viewMusic = document.querySelector('.viewMusic');
let dialogImage = document.querySelector('.playerNext .player-dialogImage img');
let dialogName = document.querySelector('.playerNext .player-dialogName');
let dialogAuthor = document.querySelector('.playerNext .player-dialogAuthor');
let dialogImageBack = document.querySelector('.playerBack .player-dialogImage img');
let dialogNameBack = document.querySelector('.playerBack .player-dialogName');
let dialogAuthorBack = document.querySelector('.playerBack .player-dialogAuthor');

dialogImage.setAttribute('src', `./assets/image/${listSong[indexSong == (listSong.length - 1) ? 0 : (indexSong + 1)].avatar}`);
dialogName.textContent = listSong[indexSong == (listSong.length - 1) ? 0 : (indexSong + 1)].title;
dialogAuthor.textContent = listSong[indexSong == (listSong.length - 1) ? 0 : (indexSong + 1)].author;

dialogImageBack.setAttribute('src', `./assets/image/${listSong[indexSong == 0 ? (listSong.length - 1) : (indexSong - 1)].avatar}`);
dialogNameBack.textContent = listSong[indexSong == 0 ? (listSong.length - 1) : (indexSong - 1)].title;
dialogAuthorBack.textContent = listSong[indexSong == 0 ? (listSong.length - 1) : (indexSong - 1)].author;

function displayInfo(indexSong) {
  musicAvatar.setAttribute('src', `./assets/image/${listSong[indexSong].avatar}`);
  musicTitle.innerText = listSong[indexSong].title;
  musicSinger.innerText = listSong[indexSong].singer;
  musicLike.innerText = listSong[indexSong].like;
  playerAvatar.setAttribute('src', `./assets/image/${listSong[indexSong].avatar}`);
  playerTitle.innerText = listSong[indexSong].title;
  playerAuthor.innerText = listSong[indexSong].author;
  moreAvatar.setAttribute('src', `./assets/image/${listSong[indexSong].avatar}`);
  moreTitle.innerText = listSong[indexSong].title;
  viewLike.innerText = listSong[indexSong].tym;
  viewMusic.innerText = listSong[indexSong].listen;
  dialogImage.setAttribute('src', `./assets/image/${listSong[indexSong == (listSong.length - 1) ? 0 : (indexSong + 1)].avatar}`);
  dialogName.textContent = listSong[indexSong == (listSong.length - 1) ? 0 : (indexSong + 1)].title;
  dialogAuthor.textContent = listSong[indexSong == (listSong.length - 1) ? 0 : (indexSong + 1)].author;
  dialogImageBack.setAttribute('src', `./assets/image/${listSong[indexSong == 0 ? (listSong.length - 1) : (indexSong - 1)].avatar}`);
  dialogNameBack.textContent = listSong[indexSong == 0 ? (listSong.length - 1) : (indexSong - 1)].title;
  dialogAuthorBack.textContent = listSong[indexSong == 0 ? (listSong.length - 1) : (indexSong - 1)].author;
}

function displayTimer() {
  let { duration, currentTime } = song;
  playerStart.textContent = formatTimer(currentTime);
  playerRange.max = duration;
  playerRange.value = currentTime;
  if (!duration) {
    playerEnd.textContent = '00:00';
  } else {
    playerEnd.textContent = formatTimer(duration);
  }
}

function formatTimer(number) {
  let minute = Math.floor(number / 60);
  let second = Math.floor(number - minute * 60);
  return `${minute}:${second < 10 ? "0" : ""}${second}`;
}

displayTimer();

playerRange.addEventListener('change', handleRange);
function handleRange() {
  song.currentTime = playerRange.value;
}

let musicSvg = document.querySelectorAll('.music-svg');
for (let i = 0; i < musicSvg.length; i++) {
  musicSvg[i].addEventListener('click', () => {
    playPause(indexSong);
  })
}
document.querySelector('.music-playingIcon').addEventListener('click', () => {
  playPause(indexSong);
})

document.querySelector('.music-playing').addEventListener('click', () => {
  playPause(indexSong);
})

let isVolume = true;
let iconVolume = document.querySelector('.player-iconVolume');
let volumeRange = document.querySelector('.player-volumeRange');
volumeRange.style.width = volume.value + '%';
function setVolume() {
  song.volume = volume.value / 100;
  volumeRange.style.width = volume.value + '%';
  console.log()
  if (song.volume === 0) {
    iconVolume.innerHTML = `<ion-icon name="volume-mute-outline"></ion-icon>`;
  } else {
    iconVolume.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
  }
}

iconVolume.addEventListener('click', () => {
  if (isVolume) {
    song.volume = 0;
    isVolume = false;
    iconVolume.innerHTML = `<ion-icon name="volume-mute-outline"></ion-icon>`;
  } else {
    song.volume = volume.value / 100;
    isVolume = true;
    iconVolume.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
  }
});

let isRepeat = false;
repeat.addEventListener('click', () => {
  if (isRepeat) {
    repeat.parentElement.querySelector('p').textContent = 'Bật lặp lại'
    repeat.style.color = '';
    isRepeat = false;
  } else {
    repeat.parentElement.querySelector('p').textContent = 'Tắt lặp lại'
    repeat.style.color = '#c273ed';
    isRepeat = true;
  }
})

let mix = document.querySelector('.player-mix');
mix.addEventListener('click', handleMix);
function handleMix() {
  let player = document.querySelectorAll('.player-dialog');
  if (isMix) {
    mix.parentElement.querySelector('p').textContent = 'Bật phát ngẫu nhiên';
    mix.style.color = '';
    isMix = false;
    player[0].style.display = '';
    player[1].style.display = '';
  } else {
    mix.parentElement.querySelector('p').textContent = 'Tắt phát ngẫu nhiên';
    mix.style.color = '#c273ed';
    isMix = true;
    player[0].style.display = 'none';
    player[1].style.display = 'none';
  }
}

let checkClickSong = false;
let musicPause = document.querySelectorAll('.music-pause');
let musicName = document.querySelectorAll('.music-name');
for (let i = 0; i < musicPause.length; i++) {
  musicPause[i].addEventListener('click', () => {
    indexSong = i;
    isPlaySong = true;
    song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
    playPause(indexSong);
    displayInfo(indexSong);
  })
}
for (let i = 0; i < musicName.length; i++) {
  musicName[i].addEventListener('click', () => {
    indexSong = i;
    isPlaySong = true;
    song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
    playPause(indexSong);
    displayInfo(indexSong);
  })
}

let playerBar = document.querySelector('.player-bar');
song.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let propressWidth = (currentTime / duration) * 100;
  playerBar.style.width = `${propressWidth}%`;
})

let listitem = document.querySelectorAll('.list-item');
let listTitle = document.querySelectorAll('.list-title');
for (let i = 0; i < listTitle.length; i++) {
  listTitle[i].addEventListener('click', () => {
    indexSong = i;
    isPlaySong = true;
    song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
    playPause(indexSong);
    displayInfo(indexSong);
  })
}

let listPause = document.querySelectorAll('.list-playPause');
for (let i = 0; i < listPause.length; i++) {
  listPause[i].addEventListener('click', () => {
    indexSong = i;
    isPlaySong = true;
    song.setAttribute('src', `./assets/music/${listSong[indexSong].source}`);
    playPause(indexSong);
    displayInfo(indexSong);
  })
}

document.onkeyup = (e) => {
  if (e.which === 13) {
    playPause();
  }
}