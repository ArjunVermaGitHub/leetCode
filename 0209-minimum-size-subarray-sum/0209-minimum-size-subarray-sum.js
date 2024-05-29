/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0, prevSum = 0, start = 0, op = Infinity
    for (let end = 0; end <= nums.length; end++) {
        sum += nums[end]
        while (sum >= target) {
            op = Math.min(op, end - start + 1)
            sum = sum - nums[start]
            start++
        }
    }
    return op === Infinity ? 0 : op

};