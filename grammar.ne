@builtin "whitespace.ne" # `_` means arbitrary amount of whitespace


text -> tags | tags _ "\n" _ tags | _ | _ "\n" | _ "\n" text

tags -> statement | prompt_config | prompt

statement -> _ | "#" _ comment

comment -> [^]:* {% d => d[0].join("") %}

prompt_config -> "<PROMPTCONFIG>" p_configs "</PROMPTCONFIG>"

p_configs -> [^]:* {% d => d[0].join("") %}

prompt -> "<PROMPT>" prompt_section "</PROMPT>"

prompt_section -> [^]:* {% d => d[0].join("") %}


