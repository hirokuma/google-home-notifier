var googlehome = require('./google-home-notifier');
var ipaddr = 'xx.xx.xx.xx';
var lang = 'ja';

//settings
googlehome.device('', lang);
googlehome.ip(ipaddr);

//talk
googlehome.speed(1.9);
googlehome.notify('おちゃづけ', function(res) {
  console.log(res);
});
