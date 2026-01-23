/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    let sum = 0;
    let max = 0;
    if(nums.length < k) return false;
    
    for(const num of nums){
        sum += num;
        max = Math.max(max, num);
    }
    if(sum%k !== 0 || max > sum/k) return false;
    
    let subSetSum = sum/k;
    const visited = {};
    
    const DFS = (k, idx, sumSofar) => {
        if(k === 0) return true;
        if(sumSofar > subSetSum) return false;
        if(sumSofar === subSetSum) return DFS(k-1, 0, 0);
        
        for(let i=idx; i <nums.length; i++){
            if(!visited[i]){
                visited[i] = true;
                if(DFS(k, i+1, sumSofar+nums[i])) return true;
                visited[i] = false;
            }
        }
        return false;
    }
    
    return DFS(k, 0, 0);
};