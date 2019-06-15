var googlehome = require('./google-home-notifier');

googlehome.device('something', 'ja');
googlehome.ip('xx.xx.xx.xx');
googlehome.speed(1.9);
googlehome.notify('おちゃづけ', function(res) {
  console.log(res);
});
