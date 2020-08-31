#!/bin/bash

yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Runtime.Core/nodejs/ ./compiler.new/node_modules/bayrell-runtime-core-nodejs/
yes | cp -rT ./lib/Runtime.Task/nodejs/ ./compiler.new/node_modules/bayrell-runtime-task-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/
yes | cp -rT ./lib/Bayrell.Bundler/nodejs/ ./compiler.new/node_modules/bayrell-bundler-nodejs/

echo "Ok"