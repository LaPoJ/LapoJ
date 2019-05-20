const expect = require('chai').expect
const { add } = require('../index')

describe('test-add', () => {
  it('两数相加应该返回其和', () => {
    expect(add(0, 1)).to.equal(1)
    expect(add(0, 2)).to.equal(2)
    expect(add(0, 0)).to.equal(0)
    expect(add(-3, 3)).to.equal(0)
    expect(add(-2, 3)).to.equal(1)
    expect(add(-4, 3)).to.equal(-1)

    // expect(add(2412534135675412346, 16378126348141298374123417982)).to.equal(7)
  })
  it('should return NaN when param invalid', () => {
    expect(isNaN(add(0, undefined))).to.equal(true)
    expect(isNaN(add(null, undefined))).to.equal(true)
    expect(isNaN(add({}, undefined))).to.equal(true)
  })
  it('两个字符串相加，应该返回其转换类型后的和', () => {
    expect(add('11', '22')).to.equal(33)
  })
})