/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let res = 0, maxCust = 0, cust = 0;
    for(let i=0; i<customers.length; i++){
        if(customers[i] === 'Y') cust++;
        else cust--;
        if(cust > maxCust){
            maxCust = cust;
            res = i+1;
        }
    }
    return res;
};