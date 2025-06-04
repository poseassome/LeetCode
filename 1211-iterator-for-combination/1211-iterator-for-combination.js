/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.res = [];
    function helper(chars, start, res, temp) {
        if(temp.length === combinationLength){
            res.push(temp);
            return;
        }
        for(let i=start; i<chars.length; i++){
            temp += chars[i];
            helper(chars, i + 1, res, temp);
            temp = temp.slice(0, -1);
        }
    }
    helper(characters, 0, this.res, '');
    this.index = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    this.index++;
    return this.res[this.index - 1];
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.index < this.res.length;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */