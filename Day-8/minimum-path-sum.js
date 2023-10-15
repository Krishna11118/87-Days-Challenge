
var minPathSum = function (grid) {

    const minGrid = grid.map(row => row.map(_ => Infinity))
    const m = grid.length - 1;
    const n = grid[0].length - 1;

    function getMin(x, y) {

        let right = Infinity;
        let down = Infinity;

        if (x === m && y === n) {
            return grid[x][y]
        }

        if (minGrid[x][y] !== Infinity) {
            return minGrid[x][y]
        }
        if (x !== m) {
            right = getMin(x + 1, y)
        }
        if (y !== n) {
            down = getMin(x, y + 1)
        }
        minGrid[x][y] = Math.min(right, down) + grid[x][y]
        return minGrid[x][y]

    }

    return getMin(0, 0)

};