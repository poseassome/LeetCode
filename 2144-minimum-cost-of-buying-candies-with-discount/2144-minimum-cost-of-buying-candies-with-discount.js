/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b) => b-a);
    if(cost.length === 2) return cost[0]+cost[1];
    for(let i=1; i<cost.length; i+=2){
        const sum = cost[i]+cost[i-1];
        let j = i+1;
        while(j <= cost.length){
            if(cost[j] <= sum){
                cost.splice(j, 1);
                break;
            }
            j++;
        }
    }
    return cost.reduce((acc,cur) => acc+cur);
};