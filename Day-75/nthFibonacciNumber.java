 static int nthFibonacciNumber( int n){

          if (n <= 1) {
            return n;
        }

        int fibNum = 0;
        int prev1 = 0;
        int prev2 = 1;

        for (int i = 2; i <= n; i++) {
            fibNum = prev1 + prev2;
            prev1 = prev2;
            prev2 = fibNum;
        }

        return fibNum;
    }