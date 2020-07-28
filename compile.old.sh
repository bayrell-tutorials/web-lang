#!/bin/bash

./compiler/cli.js make Runtime nodejs
./compiler/cli.js make Bayrell.Lang nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/

#./compiler.new/cli.js make Runtime es6
#./compiler.new/cli.js make Bayrell.Lang es6


