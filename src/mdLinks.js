import { validateLinks } from './controller/validate'
import { extractLinks } from './controller/links'
import { validRouteAbsolute, routeToAbsolute, readDirectoryOrFile } from './controller/path'

export const mdLinks = (path, options) => {
  let pathAbsolute = [];
  if(!validRouteAbsolute(path)) {
    pathAbsolute = routeToAbsolute(path)
  } else { 
    pathAbsolute = path;
  };
  return new Promise((resolve) => {
    !options ? resolve(extractLinks(readDirectoryOrFile(pathAbsolute))) 
    : resolve(validateLinks(extractLinks(readDirectoryOrFile(pathAbsolute))));
    });
  };

  //  mdLinks('/Users/macbookair13/Desktop/Markdown\ Links/LIM008-fe-md-links/tests/prueba/archivosMD/dl.md', { options: true })
  //  .then(res => console.log(res))
  //  .catch(err => console.log(err));
