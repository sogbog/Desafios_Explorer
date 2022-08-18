import Button from "./buttons.js"
import Sounds from "./sound.js"
import Timer from "./timer.js"

const sound = Sounds(Button.forest_ambient, Button.rain_ambient, Button.coffeeShop_ambient, Button.fireplace_ambient)
const timer = Timer()
let toStop

Button.forest_ambient.addEventListener('click', function() {
    sound.handleSound(Button.forest_ambient, toStop=[Button.rain_ambient,Button.coffeeShop_ambient,Button.fireplace_ambient])
})

Button.rain_ambient.addEventListener('click', function() {
    sound.handleSound(Button.rain_ambient, toStop=[Button.forest_ambient,Button.coffeeShop_ambient,Button.fireplace_ambient])
})

Button.coffeeShop_ambient.addEventListener('click', function() {
    sound.handleSound(Button.coffeeShop_ambient, toStop=[Button.rain_ambient,Button.forest_ambient,Button.fireplace_ambient])
})

Button.fireplace_ambient.addEventListener('click', function() {
    sound.handleSound(Button.fireplace_ambient, toStop=[Button.rain_ambient,Button.coffeeShop_ambient,Button.forest_ambient])
})

Button.play.addEventListener('click',function() {
    timer.startCountdown()
})

Button.stop.addEventListener('click',function(){
    timer.stopCountdown()
})

Button.add_minutes.addEventListener('click',function(){
    timer.addTime()
})

Button.decrease_minutes.addEventListener('click',function(){
    timer.decreaseTime()
})

