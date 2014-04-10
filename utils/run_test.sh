#!/bin/bash

# This script runs unit tests for server and client.
#
# This script is intended to be used as part of
# Jenkin's build process.


ROOT_PATH=..
VENV_NAME=isocial-venv
PROJECT_NAME=i-social


cd $PROJECT_NAME

# Lunch venv
. $ROOT_PATH/$VENV_NAME/bin/activate

# Run tests
fab run_test

# Leave venv
deactivate