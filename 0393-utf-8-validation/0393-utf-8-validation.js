/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    const transform = str => {
        if(str.startsWith('0')) return '';
        if(str.startsWith('10')) return 'O';
        if(str.startsWith('110')) return 'TW';
        if(str.startsWith('1110')) return 'THR';
        if(str.startsWith('11110')) return 'F';
        return 'FAIL!';
    };

    const bytes = data.map(v => v.toString(2).padStart(8, 0)).map(transform).join('');
    return bytes.replace(/(TWO)|(THROO)|(FOOO)/g, '') === '';
};