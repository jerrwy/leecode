const fn = require('./app')
const createList = require('./app').createList
const assert = require('power-assert')

describe('add-two-numbers', () => {
  it('123 + 234 should ok', () => {
    let l1 = createList(123)
    let l2 = createList(234)
    let res = fn(l1,l2)
    
    assert.equal(res.val,7)
    assert.equal(res.next.val,5)
    assert.equal(res.next.next.val,3)
  })

  it('199 + 1 should ok', () => {
    let l1 = createList(199)
    let l2 = createList(1)
    let res = fn(l1,l2)
    
    assert.equal(res.val,0)
    assert.equal(res.next.val,0)
    assert.equal(res.next.next.val,2)
  })
})