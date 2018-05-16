'use strict';

const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const coffee = require('rollup-plugin-coffee-script');
const uglify = require('rollup-plugin-uglify');


let promise = Promise.resolve();

const external = ['jquery', 'backbone','underscore'];
const globals = {
  '$': 'jQuery',
  'Backbone': 'backbone',
  '_': 'underscore'
};

promise = promise.then(() => del(['dist/*']));

promise = promise.then(() =>
  rollup.rollup({
    input: 'src/index.coffee',
    output: {
      globals: globals
    },
    external: external,
    plugins: [
      coffee(),
      uglify()   
    ]
  }).then(bundle => bundle.write({
    file: 'dist/index.js',
    format: 'amd',
    name: 'index',
    sourcemap: true
  }))
);

promise.catch(err => {
  console.error(err);
  console.error(err.stack);
}); 