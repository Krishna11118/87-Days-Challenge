
var sortedArrayToBST = function (nums) {
    const dfs = (l, r) => {
        if (l > r) {
            return null;
        }
        const mid = (l + r) >> 1;
        const left = dfs(l, mid - 1);
        const right = dfs(mid + 1, r);
        return new TreeNode(nums[mid], left, right);
    };
    return dfs(0, nums.length - 1);

};