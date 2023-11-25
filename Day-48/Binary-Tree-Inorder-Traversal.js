
var inorderTraversal = function (root) {
    let ans = [];
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        ans.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return ans;

};
