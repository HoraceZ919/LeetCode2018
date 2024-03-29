/*Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
determine if a person could attend all meetings.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return false.

Hide Company Tags Facebook
Hide Tags Sort
Hide Similar Problems (H) Merge Intervals (M) Meeting Rooms II*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a.start - b.start)
  let recent = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < recent.end) return false
    recent = intervals[i]
  }
  return true
}
