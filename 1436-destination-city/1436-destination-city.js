/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let city = paths[0][1];
    for(let i=0; i<paths.length; i++){
        if(paths[i][0] === city){
            city = paths[i][1];
            i = 0;
        }
    }
    return city;
};