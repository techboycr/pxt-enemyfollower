// Extension block for following behavior for MakeCode Arcade
// Created by Abraham Pineda Zelaya
// Blue Valley Tech Department

//% color="#4C97FF" weight=100 icon="\uf1ec" block="Basic Blocks"
namespace Blue_Valley {

    /**
     * This is a statement block with a parameter
     */
    //% vSpeed.defl=5
    //% block="Follow - Sprite $Villain=variables_get(mySprite)| will follow $Hero=variables_get(mySprite2) | at a speed of  %vSpeed"
    export function follow(Hero: any, Villain: any, vSpeed: number) {
        loops.forever(function () {
            if (Hero.x == Villain.x && Hero.y == Villain.y){
                Villain.vx = 0
                Villain.vy = 0
            }
            else{
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
            }
        })
    }
}
