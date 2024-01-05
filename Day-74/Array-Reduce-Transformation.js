var reduce = function(nums, fn, init) {
    console.log(init)
        console.log(fn)
    let accum = init;
    for (let i = 0; i < nums.length; ++i) {
        accum = fn(accum, nums[i]);
        console.log(accum)
    }
    return accum;
};
