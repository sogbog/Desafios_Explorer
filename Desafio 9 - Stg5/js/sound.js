export default function Sounds (
    forestBtn,
    rainBtn,
    coffeeShopBtn,
    fireplaceBtn
) {

    const endSound = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    forestBtn.sound = new Audio("../sounds/Floresta.wav")
    rainBtn.sound = new Audio("../sounds/Chuva.wav")
    coffeeShopBtn.sound = new Audio("../sounds/Cafeteria.wav")
    fireplaceBtn.sound = new Audio("../sounds/Lareira.wav")

    
    forestBtn.sound.loop = true
    rainBtn.sound.loop = true
    coffeeShopBtn.sound.loop = true
    fireplaceBtn.sound.loop = true

    function handleSound (Button,toStop = []) {    
        for(let bt of toStop) {
            bt.classList.remove('active')
            bt.sound.pause()
        }

        if(Button.classList.contains("active")){
            Button.classList.remove('active')
            Button.sound.pause()
        } else {
            Button.classList.add('active')
            Button.sound.play()
        }
    }

    function finishedSound () {
        endSound.play()
    }

    return{
        handleSound,
        finishedSound
    }
}
