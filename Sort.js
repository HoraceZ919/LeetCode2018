
function arraySwap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]]
}

function bubbleSort(array) {
  var len = array.length
  for (var i = 0; i < len - 1; i++) {
    swaped = false
    for (var j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        arraySwap(array, j, j + 1)
        swaped = true
      }
    }
    if (!swaped) return array
  }
  return array
}

function selectSort(array) {
  var len = array.length, minIndex = 0
  for (var i = 0; i < len; i++) {
    for (var j = i; j < len; j++) {
      if (array[j] < array[minIndex]) minIndex = j
    }
  arraySwap(array, i, minIndex)
  }
  return array
}

function insertSort(array) {
  var len = array.length, temp
  for (var i = 1, j; i < len; i++) {
    temp = array[i]
    j = i - 1
    while(j >= 0 && temp < array[j]) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = temp
  }
  return array
}

function shellSort(array) {
  var len = array.length, gap = parseInt(len/2), i, j, temp
  while(gap > 0) {
    for (var i = gap; i < len; i++) {
      temp = array[i]
      j = i - gap
      while(j >= 0 && temp < array[j]) {
        array[j + gap] = array[j]
        j = j - gap
      }
      array[j + gap] = temp
    }
    gap = parseInt(gap/2)
  }
  return array
}

function mergeSort(array) {
  var len = array.length, mid = parseInt(len/2), left = array.slice(0, mid), right = array.slice(mid)
  if (array.length === 1) return array
  return merge(mergeSort(left), mergeSort(right))
  function merge(left, right) {
    var res = [], i = 0, j = 0
    while(i < left.length || j < right.length) {
      leftNum = left[i] || Infinity, rightNum = right[j] || Infinity 
      if (leftNum < rightNum) {
        res.push(leftNum)
        i++
      } else {
        res.push(rightNum)
        j++
      }
    }
    return res
  }
}
