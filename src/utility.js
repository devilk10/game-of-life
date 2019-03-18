sideElems = (list, x) => [list[x - 1], list[x + 1]];

bottomRow = (list, x, height) => [list[x + height]].concat(sideElems(list, x + height));

topRow = (list, x, height) => [list[x - height]].concat(sideElems(list, x - height));

neighbours = (list, x, height) => sideElems(list, x).concat(bottomRow(list, x, height).concat(topRow(list, x, height)));

module.exports = neighbours;