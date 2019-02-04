//! All variables beginning with _ should not be used, nor modified.

class Game {
    constructor(canvas) {
        this.draw = new Draw(canvas);

        //* Place game content in here
        


        //! Do not change this block
        let _lastTime;
        const _callback = (_mil) => {
            if (_lastTime) {
                this.update((_mil - _lastTime) / 10);
            }
            _lastTime = _mil;
            window.requestAnimationFrame(_callback);
        }
    }

    //* Run when all assets are loaded.
    start() {
        //* Add custom behavior



        //! Do not change this line
        this._callback();
    }

    update(dt) {
        this.draw.clearScreen();

        //* Place your game logic in here
        //! Remember to multiply velocities with dt (delta-time)
    }
}