/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    let i=0; j=0; k=nums.length-1, arr=[], max=0;
    const isPrime = num => {
        for(let i=2, x=Math.sqrt(num); i<=x; i++){
            if(num%i === 0) return false;
        }
        return num > 1;
    }
    
    while(i<nums.length && j<nums.length && k>=0){
        arr.push(nums[i][j]);
        arr.push(nums[j][k]);
        i++;
        j++;
        k--;
    }
    for(let i=0; i<arr.length; i++){
        if(isPrime(arr[i]) && max<arr[i]) max = arr[i];
    }
    return max;
};