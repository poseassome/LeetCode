/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let freq = new Map();
    let appendfreq = new Map();

    for(const num of nums){
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for(const num of nums){
        if(freq.get(num) === 0) continue;

        if((appendfreq.get(num) || 0) > 0){
            appendfreq.set(num, appendfreq.get(num) - 1);
            appendfreq.set(num + 1, (appendfreq.get(num + 1) || 0) + 1);
        } else if((freq.get(num + 1) || 0) > 0 && (freq.get(num + 2) || 0) > 0){
            freq.set(num + 1, freq.get(num + 1) - 1);
            freq.set(num + 2, freq.get(num + 2) - 1);
            appendfreq.set(num + 3, (appendfreq.get(num + 3) || 0) + 1);
        } else return false;

        freq.set(num, freq.get(num) - 1);
    }
    return true; 
};