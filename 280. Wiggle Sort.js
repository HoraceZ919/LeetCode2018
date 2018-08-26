/*Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function arraySwap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

var wiggleSort = function(nums) {
  nums.sort((a, b) => a - b)
  if (nums.length <= 2) return
  for (var i = 2; i < nums.length; i+=2) {
    arraySwap(nums, i, i - 1)
  }
}


var wiggleSort = function(nums) {
  if (nums.length <= 1) return
  for (var i = 1; i < nums.length; i++) {
    if ((i%2 == 1 && nums[i] < nums[i - 1]) || (i % 2 == 0 && nums[i] > nums[i - 1])) arraySwap(nums, i, i - 1)
  }
}
