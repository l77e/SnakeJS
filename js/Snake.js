class Snake {
    constructor(screenSize) {
        this.isDestroyed = false;
        this.y = 0;
        this.x = 0;
        this.blockSize = 40;
        this.speedY = 0;
        this.speedX = this.blockSize;
        this.tailLength = 4;
        this.previousPath = [];
        this.foodLocationY;
        this.foodLocationX;
        this.screenSize = screenSize

        this.refresh = function () {
            this.y = this.y + this.speedY;
            this.x = this.x + this.speedX;
        };

        this.drawIt = function () {
            strokeJoin(ROUND);
            fill(this.tailLength.tailLength / 3);
            this.refresh();

            //Only keep tailLength.length number of previous path locations
            if (this.previousPath.length > this.tailLength) {
                this.previousPath = this.previousPath.slice(1);
            }

            //Render the blocks based on the previous path for the number of tail blocks
            this.previousPath.forEach(block => {
                rect(block[0], block[1], this.blockSize, this.blockSize)
            });

            //Increase snake tail length if the snake head touches its tail then generate new food location
            if (this.foodLocationX == this.x && this.foodLocationY == this.y) {
                this.tailLength++;
                this.foodLocationX, this.foodLocationY = undefined;
            }

            //If Snake goes of the screen it returns from the other side
            if(this.x >= this.screenSize + 1){
                this.x = 0;
            } else if (this.x <= -1){
                this.x = this.screenSize;
            }
            if(this.y >= this.screenSize + 1){
                this.y = 0;
            } else if (this.y <= -1){
                this.y = this.screenSize;
            }

            this.createFood();
        };

        this.createFood = function () {
            //fill(240);
            if (this.foodLocationX == undefined || this.foodLocationY == undefined) {
                this.foodLocationX = this.randomSingleGridLocation();
                this.foodLocationY = this.randomSingleGridLocation();
            }
            rect(this.foodLocationX, this.foodLocationY, this.blockSize, this.blockSize);
        };

        this.moveUp = function () {
            snake.speedX = 0;
            snake.speedY -= this.blockSize;
        };
        this.moveDown = function () {
            snake.speedX = 0;
            snake.speedY += this.blockSize;
        };
        this.moveLeft = function () {
            snake.speedY = 0;
            snake.speedX -= this.blockSize;
        };
        this.moveRight = function () {
            snake.speedY = 0;
            snake.speedX += this.blockSize;
        };

        this.randomSingleGridLocation = function () {
            return this.roundtoNearestNum(Math.floor((Math.random() * this.screenSize - this.blockSize - 1)), this.blockSize);
        };

        this.roundtoNearestNum = function (input, toNearest) {
            return Math.ceil(input / toNearest) * toNearest;
        };
    }
}