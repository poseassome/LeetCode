/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const path = [];

    const isPalindrome = (left, right) => {
        while(left < right){
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    const backtrack = (start) => {
        if(start === s.length){
            res.push([...path]);
            return;
        }

        for(let end=start; end<s.length; end++){
            if(isPalindrome(start, end)){
                path.push(s.substring(start, end+1));
                backtrack(end+1);
                path.pop();
            }
        }
    }
    
    backtrack(0);
    return res;
};