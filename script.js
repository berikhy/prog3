
var side = 15;
var grassArr = []; 
var eatArr = [];
var gisArr = [];
var lionArr = [];
var lion2Arr = [];
var vorArr = [];

function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];
    
    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }
    
    for (let y = 0; y < lengthY; y++) {
    matrix.push([]);
    for (let x = 0; x < lengthX; x++) {
    let randomCount = getRandomInt(number);
    matrix[y].push(randomCount);
    }
    }
    return matrix;
    
    }
    
    let matrix = genetareMatrix(50,50,6);

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); 
    background('#acacac');

    
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                var gis = new Gishatich(x, y);
                gisArr.push(gis);
            }
            else if (matrix[y][x] == 4) {
                var lArr = new Lion(x, y);
                lionArr.push(lArr);
            }
            else if (matrix[y][x] == 5) {
                var  vorsord= new Vorsord(x, y);
                vorArr.push(vorsord);
            }
           
        }
    }
}


function drawMatrix(matrix) {
    function setup() {
        frameRate(5);
        createCanvas(matrix[0].length * side, matrix.length * side); 
        background('#acacac');
    
        
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 2) {
                    var eatgrass = new Eatgrass(x, y);
                    eatArr.push(eatgrass);
                } else if (matrix[y][x] == 1) {
                    var grass = new Grass(x, y);
                    grassArr.push(grass);
                }
                else if (matrix[y][x] == 3) {
                    var gis = new Gishatich(x, y);
                    gisArr.push(gis);
                }
                else if (matrix[y][x] == 4) {
                    var lArr = new Lion(x, y);
                    lionArr.push(lArr);
                }
                else if (matrix[y][x] == 5) {
                    var  vorsord= new Vorsord(x, y);
                    vorArr.push(vorsord);
                }
               
            }
        }
    }
    
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('#f00606');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill('blue');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill('rgb(107, 53, 22)');
                rect(j * side, i * side, side, side);
            }
        }
    }


    //aystegh on funci mijocov lusum enq serverin
    socket.on("display matrix", drawMatrix);
  
}
