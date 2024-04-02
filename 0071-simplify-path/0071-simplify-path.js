/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.split('/');
    let arr = [];
    for(const x of path){
        if(x === '..') arr.pop();
        else if(x !== '.' && x.length) arr.push(x);
    }
    return '/'+arr.join('/');
};