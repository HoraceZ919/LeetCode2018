/*Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

Example 1:

Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
             (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
Note:

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
Try to solve it in linear time/space.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  function bucket(num, range, max, min) {
    return Math.floor((num - min) / range)
  }

  if (nums == null || nums.length < 2) return 0
  let max = min = nums[0], len = nums.length
  for (let i = 0; i < len; i++) {
    max = max < nums[i] ? nums[i] : max
    min = min > nums[i] ? nums[i] : min
  }
  if (max === min) return 0
  
  let bucketCount = len + 1,
  range = Math.ceil((max - min + 1) / bucketCount),
  hasNum = new Array(bucketCount),
  maxs = new Array(bucketCount),
  mins = new Array(bucketCount)

  for (let i = 0; i < len; i++) {
    bid = bucket(nums[i], range, max, min)
    mins[bid] = hasNum[bid] ? Math.min(mins[bid], nums[i]) : nums[i]
    maxs[bid] = hasNum[bid] ? Math.max(maxs[bid], nums[i]) : nums[i]
    hasNum[bid] = true
  }

  let res = 0, lastMax = maxs[0]
  for (let i = 1; i < bucketCount; i++) {
    if (hasNum[i]) {
      res = Math.max(res, mins[i] - lastMax)
      lastMax = maxs[i]
    }
  }
  return res
};
