/*Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(new Interval(newInterval.start, newInterval.end))
  intervals.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start
      else return a.end - b.end
  })
  var len = intervals.length
  if (len <= 1) return intervals
  var res = [], i = 0, cur = intervals[i], start = cur.start, end = cur.end
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
