// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (nodejs-and-expressjs-tutorial) package
// version: (1.0.0)                                                                        
// description: a node js tutorial
// entry point: (index.js)                                                                 
// test command:                                                                           
// git repository: https://www.github.com/tushar-1308/node-js.git
// keywords: code step by tushar
// author: Tushar Bansal                                                                   
// license: (ISC)                                                                          
// About to write to C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial\package.json:

// {
//   "name": "package",
//   "version": "1.0.0",
//   "description": "a node js tutorial",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/tushar-1308/node-js.git"
//   },
//   "keywords": [
//     "code",
//     "step",
//     "by",
//     "tushar"
//   ],
//   "author": "Tushar Bansal",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/tushar-1308/node-js/issues"
//   },
//   "homepage": "https://github.com/tushar-1308/node-js#readme"
// }


// Is this OK? (yes)

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> npm i colors

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> npm i simple-node-logger

// PS C:\Users\tushar.c.bansal\NodeJS and ExpressJS tutorial> npm i chalk

console.log('Package.json');
const colors = require('colors');
const chalks = require('chalk');
console.log("package.json".red);
