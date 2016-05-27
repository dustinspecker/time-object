'use strict'
import {spy} from 'austin'
import test from 'ava'

import timeObject from '../lib/'

test('it throws TypeError if obj is not a plain object', t => {
  t.throws(timeObject, TypeError)
  t.throws(timeObject, /Expected obj to be an object/)

  const arrayThrows = () => timeObject([])
  t.throws(arrayThrows, TypeError)
  t.throws(arrayThrows, /Expected obj to be an object/)
})

test('it wraps object methods with console.time and console.timeEnd', t => {
  spy(console, 'time')
  spy(console, 'timeEnd')

  const obj = {
    value: 'hello',
    func1() {
      return this.value
    },
    func2(a, b, c) {
      return a + b + c
    }
  }

  timeObject(obj)

  t.truthy(obj.value === 'hello')

  t.truthy(obj.func1() === 'hello')
  t.truthy(console.time.callCount() === 1)
  t.truthy(console.time.calledWith('func1'))
  t.truthy(console.timeEnd.callCount() === 1)
  t.truthy(console.timeEnd.calledWith('func1'))

  t.truthy(obj.func2('b', 'y', 'e') === 'bye')
  t.truthy(console.time.callCount() === 2)
  t.truthy(console.time.calledWith('func2'))
  t.truthy(console.timeEnd.callCount() === 2)
  t.truthy(console.timeEnd.calledWith('func2'))
})
