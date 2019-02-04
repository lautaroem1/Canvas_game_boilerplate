class Draw {
    constructor(canvas) {
        this._canvas = canvas;
        this._ctx = canvas.getContext("2d");
    }

    clearScreen() {
        this._ctx.fillStyle = "#000000";
        this._ctx.fillRect(
            0,
            0,
            this._canvas.width,
            this._canvas.width
        );
    }

    circle(circle, color = "#000000") {
        this._ctx.beginPath();
        this._ctx.arc(
            circle.pos.x,
            circle.pos.y,
            circle.r,
            0,
            2 * Math.PI
        );
        this._ctx.fillStyle = color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    rect(rect, color = "#000000") {
        this._ctx.fillStyle = color;
        this._ctx.fillRect(
            rect.left,
            rect.top,
            rect.w,
            rect.h
        );
    }
}