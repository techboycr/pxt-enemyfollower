// Here are the different types of blocks
// supported by MakeCode

//% color="#4C97FF"
namespace follower {

    /**
     * This is a statement block with a parameter
     */
    //% vSpeed.defl=5
    //% block="Sprite %Hero=variables_get(mySprite)| will follow %Villain=variables_get(mySprite2) | at a speed of  %vSpeed"
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
