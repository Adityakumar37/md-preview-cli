const fs = require('fs');

function readMarkdownFile(path) {
  return fs.readFileSync(path, 'utf8');
}

module.exports = { readMarkdownFile };