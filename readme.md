# time-object
[![NPM version](https://badge.fury.io/js/time-object.svg)](https://badge.fury.io/js/time-object)
[![Build Status](https://travis-ci.org/dustinspecker/time-object.svg?branch=master)](https://travis-ci.org/dustinspecker/time-object)
[![Coverage Status](https://img.shields.io/coveralls/dustinspecker/time-object.svg)](https://coveralls.io/r/dustinspecker/time-object?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/time-object/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/time-object)
[![Dependencies](https://david-dm.org/dustinspecker/time-object.svg)](https://david-dm.org/dustinspecker/time-object/#info=dependencies&view=table)
[![DevDependencies](https://david-dm.org/dustinspecker/time-object/dev-status.svg)](https://david-dm.org/dustinspecker/time-object/#info=devDependencies&view=table)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Wrap an object's functions such that each one logs execution time

## Install
```
npm install --save time-object
```

## Usage
```javascript
import timeObject from 'time-object'

const obj = {
  value: 'hello',
  func1() {
    return this.value
  },
  func2() {
    return 'bye'
  }
}

timeObject(obj)

obj.func1()
// func1: 0.052ms
// => 'hello'

obj.func2()
// func2: 0.052ms
// => 'bye'
```

## API
### timeObject(obj)

Wraps the functions on an object such that each one logs execution time.

#### obj

type: `object`

The object to wrap.

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
