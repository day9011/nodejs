var server = require('./server');
var router = require('./router');
server.start(router.route);
console.log('Server running at http://127.0.0.1:8888/');
//events
// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event', function(){
// 	console.log('some_event toggle');
// });
// setTimeout(function(){
// 	event.emit('some_event');
// },10000);
//
// var listener = function listener() {
// 	console.log('listener start');
// };
// event.addListener('connection', listener);
// event.on('connection', listener);
// var eventListeners = require('events').EventEmitter.listenerCount(event,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");
// event.emit()
// event.removeListener('connection', listener);
// console.log('listener stop');
// eventListeners = require('events').EventEmitter.listenerCount(event,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");
// console.log('finished');


