'use strict'
import {spy} from 'austin'
import test from 'ava'

import timeObject from '../lib/'

test('it throws TypeError if obj is not an object', t => {
  t.throws(timeObject, TypeError)
  t.throws(timeObject, /Expected obj to be an object/)
})

test('it wraps object methods with console.time and console.timeEnd', t => {
  spy(console, 'time')
  spy(console, 'timeEnd')

  const obj = {
    value: 'hello',
    func1() {
      return 'hello'
    },
    func2() {
      return 'bye'
    }
  }

  timeObject(obj)

  t.truthy(obj.value === 'hello')

  t.truthy(obj.func1() === 'hello')
  t.truthy(console.time.callCount() === 1)
  t.truthy(console.time.calledWith('func1'))
  t.truthy(console.timeEnd.callCount() === 1)
  t.truthy(console.timeEnd.calledWith('func1'))

  t.truthy(obj.func2() === 'bye')
  t.truthy(console.time.callCount() === 2)
  t.truthy(console.time.calledWith('func2'))
  t.truthy(console.timeEnd.callCount() === 2)
  t.truthy(console.timeEnd.calledWith('func2'))
})
