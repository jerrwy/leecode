/**
 * 
 * Given an array of integers, 
 * return indices of the two numbers such that they add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * 
 * Example:
 * 
 * Given arr = [2, 7, 11, 15], target = 9,
 * Because arr[0] + arr[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 */

module.exports = twoSum3

/**
 * 解法1:暴力穷举
 * 时间复杂度 n^2
 * 空间复杂度
 */
function twoSum1(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j]
      }
    }
  }
}

/**
 * 解法2:使用hashMap减少一重遍历
 * 时间复杂度 2n
 * 空间复杂度
 */
function twoSum2(arr, target){
  let hm = {};
  for(let i = 0; i < arr.length; i++){
    hm[arr[i]] = i
  }
  for(let i = 0; i < arr.length; i++){
    let res = target - arr[i]
    if(hm[res] && hm[res] != i){
      return [i,hm[res]]
    }
  }
}

/**
 * 解法3:优化解法2,减少初始化hashMap的遍历
 * 时间复杂度 n
 * 空间复杂度
 */
function twoSum3(arr,target){
  let hm = {};
  for(let i = 0; i < arr.length; i++){
    let res = target - arr[i]
    if(hm[res] !== undefined){
      return [hm[res],i]
    }
    hm[arr[i]] = i
  }
}