var getHTML = require('../getAndPrintHTMLParamaters');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function toLowerCase(html) {
console.log(html.toLowerCase());
};

getHTML(requestOptions, toLowerCase);
