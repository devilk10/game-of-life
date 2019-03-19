let game;
let id = 0;
const generateTable = function (size) {
    let table = document.getElementById('ground');
    for (let row = 0; row < size; row++) {
        generateRows(table, size, row);
    };
    return table;
};

let generateRows = function (table, size, cellId) {
    let row = document.createElement('tr');
    for (let col = 0; col < size; col++) {
        let cell = document.createElement('td');
        cell.id = id++;
        row.appendChild(cell);
    }
    table.appendChild(row);
};

const updateValues = (game) => {
    document.getElementById("start").onclick="";
    let vals = game.getGround();
    vals.map((val,index) => game.isAlive(index) ? document.getElementById(index).className = "active" : document.getElementById(index).className = "inActive")
}

const createGame = (gameSize) => {
    game = new Game(gameSize);
    game.randomLives((Array(gameSize).fill(0).map(_ => Math.floor(Math.random()*gameSize*gameSize))));
    return generateTable(gameSize);
}

const update = () => { 
    let inProgrss = setInterval(() => updateValues(game), 50);
    setTimeout(() => clearInterval(inProgrss),15000);
};