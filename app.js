var bogart = require('bogart') 
   , router = bogart.router() 
   , path   = require('path') 
   , mongoose  = require('mongoose')
   , util   = require('./lib/util').Util 
   , settings = require('./config/settings').Settings 
   , fs = require('fs')
   , io = require('socket.io');

//var dbSettings = require('./config/settings').Settings.db;
//var connection = mysql.createConnection(dbSettings);
 
var viewEngine = bogart.viewEngine('mustache', path.join(__dirname, 'lib/views')); 
 
var app = bogart.app(); 
 
app.use(function (nextApp) { 
  return function (req) { 
    req.env = Object.create(req.env); 
    return nextApp(req); 
  } 
}); 
 
require('./lib/controllers')(router, viewEngine);

app.use(bogart.batteries); //Life is better with batteries 
 
app.use(router); // Our router 
 
var server = app.start({ port:1337 });

// Add a socket.io listener
io = io.listen(server);

// Log connections while we finish wiring
io.on('connection', function (socket) {
    console.log('connected');
});
