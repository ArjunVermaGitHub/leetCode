/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let op = new Array(ratings.length).fill(1)
    for(let i = 0; i < ratings.length; i++){
        let seqType
        if(ratings[i] > ratings[i+1]){
            seqType = 'dec'
        }
        else if(ratings[i] < ratings[i+1]){
            seqType = 'inc'
        }
        else{
            continue
        }
        let origSeqType = seqType, j
        for( j = i + 1; j < ratings.length; j++){
            if(ratings[j] < ratings[j+1]){
                seqType = 'inc'
            }
            else if(ratings[j] > ratings[j+1]){
                seqType = 'dec'
            }
            else{
                seqType='none'
            }
            if(seqType !== origSeqType){
                break
            }
        }
        for(let k = i; k < j; k++){
            if(origSeqType == 'inc'){
                op[k+1] = op[k]+1
            }
            else if(origSeqType === 'dec'){
                op[j-(k-i)-1] = Math.max(op[j-(k-i)-1], op[j-(k-i)]+1)
            }
        }
        i = j - 1
    }
    return op.reduce((a,c)=>a+c, 0)
};