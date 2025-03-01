/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    if(answers.length === 1) return answers[0]+1;
    let res = 0;
    const map = {};
    for(let i=0; i<answers.length; i++){
        if(!map[answers[i]]){
            map[answers[i]] = answers[i];
            res = res + answers[i]+1;
        } else {
            map[answers[i]]--;
            if(map[answers[i]] === 0) delete map[answers[i]];
        }
    }
    return res;
};