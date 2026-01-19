/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    const stack = [];
    for(let i=0; i<s.length; i++){
        const letter = s[i];
        if(stack.length > 0 && stack[stack.length-1][0] === letter) stack[stack.length - 1][1]++;
        else stack.push([letter, 1]);
        if(stack[stack.length-1][1] === k) stack.pop();
    }

    let res = '';
    for(const [char, cnt] of stack){
        res += char.repeat(cnt);
    }
    return res;
};