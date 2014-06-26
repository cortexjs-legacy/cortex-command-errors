# cortex-command-errors [![NPM version](https://badge.fury.io/js/cortex-command-errors.svg)](http://badge.fury.io/js/cortex-command-errors) [![Build Status](https://travis-ci.org/cortexjs/cortex-command-errors.svg?branch=master)](https://travis-ci.org/cortexjs/cortex-command-errors) [![Dependency Status](https://gemnasium.com/cortexjs/cortex-command-errors.svg)](https://gemnasium.com/cortexjs/cortex-command-errors)

<!-- description -->

## Install

```bash
$ npm install cortex-command-errors --save
```

## Usage

```js
var handler = require('cortex-command-errors')(options);

something.on('error', handler);
```

## options

- logger: {Object}
- profile: {Object}
- harmony: {Boolean} if true, fatal errors will only write to error logs rather than kill the process.

## License

MIT
<!-- do not want to make nodeinit to complicated, you can edit this whenever you want. -->