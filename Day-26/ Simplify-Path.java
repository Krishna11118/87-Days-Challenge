class Solution {
    public String simplifyPath(String path) {


        Deque<String> stk = new ArrayDeque<>();
        
        for (String s : path.split("/")) {
            
            if ("".equals(s) || ".".equals(s)) {
                continue;
            }
            if ("..".equals(s)) {
              a  stk.pollLast();
            } else {
                stk.offerLast(s);
            }
        }

        return "/" + String.join("/", stk);
        
    }
}