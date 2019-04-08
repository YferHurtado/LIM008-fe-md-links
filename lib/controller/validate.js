"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateLinks = void 0;

require("core-js/modules/web.dom.iterable");

var _links = require("./links");

var _path = require("./path");

const fetch = require('node-fetch');

const validateLinks = arrLinks => {
  const promises = link => new Promise((resolve, reject) => {
    fetch(link.href).then(res => {
      if (res.status >= 200 & res.status < 400) {
        link.code = res.status;
        link.status = res.statusText;
        resolve(link);
      } else {
        link.code = res.status;
        link.status = 'FAIL';
        resolve(link);
      }
    }).catch(error => {
      error = 'URL no válido';
      link.code = error;
      link.status = 'FAIL';
      resolve(link);
    });
  });

  const result = arrLinks.map(promises);
  return Promise.all(result);
};

exports.validateLinks = validateLinks;
validateLinks((0, _links.extractLinks)((0, _path.readDirectoryOrFile)('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md'))).then(resultado => console.log(resultado)).catch(error => console.log(error));