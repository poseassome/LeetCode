/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    num = num.toString().split('');
    let temp = num.slice();
    temp.sort((a, b) => b-a);
    for(let i=0; i<temp.length; i++){
        if(temp[i] > num[i]){
            let x = num.lastIndexOf(temp[i]);
            [num[x], num[i]] = [num[i], num[x]];
            break;
        }
    }
    return +num.join('');
};