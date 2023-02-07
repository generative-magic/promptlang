@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace

@{%
const moo = require('moo')

let lexer = moo.compile({
    keyword: ['<PROMPT>', '</PROMPT>'],
    space: {match: /\s+/, lineBreaks: true},
    prompt_section:{match:/[^]+/, lineBreaks: true},
});
%}

@lexer lexer

prompt -> %keyword _ %prompt_section _ %keyword _

_ -> null | %space {% function(d) { return null; } %}
