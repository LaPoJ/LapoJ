const _ = require('lodash')
const validator = require('validator')

const validators = {
  required(val){ return !_.isEmpty(val) },
  range({ min, max, val }) { return !!(min <= val.length && val.length <= max) },
  isString(val) { return _.isString(val) }
}

for (const [key, val] of Object.entries(validator)){
  if (key.match(/^is/)) {
    validators[key] = val
  }
}

module.exports = (req, res, next) => {
  req.checkBody = rule => check(rule, 'body')
  req.checkQuery = rule => check(rule, 'query')
  req.checkParams = rule => check(rule, 'params')

  const check = (rules, type) => {
    for (const [fieldname, fieldVaidator] of Object.entries(rules)){
      const val = req[type][fieldname] || ''
      let pass = false
      for (const [fn, valid] of Object.entries(fieldVaidator)) {
        const msg = typeof valid === 'string' ? valid : valid.message
        let param = val

        pass = validators[fn](param)
        if (!pass) {
          return msg
        }
      }
    }
  }
  console.log('1. validate')
  next()
}