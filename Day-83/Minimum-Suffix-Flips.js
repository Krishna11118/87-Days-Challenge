var minFlips = function(target) {
    let count = 0
    for(let i=0;i<target.length;i++){
        if(target[i] == '0') continue
        while(i < target.length && target[i] == '1'){
            i++
        }
        count++
    }
    return target[target.length-1] == '1' ? 2 * count - 1 : 2 * count
};