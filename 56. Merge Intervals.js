/*Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start
      else return a.end - b.end
  })
  var len = intervals.length
  if (len <= 1) return intervals

  var res = [],  i = 0, cur = intervals[i], start = cur.start, end = cur.end
  while (++i < len) {
    cur = intervals[i]
    if (cur.start <= end) end = Math.max(end, cur.end)
      else {
        res.push(new Interval(start, end))
        start = cur.start
        end = cur.end
      }
  }
  if (start !== null) res.push(new Interval(start, end))

  return res
}
