/**
 * 
 * Given a string, find the length of the longest substring without repeating characters.
 * 
 * Examples:
 * 
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

module.exports = lengthOfLongestSubstring


/**
 * @param {string} str
 * @return {number}
 * 
 */
function lengthOfLongestSubstring(str) {
  let max_len = 0,sub
  for (let i = 0; i < str.length; i++) {
    let j = i + 1, sub = str.substring(i,j)
    while(sub.indexOf(str[j]) < 0 && j < str.length){
      sub = str.substring(i,++j)
    }
    max_len = sub.length > max_len ? sub.length : max_len
  }
  return max_len
}