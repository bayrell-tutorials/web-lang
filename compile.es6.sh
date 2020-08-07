#!/bin/bash

if false; then

./compiler.new/cli.js make Runtime es6
./compiler.new/cli.js make Runtime.Core es6
./compiler.new/cli.js make Bayrell.Lang es6

else

./compiler/cli.js make Runtime es6
./compiler/cli.js make Runtime.Core es6
./compiler/cli.js make Bayrell.Lang es6

fi

