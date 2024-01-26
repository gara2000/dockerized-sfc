#!/bin/bash

DIRNAME=$(dirname $0)
cd $DIRNAME

docker-compose build
