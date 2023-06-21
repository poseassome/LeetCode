/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    num = num.toString().split('');
    let odd = [], even = [], result = [];
    for(let i=0; i<num.length; i++){
        if(num[i]%2 === 0) even.push(num[i]);
        else odd.push(num[i]);
    }
    odd.sort((a,b) => a-b);
    even.sort((a,b) => a-b);
    for(let i=0; i<num.length; i++){
        if(num[i]%2 === 0){
            result.push(even[even.length-1]);
            even.pop();
        } else {
            result.push(odd[odd.length-1]);
            odd.pop();
        }
    }
    return result.join('');
};