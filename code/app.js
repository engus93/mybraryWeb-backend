var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;

    console.log(url.parse(_url, true));

    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end('404 Not found');
    }

    if(_url == '/'){
      _url = '/index.html';
    } else if(_url == '/sign_up'){
      _url = '/sign//sign_up.html';
    } else if(_url == '/sign_in'){
        _url = '/sign//sign_in.html';
    }

    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + _url));
});

app.listen(3000);