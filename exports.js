/**
 * Created by dinghanyu on 4/10/16.
 */
exports.world = function () {
    console.log('Hello World');
};

exports.test = function () {
    console.log('test for exports');
};

var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}

var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res){
    var post = '';     //定义了一个post变量，用于暂存请求体的信息

    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        post += chunk;
        console.log("get post request");
    });
    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        post = querystring.parse(post);
        console.log(post);
        res.end(util.inspect(post));//util.inspect一个将任意对象转换为字符串
    });
}).listen(3000);

// var http = require('http');
// var url = require('url');
// var util = require('util');
//
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);
// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj, true));
// var time = new Date();
// console.log(time);
// var fs = require('fs');
// fs.stat('./hello.js', function (err, stats) {
//     if (err){
//         return console.log(err);
//     }
//     console.log(stats);
//     console.log("读取文件信息成功！");
//     console.log("是否为文件(isFile) ? " + stats.isFile());
//     console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
// });
//利用exports一个模块多个对象.