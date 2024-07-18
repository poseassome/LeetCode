/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const obj = {}, res = [];
    if(obj[expression]) return obj[expression];
    for(let i=0; i<expression.length; i++){
        const char = expression.charAt(i);
        if(char === '+' || char === '-' || char === '*'){
            const left = expression.substring(0, i);
            const right = expression.substring(i+1);
            const leftVal = diffWaysToCompute(left);
            const rightVal = diffWaysToCompute(right);
            for(const leftV of leftVal){
                for(const rightV of rightVal){
                    if(char === '+') res.push(leftV+rightV);
                    if(char === '-') res.push(leftV-rightV);
                    if(char === '*') res.push(leftV*rightV);
                }
            }
        }
    }
    if(!res.length) res.push(parseInt(expression));
    obj[expression] = res;
    return res;
};