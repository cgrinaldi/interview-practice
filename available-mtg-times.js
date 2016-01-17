// Source: https://www.interviewcake.com/question/python/merging-ranges

// Given a list of tuples of meeting times, write a function that will
// condense the meeting times.


// Solution: Sort and then iterate and grow meeting times (O(NlogN))
function findMeetingTimes(times) {
  sort(times);
  var result = [];
  var i = 1;
  var curr = times[0];
  var next = times[i];
  while (next) {
    // disjoint sets
    if (next[0] > curr[1]) {
      result.push(curr);
      curr = next;
      next = times[++i];
    } else {
      // sub-sets - can skip
      if (next[1] <= curr[1]) {
        next = times[++i];
      }
      // else, need to grow current meeting time
      else {
        curr = [curr[0], next[1]];
        next = times[++i];
      }
    }
  }
  result.push(curr);
  return result;
}

function sort(arrayOfTuples) {
  arrayOfTuples.sort(function(a,b) {
    if (a[0] < b[0]) return -1;
    else if (a[0] === b[0]) return a[1] - b[1];
    else return 1;
  });
}

console.log(findMeetingTimes([[0,1],[3,5],[4,8],[10, 12],[9, 10]]));
console.log(findMeetingTimes([[0,10],[0,3]]));
console.log(findMeetingTimes([[0,6],[8,9],[5,8]]));
console.log(findMeetingTimes([[0,2],[2,3]])); // does your function merge adjacent meetings?
console.log(findMeetingTimes([[1,5],[2,3]])); // does your function handle 'subsumed by' cases?
  [(1, 10), (2, 6), (3, 5), (7, 9)]
console.log(findMeetingTimes([[1,10],[2,6],[3,5],[7,9], [100,110]]));

