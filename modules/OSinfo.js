var os = require('os');
var colors = require('colors');
var time = require('./time');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();
    console.log(colors.gray('System:'), type);
    console.log(colors.red('Release:'), release);
    console.log(colors.blue('CPU model:'), cpu);
    console.log(colors.green('User name:'), userInfo.username);
    console.log(colors.inverse('Home dir:'), userInfo.homedir);
}
//getOSinfo();

exports.print = getOSinfo;

time.print();
