/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    let arr = preorder.split(",");
    let slot = 1;
    for(const val of arr ){
        slot--;
        if(slot < 0) return false;
        if(val !== '#') slot += 2;
    }
    return slot === 0;
};