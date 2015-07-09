
var express = require('express'),
    app = express();

app.set('view engine', 'ejs'); 
app.set('views', __dirname + '/views');

var SERVER_PORT = Number(process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.render('index');
});

var server = app.listen(SERVER_PORT, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at: ', SERVER_PORT);

});
