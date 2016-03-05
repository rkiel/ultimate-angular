#!/usr/bin/env bash

echo "Installing react"

cd /vagrant

echo "  creating package.json"
rm -f package.json
npm init --force >/dev/null 2>&1
