var https = require('https');

function getAndPrintHTML (options, callback) {

  var allData;

  https.get(options, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    allData += data;

  });


  response.on('end', function() {
    callback(allData);
    return allData;

  });

 });

}


  function logData(data) {
    console.log(data);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getAndPrintHTML(requestOptions, logData);
