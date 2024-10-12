/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let map = {};
    for(const x of s){
        map[x] = (map[x] || 0) + 1;
    }
    let sorted = Object.keys(map).sort((a,b) => map[b]-map[a]);
    let max = (s.length+1)/2;
    if(map[sorted[0]] > max) return '';
    
    let res = [], position = 0;
    for(let i=0; i<sorted.length; i++){
        const char = sorted[i];
        let frequency = map[char];
        for(let j=0; j<frequency; j++){
            if(position >= s.length) position = 1;
            res[position] = char;
            position += 2;
        }
    }
    return res.join('');
};