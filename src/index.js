'use strict'

module.exports = obj => {
  if (typeof obj !== 'object') {
    throw new TypeError('Expected obj to be an object')
  }

  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'function') {
      const fn = obj[key]

      obj[key] = (...args) => {
        console.time(key)
        /* eslint-disable prefer-reflect */
        const returnValue = fn.apply(obj, args)
        console.timeEnd(key)

        return returnValue
      }
    }
  })
}
