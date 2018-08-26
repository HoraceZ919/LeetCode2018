/*Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let len = s.length, hash = {}
  if (s.length !== t.length) return false
  for (let i = 0; i < len; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1
    hash[t[i]] = (hash[t[i]] || 0) - 1
  }
  for (char in hash) {
    if (hash[char] !== 0) return false
  }
  return true
}






var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let count = Array(26).fill(0)
  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97] += 1
    count[t.charCodeAt(i) - 97] -= 1
  }
  for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) return false
  }
  return true
}
