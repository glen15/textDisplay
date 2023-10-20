#!/bin/bash

# Find the process ID and kill it, but continue even if the command fails
pkill -f "node server.js" || true
