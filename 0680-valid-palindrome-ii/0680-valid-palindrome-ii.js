/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    const valid = (s, left, right) => {
        while(left<right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    
    let left = 0, right = s.length-1;
    while(left<right){
        if(s[left] !== s[right]) return valid(s, left+1, right) || valid(s, left, right-1);
        left++;
        right--;
    }
    return true;
};