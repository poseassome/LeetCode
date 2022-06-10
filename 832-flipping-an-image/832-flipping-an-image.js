/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(ele => {
        return ele.reverse().map(ele => {      
                if(ele === 0) return ele = 1;
                else return ele = 0;
        })
    })
};