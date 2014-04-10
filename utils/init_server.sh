#!/bin/bash

# Initial script for server.


ROOT_PATH=..
VENV_NAME=isocial-venv
PATH_TO_REQUIREMENTS=dist/server/info


# Create virtualenv
virtualenv $ROOT_PATH/$VENV_NAME

# turn on venv
. $ROOT_PATH/$VENV_NAME/bin/activate

# Keeps pip in nevest version
pip install --upgrade pip

# Install pip packages in venv
pip install -r $PATH_TO_REQUIREMENTS/requirements.txt

# leave venv
deactivate