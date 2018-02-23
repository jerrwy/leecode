/**
 * Given a string s, find the longest palindromic substring in s. 
 * You may assume that the maximum length of s is 1000.
 * 
 * Example:
 * 
 * Input: "babad"
 * Output: "bab"
 * 
 */

module.exports = longestPalindrome
module.exports.isPalindrome = isPalindrome

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  let substring = '', max_len = 1

  for(let i = 0; i < s.length; i++) {
    for(let j = i + max_len; j <= s.length; j++) {
      let sub = s.slice(i,j)
      if(isPalindrome(sub) && sub.length > substring.length){
        substring = sub
        max_len = sub.length
      }
    }
  }

  return substring
};

function isPalindrome(s) {
  for(let i = 0; i < s.length / 2; i++) {
    if(s[i] === s[s.length - i - 1]) continue
    return false
  }
  return true
};