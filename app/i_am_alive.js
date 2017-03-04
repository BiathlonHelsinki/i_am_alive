
var request = require("request");
var yaml_config = require('node-yaml-config');

var config = yaml_config.load('./config/config.yml');
 

var url =  'http://' + config.api + ":" + config.port + '/hardwares/i_am_alive';

request.get({url: url,
  json: true,
  headers: {"X-Hardware-Name": config.name, "X-Hardware-Token": config.token}},
  function (error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log('error contacting server!');
    } 
  }
);