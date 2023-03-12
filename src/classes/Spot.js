export class Spot {
    constructor(x, y, ctx) {
        this.x = x
        this.y = y
        this.ctx = ctx
    }

    draw(wide, color1, color2, color3) {
        var grd = this.ctx.createRadialGradient(this.x, this.y, wide / 3, this.x, this.y, wide / 2);
        grd.addColorStop(0, color1);
        grd.addColorStop(0.7, color2);
        grd.addColorStop(1, color3);

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(this.x - wide / 2, this.y - wide / 2, wide, wide);
    }
}