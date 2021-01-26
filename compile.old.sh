#!/bin/bash

echo "Compiler"

bayrell-lang-nodejs make Runtime nodejs
bayrell-lang-nodejs make Bayrell.Lang nodejs
yes | cp -rT ./lib/Runtime/nodejs/ ./compiler.new/node_modules/bayrell-runtime-nodejs/
yes | cp -rT ./lib/Bayrell.Lang/nodejs/ ./compiler.new/node_modules/bayrell-lang-nodejs/

