
var maxProfit = function(prices) {
    
   
    let [curHold, curNotHold] = [-Infinity, 0];
    
    for(const stockPrice of prices){
        
        let [prevHold, prevNotHold] = [curHold, curNotHold];
        
        curHold = Math.max(prevHold, prevNotHold - stockPrice );
        
        curNotHold = Math.max(prevNotHold, prevHold + stockPrice );
    }
    
    return curNotHold; 
};