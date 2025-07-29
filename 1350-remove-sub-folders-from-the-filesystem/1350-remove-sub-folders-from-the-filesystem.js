/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    const res = [];
    for (let i=0; i<folder.length; i++){
        if(res.length === 0 || !folder[i].startsWith(res[res.length-1]+'/'))  res.push(folder[i]);
    }
    return res;
};