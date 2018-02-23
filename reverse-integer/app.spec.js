const fn = require('./app')
const assert = require('power-assert')


describe('reverse-integer', () => {
  it('123 should be 321', () => {
    let int = 123

    let res = fn(int)
    assert.equal(res,321)
  })

  it('-123 ok be -321', () => {
    let int = -123

    let res = fn(int)
    assert.equal(res,-321)
  })

  it('120 should be 21', () => {
    let int = 120

    let res = fn(int)
    assert.equal(res,21)
  })

  it('12334456789 should be 0', () => {
    let int = 12334456789

    let res = fn(int)
    assert.equal(res,0)
  })
})