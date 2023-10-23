/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let prev = 0, cur = 1;
    while(true){
        yield prev;
        [prev, cur] = [cur, prev+cur];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */