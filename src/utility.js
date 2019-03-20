trim = list => list.filter(l => l);

sideElems = (list, x) => [list[x - 1], list[x + 1]];

bottomRow = (list, x) => list ? [list[x]].concat(sideElems(list, x)) : [];

topRow = (list, x) => list ? [list[x]].concat(sideElems(list, x)) : [];

neighbours = (list, x, height) => {
    let temp = list.slice();
    let chunk = new Array(height).fill().map(ele => temp.splice(0, height));
    let lineNumber = Math.floor(x / height);
    let index = x % height;

    return trim(sideElems(chunk[lineNumber], index)
        .concat(bottomRow(chunk[lineNumber + 1], index))
        .concat(topRow(chunk[lineNumber - 1], index)));
};

// module.exports = neighbours;