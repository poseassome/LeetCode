/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let taxes = 0;
    let prev = 0;
    for(const [upper, percent] of brackets){
        const cur = Math.min(income, upper-prev);
        const tax = cur*(percent/100);
        income -= cur;
        taxes += tax;
        prev = upper;
        if(income <= 0) return taxes;
    }
};