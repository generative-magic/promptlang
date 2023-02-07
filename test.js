const nearley = require("nearley");
const grammar = require("./grammar.js");

//Load file to string
// const filepath = 'examples/latex/latex.prompt';
const filepath = 'examples/helloworld/helloworld.prompt';
const fs = require('fs');
const inputPrompt = fs.readFileSync(filepath, 'utf8');

// var exec = require('child_process').exec;
// exec('nearleyc grammar.ne -o grammar.js');

// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

// // Parse something!
parser.feed(inputPrompt);

// // parser.results is an array of possible parsings.
console.log(JSON.stringify(parser.results)); // [[[[["foo"],"\n"]]]]