/**
 * 
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, 
 * except the number 0 itself.
 * 
 * 
 * Example:
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 */


module.exports = addTwoNumbers
module.exports.createList = createList
/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * input: 123
 * output: ListNode<3> -> ListNode<2> -> ListNode<1>
 * 
 * ps: tag指向最后一个节点
 */
function createList(num) {
  let node, tag, val
  do{
    val = num % 10
    num = Math.floor(num / 10)
    if(!node){
      node = new ListNode(val)
      tag = node
    }
    else{
      tag.next = new ListNode(val)
      tag = tag.next
    }
  }while(num>0)
  return node
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */
function addTwoNumbers (l1, l2) {
  let node, tag, num, carry = 0

  while (l1 || l2) {
    num = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(num / 10)

    if(!node){
      node = new ListNode(num - carry * 10)
      tag = node
    }else{
      tag.next = new ListNode(num - carry * 10)
      tag = tag.next
    }

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }

  if (carry > 0) {
    tag.next = new ListNode(carry)
  }

  return node
}