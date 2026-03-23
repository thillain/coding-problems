class Grid {

    constructor([rows, cols], tankPosition = [rows = 0, cols = 0], startDir) {
        this.cols = cols;
        this.rows = rows;
        this.tankPosition = tankPosition;
        this.startDir = startDir;
        this.grid = this.generateGrid(rows, cols, tankPosition, startDir);
    }

    generateGrid(rows, cols, tankPosition, startDir) {
        let grid = Array.from({ length: rows }, () => Array(cols).fill(0));
        console.log(grid[tankPosition.rows][tankPosition.cols]);
        return grid;
    }

    dirSymbol() {
        return { UP: '^', DOWN: 'v', LEFT: '<', RIGHT: '>' };
    }

}


grid = new Grid([3, 4], [2, 3], 'RIGHT');
console.log(grid);
