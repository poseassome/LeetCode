/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = '';
    const val = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const symbol = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
    while(num !== 0){
        for(let i=val.length-1; i>=0; i--){
            if(val[i] <= num){
                roman += symbol[i];
                num = num-val[i];
                break;
            }
        }
    }
    return roman;
};