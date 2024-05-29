/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    for(let i = 0 ; i < gas.length; i++){
        i = +i
        let startIndex = i
        let currentGas = 0, started = false
        for(let j = i ; ; j++){
            if(started && j === startIndex){
                return startIndex
            }
            currentGas += gas[j]
            if(currentGas < cost[j]){ 
                if(started && j > i)
                    i = j-1                                        
                else if(started && j < i){
                    return -1
                }
                break
            }
            currentGas -= cost[j]
            if(j == gas.length - 1){
                j = -1
            }
            started = true
        }
    }
    return -1
};