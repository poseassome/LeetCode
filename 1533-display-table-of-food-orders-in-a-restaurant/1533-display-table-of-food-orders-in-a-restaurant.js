/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function(orders) {
    const tableSet = new Set([]);
    const itemSet = new Set([]);
    const map = new Map();

    for(const [name, table, item] of orders){
        tableSet.add(table);
        itemSet.add(item);
        const key = [table, item].join('#');
        map.set(key, (map.get(key)||0)+1);
    }
    const tables = Array.from(tableSet).sort((a, b) => +a - +b);
    const items = Array.from(itemSet).sort();
    const res = [];
    res.push(['Table', ...items]);
    for(const table of tables){
        const row = [table];
        for(const x of items){
            const key = [table, x].join('#');
            const count = map.get(key) || 0;
            row.push(String(count));
        }
        res.push(row);
    }
    return res;
};