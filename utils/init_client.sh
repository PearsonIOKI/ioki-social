#!/bin/sh

# This is initial script for
# frontend's magic tools.
#
# This script is intended to be used as part of
# Jenkin's build process.


ROOT_PATH=..
PATH_TO_PIP_PACKAGES=$ROOT_PATH/npm-packages


mkdir -p client/node_modules
for f in $PATH_TO_PIP_PACKAGES/*.tgz; do tar -zxf "$f" -C client/node_modules/; done
cd client
npm rebuild