const fs = require('fs');

function readMarkdownFile(path) {
  try {
    return fs.readFileSync(path, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error(`Error: File not found - "${path}"`);
    } else {
      console.error(`Error reading file: ${err.message}`);
    }
    process.exit(1);
  }
}

module.exports = { readMarkdownFile };