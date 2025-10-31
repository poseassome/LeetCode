/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    const domArr = [];
    let operationQueue = [];
    for(let i=0; i<dominoes.length; i++){
        if(dominoes[i] !== '.') operationQueue.push([dominoes[i], i]);
        domArr.push(dominoes[i]);
    }
    
    while(operationQueue.length > 0){
        const changesMap = {};
        for(const [dir, index] of operationQueue){
            const curIndex = index + (dir === 'R' ? 1 : -1);
            if(curIndex < 0 || (curIndex >= dominoes.length)) continue;
            if(domArr[curIndex] !== '.') continue;
            if(changesMap[curIndex]){
                if(changesMap[curIndex] === dir) continue;
                domArr[curIndex] = '.';
                delete changesMap[curIndex];
            } else changesMap[curIndex] = dir;
        }

        operationQueue = [];
        Object.keys(changesMap).forEach((idx) => {
            domArr[idx] = changesMap[idx];
            operationQueue.push([changesMap[idx], Number(idx)]);
        });
    }

    return domArr.join('');
};