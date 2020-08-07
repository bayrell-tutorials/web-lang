#!/bin/bash

if false; then

echo "Compiler"

./compiler/cli.js make Runtime nodejs
./compiler/cli.js make Runtime.Core nodejs
./compiler/cli.js make Runtime.Task nodejs
./compiler/cli.js make Bayrell.Lang nodejs
./compiler/cli.js make Bayrell.Bundler nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Runtime.Task/nodejs/ ./compiler.new/node_modules/bayrell-runtime-task-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/
yes | cp -rT ./lib/Bayrell.Bundler/nodejs/ ./compiler.new/node_modules/bayrell-bundler-nodejs/


fi


echo "Compiler new"

./compiler.new/cli.js make Runtime nodejs
./compiler.new/cli.js make Runtime.Core nodejs
./compiler.new/cli.js make Runtime.Task nodejs
./compiler.new/cli.js make Bayrell.Lang nodejs
./compiler.new/cli.js make Bayrell.Bundler nodejs

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Runtime.Task/nodejs/ ./compiler.new/node_modules/bayrell-runtime-task-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/
yes | cp -rT ./lib/Bayrell.Bundler/nodejs/ ./compiler.new/node_modules/bayrell-bundler-nodejs/

