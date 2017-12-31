const fn = require('./app')
const assert = require('power-assert')


describe('longest-substring-without-repeating-characters', () => {
  it('abcabcbb should be 3', () => {
    let str = 'abcabcbb'

    let res = fn(str)
    assert.equal(res,3)
  })

  it('bbbbb ok be 1', () => {
    let str = 'bbbbb'

    let res = fn(str)
    assert.equal(res,1)
  })

  it('pwwkew should be 3', () => {
    let str = 'pwwkew'

    let res = fn(str)
    assert.equal(res,3)
  })

  it('aab should be 2', () => {
    let str = 'aab'

    let res = fn(str)
    assert.equal(res,2)
  })
})