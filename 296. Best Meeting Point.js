/*A group of two or more people wants to meet and minimize the total travel distance. 
You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. 
The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x - p1.x| + |p2.y - p1.y|.

For example, given three people living at (0,0), (0,4), and (2,2):

1 - 0 - 0 - 0 - 1
|   |   |   |   |
0 - 0 - 0 - 0 - 0
|   |   |   |   |
0 - 0 - 1 - 0 - 0
The point (0,2) is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.

Show Hint 
Show Company Tags
Show Tags
Show Similar Problems*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function(grid) {
  let rows = [], cols = []

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) {
        rows.push(x)
        cols.push(y)
      }
    }
  }

  return getMedianPoint(rows) + getMedianPoint(cols, true)

  //中位数是相遇的最近的点，求每个人到中位数的步数相加
  function getMedianPoint(array, Sort) {
    if (Sort) array.sort((a, b) => a - b)
    let beg = 0, end = array.length - 1, res = 0
    while (beg < end) {
      res += array[end--] - array[beg++]
    }
    return res
  }
}

data = [[1,0,0,0,1],[0,0,0,0,0],[0,0,1,0,0]]
