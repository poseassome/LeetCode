/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
    const arr = s.split('').map(el => el.charCodeAt(0));
    let str = 0, i = shifts.length-1;
    while(i >= 0){
        str += shifts[i];
        arr[i] += str;
        if(arr[i] > 122){
            const diff = Math.ceil((arr[i]-122)/26);
            arr[i] -= 26*diff;
        }
        i--;
    }
    return String.fromCharCode(...arr);
};