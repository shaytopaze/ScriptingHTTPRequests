var getHTML = require('../getAndPrintHTMLParamaters');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse(html) {
html = html.split('').reverse().join('');
console.log(html);

};

getHTML(requestOptions, reverse);