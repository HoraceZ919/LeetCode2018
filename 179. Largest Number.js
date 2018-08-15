/*Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let res = nums.sort((a, b) => (b + '' + a) - (a + '' + b))
  //sort a - b => a < b排序,则(a, b) => (b + '' + a) - (a + '' + b) => (a + '' + b) > (b + '' + a)的排序序列
  return res[0] === 0 ? '0' : res.join('')
};
