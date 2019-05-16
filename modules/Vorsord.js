class Vorsord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 8;
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
       
        var fundCords = this.getDirections(4);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

           
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 2;
            var eatgrass = new Eatgrass(this.x, this.y);
            eatArr.push(eatgrass);
            
            this.x = x;
            this.y = y;

        }
    }


    
    eat() {
   
        var fundCords = this.getDirections(1);
        var cord = fundCords[Math.floor(Math.random()*fundCords.length)]


      
        if (cord) {
            var x = cord[0];
            var y = cord[1];

           
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 2;
            var eatgrass = new Eatgrass(this.x, this.y);
            eatArr.push(eatgrass);
            
            this.x = x;
            this.y = y;

            
            this.multiply++;

           
            this.energy++;

            
            for (var i in lionArr) {
                if (x == lionArr[i].x && y == lionArr[i].y) {
                    lionArr.splice(i, 1);
                }
            }

            
            if (this.multiply == 8) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            
            this.move();
            this.energy--;
            if (this.energy < 0) {
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

           
            var vor = new Vorsord(x, y, this.index);
            vorArr.push(vor);

           
            matrix[y][x] = 5;
            this.multiply = 0; 
        } 
    }

    
    die() {
        
        matrix[this.y][this.x] = 0;

       
        for (var i in vorArr) {
            if (this.x == vorArr[i].x && this.y == vorArr[i].y) {
                vorArr.splice(i, 1);
            }
        }
    }

}