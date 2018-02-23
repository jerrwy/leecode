const fn = require('./app')
const isPalindrome = require('./app').isPalindrome
const assert = require('power-assert')

describe('longest-palindromic-substring', () => {
  it('test isPalindrome function', () => {
    assert.equal(isPalindrome('aba'),true)
    assert.equal(isPalindrome('aa'),true)
    assert.equal(isPalindrome('abca'),false)
  })

  it('abcdcbaffde should abcdcba', () => {
    let str = 'abcdcbaffde'
    let res = fn(str)
    
    assert.equal(res,'abcdcba')
  })
})