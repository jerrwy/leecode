const fn = require('./app')
const assert = require('power-assert')


describe('two-sum', () => {
  it('should ok', () => {
    let arr = [2, 7, 11, 15], target = 9

    let res = fn(arr,target)
    assert.equal(JSON.stringify(res),JSON.stringify([0,1]))
  })

  it('should ok', () => {
    let arr = [2, 15, 7, 11], target = 9

    let res = fn(arr,target)
    assert.equal(JSON.stringify(res),JSON.stringify([0,2]))
  })
})