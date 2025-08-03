/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    if(!bank.includes(endGene)) return -1;
    const allowed = ['A', 'C', 'G', 'T'];
    let queue = [[startGene,0]];
    let visited = new Set();
    while(queue.length){
        const size = queue.length;
        for(let i=0; i<size; i++){
            let [currGene, currSteps] = queue.shift();
            visited.add(currGene);
            if(currGene === endGene) return currSteps;
            for(let j=0; j<currGene.length; j++){
                for(const x of allowed){
                    let potentialGene = currGene.slice(0, j) + x + currGene.slice(j+1);
                    if(bank.includes(potentialGene) && potentialGene !== currGene && !visited.has(potentialGene)){
                        queue.push([potentialGene, currSteps+1]);
                    }
                }
            }
        }
    }
    return -1;
};