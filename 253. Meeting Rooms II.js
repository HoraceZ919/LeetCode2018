/*Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.

Hide Company Tags Google Facebook
Hide Tags Heap Greedy Sort
Hide Similar Problems (H) Merge Intervals (E) Meeting Rooms
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
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
  let len = intervals.length, 
  starts = new Array(len),
  ends = new Array(len)
  for (let i = 0; i < len; i++) {
    starts[i] = intervals[i].start
    ends[i] = intervals[i].end
  }
  starts.sort((a, b) => a - b)
  ends.sort((a,b) => a- b)
  let res = 0, end = 0
  for (let i = 0; i < len; i++) {
    if (starts[i] < ends[end]) res++
      else end++
  }
  return res
}
