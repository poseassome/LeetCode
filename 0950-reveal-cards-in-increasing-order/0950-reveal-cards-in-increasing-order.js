/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b) => b-a);
    let arr = [];
    for(const x of deck){
        if(arr.length < 2){
            arr.unshift(x);
            continue;
        }
        arr.unshift(arr.pop());
        arr.unshift(x);
    }
    return arr;
};