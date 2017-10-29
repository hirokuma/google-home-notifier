var googlehome = require('./google-home-notifier');

googlehome.device('something', 'ja');
googlehome.ip('192.168.x.xx');
//googlehome.ip('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.local');
googlehome.speed(0.24);
googlehome.notify('おちゃづけ', function(res) {
  console.log(res);
});
