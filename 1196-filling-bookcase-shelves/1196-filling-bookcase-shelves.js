/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function(books, shelfWidth) {
    let cache = {};
    const minHeight = (i) => {
        if(i === books.length) return 0;
        if(cache[i]) return cache[i];
        cache[i] = Infinity;
        let maxHeight = 0, availableWidth = shelfWidth;
        for(let j=i; j<books.length; j++){
            if(books[j][0] <= availableWidth) availableWidth -= books[j][0];
            else break;
            maxHeight = Math.max(books[j][1], maxHeight);
            cache[i] = Math.min(minHeight(j+1)+maxHeight, cache[i]);
        }
        return cache[i];
    }
    return minHeight(0);
};