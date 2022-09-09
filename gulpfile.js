import gulp from 'gulp'
const { parallel } = gulp

import cssTest from './index.js'

const url = '';
const cssTestRes = () =>
  cssTest(url)

export default parallel(cssTestRes)

