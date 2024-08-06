// You should implement your task here.

module.exports = function towelSort(matrix=[]) {
    let total = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
            matrix[i].reverse();
        }
        for (let j = 0; j < matrix[i].length; j++) {
            total.push(matrix[i][j]);
        }
    }
    return total;
};
