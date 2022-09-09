# CSS Test

_Node.js library for testing CSS and output errors in the console with Gulp.js compatibilities_

[![License:MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/andreymatin/css-test/LICENSE)
[![npm](https://img.shields.io/npm/v/css-test-npm.svg)](https://www.npmjs.com/package/css-test-npm)


## How to install

### npm

```shell
npm i css-test-npm
```

### yarn

```shell
yarn add css-test-npm
```

## How to use

```javascript
import cssTest from 'css-test-npm'

const cssUrl = ''
cssTest(cssUrl)
```

## Gulp.js integration

```javascript
import gulp from 'gulp'
const { parallel, series, watch } = gulp

import cssTest from 'css-test-npm'

const cssUrl = ''
const cssTestRes = () => cssTest(cssUrl)

export default parallel(cssTestRes)
```

## Reference

- https://jigsaw.w3.org/css-validator/api.html


---
[MIT License](LICENSE)