/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let left = 0, right = 0, total = 0, cnt = [0, 0, 0];
    const containsABC = () => {
        return cnt[0] > 0 && cnt[1] > 0 && cnt[2] > 0;
    }

    while(right<s.length){
        s[right] === 'a' ? cnt[0]++ : s[right] === 'b' ? cnt[1]++ : cnt[2]++;
        while(containsABC()){
            total += s.length - right;
            s[left] === 'a' ? cnt[0]-- : s[left] === 'b' ? cnt[1]-- : cnt[2]--;
            left++;
        }
        right++;
    }
    return total;
};