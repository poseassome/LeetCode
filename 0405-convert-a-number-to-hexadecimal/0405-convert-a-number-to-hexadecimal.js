/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num === 0) return '0';
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    let hexadecimal = '';
    if(num > 0){
        while(num !== 0){
            hexadecimal = hex[num%16]+hexadecimal;
            num = parseInt(num/16);
        }
    } else hexadecimal = toHex(0xffffffff - Math.abs(num) + 1);
    return hexadecimal;
};