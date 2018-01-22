var https = require('https');

function getAndPrintHTML (options) {

  var allData;

  https.get(options, function (response) {

  response.setEncoding('utf8');

  allData += response.on('data', function (data) {
    console.log('Chunk Received.' + data + '\n');
  });

  response.on('end', function() {
    console.log('Response Stream Complete');
  });


 });

}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(requestOptions);