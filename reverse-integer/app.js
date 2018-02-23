/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * Input: 123
 * Output:  321
 * 
 * Example 2:
 * 
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * 
 * Input: 120
 * Output: 21
 */

module.exports = reverse


/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  function w (y) {
      let res = '', a, b
      do{
          a = y % 10
          y = parseInt( y / 10)
          res += a
      }while(y)

      return parseInt(res) > Math.pow(2,31) - 1 ? 0 : parseInt(res)
  }
  
  if(x === 0) return 0
  return x > 0 ? w(x) : -w(-x)
};