var TrieNode = function() {
    this.children = {};
    this.isEnd = false;
};

var WordDictionary = function() {
    this.root = new TrieNode(); 
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for(const char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.isEnd = true;  
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.dfs(word, 0, this.root);
};

WordDictionary.prototype.dfs = function(word, index, node) {
    if(index === word.length) return node.isEnd;
    let char = word[index];
    if(char === "."){
        for(const child of Object.values(node.children)){
            if(this.dfs(word, index+1, child)) return true;
        }
        return false;
    } 
    else {
        if(!node.children[char]) return false;
        return this.dfs(word, index+1, node.children[char]);
    }
};
/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */