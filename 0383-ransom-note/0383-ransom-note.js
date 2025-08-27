/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let arr1 = ransomNote.split('');
    let arr2 = magazine.split('');
    for(let i=0; i<arr1.length; i++){
        let idx = arr2.indexOf(arr1[i]);
        if(idx === -1) return false;
        arr2.splice(idx, 1); 
    }
    return true;
};