// Here are the different types of blocks
// supported by MakeCode

//% color="#4C97FF"
namespace follower {

    /**
     * This is a statement block with a parameter
     */
    //% vSpeed = 5
    //% block="Spriterr $Hero will follow $Villain at a speed of  $vSpeed"
    //% blockSetVariable=Hero
    export function follow(Hero: any, Villain: any, vSpeed: number) {
        loops.forever(function () {
            if (Hero.x > Villain.x) {
                Villain.vx = vSpeed
            } else {
                Villain.vx = -1 * vSpeed
            }
            if (Hero.y > Villain.y) {
                Villain.vy = vSpeed
            } else {
                Villain.vy = -1 * vSpeed
            }
        })
    }
}
