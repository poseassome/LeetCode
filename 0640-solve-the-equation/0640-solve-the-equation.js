/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    const left = evaluateExpression(equation.split("=")[0]);
    const right = evaluateExpression(equation.split("=")[1]);
    left[0] -= right[0];
    left[1] = right[1] - left[1];
    if(left[0] === 0 && left[1] === 0) return "Infinite solutions";
    else if(left[0] === 0) return "No solution"; 
    else return "x=" + Math.floor(parseInt(left[1]/left[0]));  
};

const evaluateExpression = exp => {
    const arr = exp.split(/(?=[-+])/);
    const res = new Array(2).fill(0);
    for(let i=0; i<arr.length; i++){
        const temp = arr[i];
        if(temp === '+x' || temp === 'x') res[0]++;
        else if(temp === '-x') res[0]--;
        else if(temp.includes('x')) res[0] += parseInt(temp.substring(0, temp.indexOf("x"))); 
        else res[1] += parseInt(temp);
    }
    return res;
}