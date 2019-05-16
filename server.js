socket = io();
grassArr = []; 
eatArr = [];
gisArr = [];
lionArr = [];
lion2Arr = [];
vorArr = [];
var Grass = require()
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
    function game(){
        for (var u in grassArr) {
            grassArr[u].mul();
        }
    
       
        for (var u in eatArr) {
            eatArr[u].eat();
        }for (var u in gisArr) {
            gisArr[u].eat();
        }
        for (var u in lionArr) {
            lionArr[u].eat();
        }
        for (var u in vorArr) {
            vorArr[u].eat();
        }
      
    }