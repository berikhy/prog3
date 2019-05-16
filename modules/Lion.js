
// var LivingCreature = requare("./modules/LivingCreature")
class Lion {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 5;
        this.directions =[];
    }

    
    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    
    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }



    
    move() {
      
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 1;
            var grass = new Grass(this.x, this.y);
            grassArr.push(grass);
           
            this.x = x;
            this.y = y;

        }
    }


    
    eat() {
        
        var fundCords = this.getDirections(3);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)]

       
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

           
            this.x = x;
            this.y = y;

            this.multiply++;

           
            this.energy++;
            for (var i in  lion2Arr) {
                if (x ==  lion2Arr[i].x && y ==  lion2Arr[i].y) {
                    lion2Arr.splice(i, 1);
                }
            }

          
            if (this.multiply == 20) {
                this.mul()
                this.multiply = 0;
            }


        } else {
           
            this.move();
            this.energy--;
            if (this.energy < 1) { 
                this.die();
            }
        }
    }

    
    mul() {
       
        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

           
            var l = new Lion(x, y, this.index);
            lion2Arr.push(l);

           
            matrix[y][x] = 4;
            this.multiply = 0; 
        } 
    }

    
    die() {
        
        matrix[this.y][this.x] = 0;

        
        for (var i in  lion2Arr) {
            if (this.x == lion2Arr[i].x && this.y ==  lion2Arr[i].y) {
                lion2Arr.splice(i, 1);
            }
        }
    }

}