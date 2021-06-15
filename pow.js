/**
 Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 Example 1:
 ```
 Input: x = 2.00000, n = 10
 Output: 1024.00000
 ```

 Example 2:
 ```
 Input: x = 2.10000, n = 3
 Output: 9.26100
 ```

 Example 3:
 ```
 Input: x = 2.00000, n = -2
 Output: 0.25000
 ```
 Explanation: 2-2 = 1/22 = 1/4 = 0.25

 Constraints:
 -100.0 < x < 100.0
 -231 <= n <= 231-1
 -104 <= xn <= 104
 **/


function subPow(x, n){
    let acumHalf = 1;
    if (n === 0){
        return 1;
    }
    if (n === 1){
        return x;
    }
    acumHalf = subPow(x, Math.floor(n/2));
    if (Math.abs(n) % 2 === 0){
        return acumHalf * acumHalf;
    } else {
        return acumHalf * acumHalf * x;
    }
}
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = subPow(x, Math.abs(n));
    return n >= 0 ? res: 1/res;
};
