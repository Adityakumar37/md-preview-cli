#!/usr/bin/env node


const { readMarkdownFile } = require('./reader');
const { renderMarkdown } = require('./renderer');

const filePath = process.argv[2];

if (!filePath) {
  console.log('Usage: node index.js <file.md>');
  process.exit(1);
}

const content = readMarkdownFile(filePath);
const output = renderMarkdown(content);

console.log(output);