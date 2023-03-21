/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map = {};
    for(let i=0; i<list1.length; i++){
        const idx = list2.indexOf(list1[i]);
        if(idx > -1){
            if(map[idx+i]) map[idx+i].push(list1[i]);
            else map[idx+i] = [list1[i]];
        }
    }
    return Object.values(map)[0];
};



