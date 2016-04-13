var http = require("http");
var fs = require("fs");
var url = require("url");

function start(route) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(pathname);
        if (pathname.substr(1) == 'favicon.ico') {
            // response.end();
            console.log('favicon.ico shield');
            response.end();
        }
        else{
            fs.readFile(pathname.substr(1), function (err, data) {
                if (err) {
                    console.log(err);
                    response.writeHead(404, {'Content-Type': 'text/html'});
                }
                else {
                    response.writeHead(200, {"Content-Type": "text/html"});
                    response.write(data.toString());
                }
                response.end();
            });
        }
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
//
// fs.readFile("front.html",function (err, data) {
//     if (err) {
//         console.log(err);
// } else {
//     console.log(data.toString());
// }
// });

exports.start = start;