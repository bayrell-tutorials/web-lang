#!/bin/bash

pushd var
npm pack ../lib/Bayrell.Bundler/nodejs | tail -1
npm pack ../lib/Bayrell.Lang/nodejs | tail -1

popd

#npm install $(npm pack ./lib/Runtime.Core/nodejs | tail -1)