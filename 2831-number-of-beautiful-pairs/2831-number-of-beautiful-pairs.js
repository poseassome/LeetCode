/**
 * @param {number[]} nums
 * @return {number}
 */
var countBeautifulPairs = function(nums) {
    const gcd = (x, y) => {
        let min = Math.min(x, y);
        while(min >= 1){
            if(x%min === 0 && y%min === 0) return min;
            min--;
        }
    }
    
    let cnt = 0;
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(i !== j){
                const x = nums[i].toString().at(0);
                const y = nums[j].toString().at(-1);
                if(gcd(x, y) === 1) cnt++;
            }
        }
    }
    return cnt;
};