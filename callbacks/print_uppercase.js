var getHTML = require('../getAndPrintHTMLParamaters');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function toUppercase(html) {
console.log(html.toUpperCase());
};

getHTML(requestOptions, toUppercase);



