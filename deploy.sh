#!/bin/bash

echo "start building"

yarn workspace server build 

echo "start db"

yarn db:create

echo "start server"

yarn workspace server node ./dist/src/server.js