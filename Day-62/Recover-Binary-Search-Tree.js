
var recoverTree = function (root) {
    
    let prev = null;
    let first = null;
    let second = null;
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.left);
        if (prev && prev.val > root.val) {
            if (!first) {
                first = prev;
            }
            second = root;
        }
        prev = root;
        dfs(root.right);
    }

    dfs(root);
    const t = first.val;
    first.val = second.val;
    second.val = t;

};