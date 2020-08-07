#!/bin/bash

pushd var
npm pack ../lib/Runtime.Core/nodejs | tail -1

popd

#npm install $(npm pack ./lib/Runtime.Core/nodejs | tail -1)