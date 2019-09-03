// Here are the different types of blocks
// supported by MakeCode

//% color="#4C97FF"
namespace follower {

    /**
     * This is a statement block with a parameter
     */
    //% block
    export function follow(Hero: Sprite, Villain: Sprite, vSpeed: number) {
        if (Hero.x > Villain.x) {
            Villain.vx = vSpeed

            game.splash("Hero.x")
        } else {
            Villain.vx = -1 * vSpeed
        }
        if (Hero.y > Villain.y) {
            Villain.vy = vSpeed
        } else {
            Villain.vy = -1 * vSpeed
        }
    }


    /**
     * This is an event handler block
     */
    //% block="on event"
    export function onEvent(handler: () => void) {

    }
}
