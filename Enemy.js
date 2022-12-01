export default class Enemy {
    constructor(x,y,imageNumber){
        this.x = x;
        this.y = y;
        this.width = 44; //used to locate the size of the enemy objects 
        this.height = 32;

        this.image = new Image()
        this.image.src = `images/Backup_Images/enemy${imageNumber}.png`
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(xVelocity, yVelocity){
        this.x += xVelocity;
        this.y += yVelocity;
    }
}