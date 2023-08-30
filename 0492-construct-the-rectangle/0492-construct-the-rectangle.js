/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let W = Math.floor(Math.sqrt(area));
    while(true){
        if(area%W){
            W--;
            continue;
        }
        return [area/W, W];
    }
};