__ace_shadowed__.define("ace/mode/sparql",function(a,b,c){var d=a("pilot/oop"),e=a("ace/mode/text").Mode,f=a("ace/tokenizer").Tokenizer,g=a("ace/mode/sparql_highlight_rules").SparqlHighlightRules,h=a("ace/mode/matching_brace_outdent").MatchingBraceOutdent,i=a("ace/range").Range,j=function(){this.$tokenizer=new f((new g).getRules())};d.inherits(j,e),b.Mode=j}),__ace_shadowed__.define("ace/mode/sparql_highlight_rules",function(a,b,c){var d=a("pilot/oop"),e=a("pilot/lang"),f=a("ace/mode/text_highlight_rules").TextHighlightRules,g=function(){var a=e.arrayToMap("str|lang|langmatches|datatype|bound|sameterm|isiri|isuri|isblank|isliteral|union|a".split("|")),b=e.arrayToMap("base|BASE|prefix|PREFIX|select|SELECT|ask|ASK|construct|CONSTRUCT|describe|DESCRIBE|where|WHERE|from|FROM|reduced|REDUCED|named|NAMED|order|ORDER|limit|LIMIT|offset|OFFSET|filter|FILTER|optional|OPTIONAL|graph|GRAPH|by|BY|asc|ASC|desc|DESC".split("|")),c=e.arrayToMap("true|TRUE|false|FALSE".split("|")),d=e.arrayToMap("".split("|"));this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"sparql.iri.constant.buildin",regex:"\\<\\S+\\>"},{token:"sparql.variable",regex:"[\\?\\$][a-zA-Z]+"},{token:"sparql.prefix.constant.language",regex:"[a-zA-Z]+\\:"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:function(e){return e=="self"?"variable.language":b.hasOwnProperty(e)?"keyword":c.hasOwnProperty(e)?"constant.language":d.hasOwnProperty(e)?"variable.language":a.hasOwnProperty(e)?"support.function":e=="debugger"?"invalid.deprecated":"identifier"},regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\*|\\+|\\|\\-|\\<|\\>|=|&|\\|"},{token:"lparen",regex:"[\\<({]"},{token:"rparen",regex:"[\\>)}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".+"}]}};d.inherits(g,f),b.SparqlHighlightRules=g})