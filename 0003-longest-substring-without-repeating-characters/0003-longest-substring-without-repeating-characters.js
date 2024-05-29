/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s)
        return 0
    let longest = s[0], current='', set = new Set(s[0]), j
    for(let i = 0; i < s.length; i++){
        for(j = i+1; j < s.length; j++){
            if(!set.has(s[j])){
                set.add(s[j])
                longest = longest.length > s.slice(i,j+1).length ? longest : s.slice(i,j+1)
            }
            else{
                set.delete(s[i])
                let newI = i+s.slice(i,j).lastIndexOf(s[j])+1
                while(i < newI){
                    set.delete(s[i])
                    i++
                }
                set.add(s[j])
                // j--
                // if(j < i)
                //     j=i
            }
            current = s.slice(i,j+1)
        }
        if(j == s.length){
            break
        }
    }
    return longest.length
};