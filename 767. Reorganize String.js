/*Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

If possible, output any possible result.  If not possible, return the empty string.

Example 1:

Input: S = "aab"
Output: "aba"
Example 2:

Input: S = "aaab"
Output: ""
Note:

S will consist of lowercase letters and have length in range [1, 500].*/

/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
  let count = {}, maxCount = 0, array = []
  for (let char of S) {
    count[char] = (count[char] || 0) + 1
    maxCount = Math.max(maxCount, count[char])
  }

  if (S.length < (maxCount * 2 - 1)) return ''

  for (let char in count) {
    array.push({
      number: count[char],
      char
    })
  }

  array.sort((a, b) => b.number - a.number)

  let ans = array[0].char.repeat(array[0].number).split(''), current = 1, delta = 2
  for (let i = 1, len = array.length; i < len; i++) {
    while (array[i].number--) {
      ans.splice(current, 0, array[i].char)
      current += delta
      if (current >= (array[0].number) * delta) {
        delta++
        current = delta - 1
      }
    }
  }
  return ans.join('')
};


"todrnphcamnomskfrhe"
