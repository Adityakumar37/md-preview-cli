#!/usr/bin/env node

const { readMarkdownFile } = require('./reader');

const filePath = process.argv[2];

if (!filePath) {
  console.log('Usage: node index.js <file.md>');
  process.exit(1);
}