
var fib = function(n) {

    if  ( n <= 1){
        return n ;
    }
    ans = fib(n-1) + fib(n-2);
    return ans;
       
   };