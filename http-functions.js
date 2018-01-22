var getAndPrintHTML = require('./getAndPrintHTMLParamaters');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function logData(data) {
    console.log(data);
  }

getAndPrintHTML(requestOptions, logData);