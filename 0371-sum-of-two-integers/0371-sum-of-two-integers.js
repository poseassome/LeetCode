/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry;
    while(b){
        /* 비트 연산자(&) : 두 개의 피연산자의 각 자리마다 대응하는 비트가 모두 1일 경우 1을 반환 */
        carry = a&b;
        /* 비트 연산자(^) : 대응되는 비트가 서로 다르면 1을 반환, 같으면 0을 반환 */
        a ^= b;
        /* 왼쪽 시프트(<<) : 첫 번째 피연산자를 명시된 비트 수(32의 나머지)만큼 왼쪽으로 이동 */
        b = carry << 1;
    }
    return a;
};