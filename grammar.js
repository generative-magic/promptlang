// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "text", "symbols": ["tags"]},
    {"name": "text", "symbols": ["tags", "_", {"literal":"\n"}, "_", "tags"]},
    {"name": "text", "symbols": ["_"]},
    {"name": "text", "symbols": ["_", {"literal":"\n"}]},
    {"name": "text", "symbols": ["_", {"literal":"\n"}, "text"]},
    {"name": "tags", "symbols": ["statement"]},
    {"name": "tags", "symbols": ["prompt_config"]},
    {"name": "tags", "symbols": ["prompt"]},
    {"name": "statement", "symbols": ["_"]},
    {"name": "statement", "symbols": [{"literal":"#"}, "_", "comment"]},
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": ["comment$ebnf$1", /[^]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "comment", "symbols": ["comment$ebnf$1"], "postprocess": d => d[0].join("")},
    {"name": "prompt_config$string$1", "symbols": [{"literal":"<"}, {"literal":"P"}, {"literal":"R"}, {"literal":"O"}, {"literal":"M"}, {"literal":"P"}, {"literal":"T"}, {"literal":"C"}, {"literal":"O"}, {"literal":"N"}, {"literal":"F"}, {"literal":"I"}, {"literal":"G"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "prompt_config$string$2", "symbols": [{"literal":"<"}, {"literal":"/"}, {"literal":"P"}, {"literal":"R"}, {"literal":"O"}, {"literal":"M"}, {"literal":"P"}, {"literal":"T"}, {"literal":"C"}, {"literal":"O"}, {"literal":"N"}, {"literal":"F"}, {"literal":"I"}, {"literal":"G"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "prompt_config", "symbols": ["prompt_config$string$1", "p_configs", "prompt_config$string$2"]},
    {"name": "p_configs$ebnf$1", "symbols": []},
    {"name": "p_configs$ebnf$1", "symbols": ["p_configs$ebnf$1", /[^]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "p_configs", "symbols": ["p_configs$ebnf$1"], "postprocess": d => d[0].join("")},
    {"name": "prompt$string$1", "symbols": [{"literal":"<"}, {"literal":"P"}, {"literal":"R"}, {"literal":"O"}, {"literal":"M"}, {"literal":"P"}, {"literal":"T"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "prompt$string$2", "symbols": [{"literal":"<"}, {"literal":"/"}, {"literal":"P"}, {"literal":"R"}, {"literal":"O"}, {"literal":"M"}, {"literal":"P"}, {"literal":"T"}, {"literal":">"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "prompt", "symbols": ["prompt$string$1", "prompt_section", "prompt$string$2"]},
    {"name": "prompt_section$ebnf$1", "symbols": []},
    {"name": "prompt_section$ebnf$1", "symbols": ["prompt_section$ebnf$1", /[^]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "prompt_section", "symbols": ["prompt_section$ebnf$1"], "postprocess": d => d[0].join("")}
]
  , ParserStart: "text"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
