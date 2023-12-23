/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const sH = {}, list = [];
    for(let i=0; i<groupSizes.length; i++){
        const size = groupSizes[i];
        if(!sH[size]) sH[size] = [];
        sH[size].push(i);
        if(sH[size].length === size){
            list.push(sH[size]);
            sH[size] = [];
        }
    }
    return list;
};