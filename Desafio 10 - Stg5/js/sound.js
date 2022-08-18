export default function Sounds (
    forestBtn,
    rainBtn,
    coffeeShopBtn,
    fireplaceBtn,
) {

    const endSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    forestBtn.sound = new Audio("../sounds/Floresta.wav")
    rainBtn.sound = new Audio("../sounds/Chuva.wav")
    coffeeShopBtn.sound = new Audio("../sounds/Cafeteria.wav")
    fireplaceBtn.sound = new Audio("../sounds/Lareira.wav")
    let sliderclick = false
    
    forestBtn.sound.loop = true
    rainBtn.sound.loop = true
    coffeeShopBtn.sound.loop = true
    fireplaceBtn.sound.loop = true

    function handleSound (Button, Slider) {    
        
        if (sliderclick){
            if (Slider.value == 0){
                Button.sound.pause()
                Button.classList.remove('active')
                sliderclick = false
            } else{
                Button.sound.play()
                Button.classList.add('active')
                sliderclick = false
            }
        }else if(Slider.value == 50) {
            Button.sound.pause()
            Slider.value = 0
            Button.classList.remove('active')
        }else {
            Button.sound.play()
            Slider.value = 50
            Button.classList.add('active')
        }
        Button.sound.volume = (Slider.value)/100
    }

    function flagSlider (){
        sliderclick = true
    }


    function finishedSound () {
        endSound.play()
    }

    return{
        handleSound,
        finishedSound,
        flagSlider
    }
}
