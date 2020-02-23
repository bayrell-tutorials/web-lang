#!/bin/bash

#./compiler/cli.js make Runtime nodejs
#./compiler/cli.js make Bayrell.Lang nodejs

#./compiler/cli.js make Runtime nodejs
#./compiler/cli.js make Bayrell.Lang nodejs

yes | cp -rT ./app/src/Runtime/nodejs/ ./compiler/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./app/src/Bayrell.Lang/nodejs/ ./compiler/node_modules/bayrell-lang-nodejs/
#yes | cp -rT ./app/src/Runtime/nodejs/ ./compiler/node_modules/bayrell-runtime-nodejs/
#yes | cp -rT ./app/src/Bayrell.Lang/nodejs/ ./compiler/node_modules/bayrell-lang-nodejs/

#./compiler.new/cli.new.js make Runtime nodejs
#./compiler.new/cli.new.js make Bayrell.Lang nodejs


#yes | cp -rT ./app/src/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
#yes | cp -rT ./app/src/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/

#./compiler.new/cli.new.js make Runtime nodejs
#./compiler.new/cli.new.js make Bayrell.Lang nodejs


