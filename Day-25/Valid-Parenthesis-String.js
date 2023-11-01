
var checkValidString = function (s) {

    let x = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        if (s.charAt(i) !== ')') {
            ++x;
        } else if (x > 0) {
            --x;
        } else {
            return false;
        }
    }
    x = 0;
    for (let i = n - 1; i >= 0; --i) {
        if (s.charAt(i) !== '(') {
            ++x;
        } else if (x > 0) {
            --x;
        } else {
            return false;
        }
    }
    return true;
};