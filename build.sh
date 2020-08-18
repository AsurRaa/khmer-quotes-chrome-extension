#!/bin/bash

build() {
    echo 'building react'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    npx react-scripts build

    mkdir -p dist
    cp -r build/* dist
    rm -rf build
    mv dist/index.html dist/index.html
}

build