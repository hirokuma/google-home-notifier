# google-home-notifier

Send notifications to Google Home

## Installation

```sh
$ git clone https://github.com/hirokuma/google-home-notifier-test.git
$ cd google-home-notifier-test
$ npm install
```

## Usage

```javascript
var googlehome = require('google-home-notifier');

googlehome.ip('192.168.x.x');
googlehome.accent('us'); // optional: 'us'= american voice (default), 'uk'= british voice
googlehome.notify('Hey Foo', function(res) {
  console.log(res);
});
```

## Raspberry Pi

If you are running from Raspberry Pi make sure you have the following before nunning "npm install":
Use the latest nodejs dist.

```sh
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install nodejs
```
