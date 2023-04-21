/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    const [start1, end1] = event1;
    const [start2, end2] = event2;
    if(start1 <= start2){
        if(end1 >= start2) return true;
    } else {
        if(end2 >= start1) return true;
    }
    return false;
};