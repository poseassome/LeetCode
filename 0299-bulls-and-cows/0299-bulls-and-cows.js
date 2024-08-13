/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0, cow = 0;
    const cnt = new Array(10).fill(0);
    for(let i=0; i<secret.length; i++){
        if(secret[i] === guess[i]) bull++;
        else {
            cnt[+secret[i]]++;
            if(cnt[+secret[i]] <= 0) cow++;
            cnt[+guess[i]]--;
            if(cnt[+guess[i]] >= 0) cow++;
        }
    }
    return `${bull}A${cow}B`;
};