/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  let sH = new Map();
  let answer = [];

  for(const x of arr){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  for(const [key, value] of sH) {
      if (value === 1) answer.push(key);
  }
  return answer[k-1] || "";
};