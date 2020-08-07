#!/bin/bash


if false; then

echo "Compiler"

./compiler/cli.js make Runtime nodejs
./compiler/cli.js make Runtime.Core nodejs
./compiler/cli.js make Bayrell.Lang nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/

fi


echo "Compiler new [1]"

./compiler.new/cli.js make Runtime nodejs
./compiler.new/cli.js make Runtime.Core nodejs
./compiler.new/cli.js make Bayrell.Lang nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/


echo "Compiler new [2]"

./compiler.new/cli.js make Runtime nodejs
./compiler.new/cli.js make Runtime.Core nodejs
./compiler.new/cli.js make Bayrell.Lang nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/


echo "Compiler new [3]"

./compiler.new/cli.js make Runtime nodejs
./compiler.new/cli.js make Runtime.Core nodejs
./compiler.new/cli.js make Bayrell.Lang nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/
