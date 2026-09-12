#!/usr/bin/env node

const { readMarkdownFile } = require('./reader');
const { renderMarkdown } = require('./renderer');

const filePath = process.argv[2];

if (!filePath) {
  console.log('Usage: node src/index.js <file.md>');
  process.exit(1);
}

if (!filePath.endsWith('.md')) {
  console.log('Warning: File does not have a .md extension. Attempting to preview anyway.');
}

const content = readMarkdownFile(filePath);
const output = renderMarkdown(content);

console.log(output);