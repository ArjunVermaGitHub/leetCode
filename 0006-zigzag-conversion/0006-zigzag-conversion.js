/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows==1)
    {
        return s
    }
    if(numRows == 2){
        let str1='', str2=''
        for(let i in s){
            i=+i
            if(i % 2 == 0)
                str1+=s[i]
            else
                str2+=s[i]
        }
        return str1+str2
    }
    let arr = [], inLine = true, index = 0, j=0
    for(let i = 0; i < numRows; i++){
        arr[i]=[]
    }
    
    for(let i = 0; i < s.length; i++){
        if(inLine){
            for(j = 0; j < arr.length && index < s.length; j++){
                arr[j][i] = s[index]
                index++
                if(j == arr.length - 1){
                    inLine = false
                    j--
                    break
                }
            }
        }
        else{
            arr[j][i] = s[index]
            index++
            j >0 && j--
            if(j == 0){
                inLine = true
            }
        }
        if(index == s.length)
            break
    }
    let op = ''
    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0; j < arr[i].length;j++){
            if(arr[i][j]){
                op+=arr[i][j]
            }
        }
    }
    return op
};