/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let repeat = 1, res = '';
    for(let i=0; i<word.length; i++){
        if(word[i] === word[i+1]) repeat++;
        else {
            if(repeat > 9){
                const times = repeat%9;
                while(repeat >= 9){
                    res += (9+word[i]);
                    repeat -= 9;
                }
                if(times) res += (times+word[i]);
            } else res += (repeat+word[i]);
            repeat = 1;
        }
    }
    return res;
};