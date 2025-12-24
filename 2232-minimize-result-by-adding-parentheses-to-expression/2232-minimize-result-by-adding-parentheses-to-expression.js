/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {
    let idx = expression.indexOf('+');
    let left = idx-1;
    let right = idx+1;
    let exp = "";
    let res = Math.pow(2, 31) - 1;

    while(left >= 0){
        let mul1 = parseInt(expression.slice(0, left)) || 1;
        let sum = parseInt(expression.slice(left, idx)) + parseInt(expression.slice(idx, right + 1));
        let mul2 = parseInt(expression.slice(right + 1)) || 1;

        if(mul1*sum*mul2 < res ){
            res = mul1 * sum * mul2;
            exp = expression.slice(0, left) + "(" + expression.slice(left, right + 1) + ")" + expression.slice(right + 1);
        }
        right++;
        if(right > expression.length-1){
            right = idx + 1;
            left--;
        }
    }
    return exp;
};