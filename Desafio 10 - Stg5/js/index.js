import Button from "./buttons.js"
import Sounds from "./sound.js"
import Timer from "./timer.js"
import Theme from "./theme.js"

const sound = Sounds(Button.forest_ambient, Button.rain_ambient, Button.coffeeShop_ambient, Button.fireplace_ambient)
const timer = Timer()
const theme = Theme()

Button.forestSlider.value = 0
Button.rainSlider.value = 0
Button.coffeeShopSlider.value = 0
Button.fireplaceSlider.value = 0

Button.forest_ambient.addEventListener('click', function() {
    sound.handleSound(Button.forest_ambient, Button.forestSlider)
})

Button.forestSlider.addEventListener('click', function() {
    sound.flagSlider()
})

Button.rain_ambient.addEventListener('click', function() {
    sound.handleSound(Button.rain_ambient, Button.rainSlider)
})

Button.rainSlider.addEventListener('click', function() {
    sound.flagSlider()
})

Button.coffeeShop_ambient.addEventListener('click', function() {
    sound.handleSound(Button.coffeeShop_ambient, Button.coffeeShopSlider)
})

Button.coffeeShopSlider.addEventListener('click', function() {
    sound.flagSlider()
})

Button.fireplace_ambient.addEventListener('click', function() {
    sound.handleSound(Button.fireplace_ambient, Button.fireplaceSlider)
})

Button.fireplaceSlider.addEventListener('click', function() {
    sound.flagSlider()
})

Button.play.addEventListener('click',function() {
    timer.checkCount()
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

Button.setDark.addEventListener('click',function(){
    theme.setDark()
})

Button.setLight.addEventListener('click',function(){
    theme.setLight()
})