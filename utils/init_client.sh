#!/bin/sh

# This is initial script for
# frontend's magic tools.
#
# This script is intended to be used as part of
# Jenkin's build process.

ROOT_PATH=.
mkdir -p client/node_modules

cd $ROOT_PATH/client
npm install