/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKOr = function(nums, k) {
    let Kor = 0;
    for(let i=0; i<31; i++){
        let cnt = 0;
        for(const x of nums){
            if((2**i&x) === 2**i) cnt++;
        }
        if(cnt >= k) Kor |= 2**i;
    }
    return Kor;
};