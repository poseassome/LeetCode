/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let sum = 0;
    let time = customers[0][0];
    for(let i=0; i<customers.length; i++){
        if(time < customers[i][0]) time = customers[i][0];
        sum += time - customers[i][0] + customers[i][1];
        time += customers[i][1];
    }
    return sum/customers.length;
};