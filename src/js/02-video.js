import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  console.log(data);
};
const timeUpdate = function (data) {
  console.log(data);
};

player.on('play', onPlay);
player.on('timeupdate', timeUpdate);
