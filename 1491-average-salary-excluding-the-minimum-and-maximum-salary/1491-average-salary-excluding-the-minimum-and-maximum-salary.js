/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let max=Math.max(...salary);
    let min=Math.min(...salary);
    let sum=0;
    salary.splice(salary.indexOf(max),1);
    salary.splice(salary.indexOf(min),1);
    for(const x of salary){
        sum=sum+x;
    }
    return sum/salary.length;
};