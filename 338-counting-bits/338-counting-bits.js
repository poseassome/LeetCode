/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    for(let i=0; i<=n; i++){
        let sum = 0;
        let num = i.toString(2).split('');
        while(num.length){
            sum += Number(num[0]);
            num.shift();
        }
        arr.push(sum)
    }
    return arr;
};