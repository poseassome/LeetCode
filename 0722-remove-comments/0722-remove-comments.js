/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    const res = [];
    let isMultiLineComment = false;
    let currLine = '';

    for(const x of source){
        let i = 0;
        while(i < x.length){
            if(!isMultiLineComment){
                if(x[i] === '/' && i+1 < x.length && x[i+1] === '/') break;
                if(x[i] === '/' && i+1 < x.length && x[i+1] === '*'){
                    isMultiLineComment = true;
                    i += 2;
                    continue;
                }
                currLine += x[i];
            } else {
                if(x[i] === '*' && i+1 < x.length && x[i+1] === '/') {
                    isMultiLineComment = false;
                    i += 2;
                    continue;
                }
            }
            i++;
        }
        if(!isMultiLineComment && currLine.length > 0){
            res.push(currLine);
            currLine = '';
        }
    }
    return res;
};