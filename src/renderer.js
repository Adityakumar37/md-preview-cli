const { marked } = require('marked');
const { markedTerminal } = require('marked-terminal');

marked.use(markedTerminal());

function renderMarkdown(content) {
  return marked.parse(content);
}

module.exports = { renderMarkdown };