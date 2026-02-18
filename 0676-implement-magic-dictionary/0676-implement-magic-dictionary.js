
var MagicDictionary = function() {
    this.dic = null;
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.dic = new Set(dictionary);
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    let isMagic = false;

    for(const word of this.dic){
        if(searchWord.length !== word.length) continue;
        for(let i=0; i<word.length; i++){
            if(searchWord[i] !== word[i] && !isMagic){
                isMagic = true;
                continue;
            }

            if(searchWord[i] !== word[i] && isMagic){
                isMagic = false;
                break;
            }
        }
        if(isMagic) break;
    }
    return isMagic;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */