import Sounds from "./sound.js"

export default function Timer () {
    let displayMinutes = document.querySelector('.minutes')
    let minutes = Number(displayMinutes.textContent)
    let displaySeconds = document.querySelector('.seconds')
    let seconds = Number(displaySeconds.textContent)
    let timerCounting
    let initialMinute = minutes

    function startCountdown() {
        timerCounting = setTimeout(function() {
            if(minutes==0 & seconds==0){
                stopCountdown()
                Sounds().finishedSound()
            }else{
                if (seconds==0){
                    minutes--
                    displayMinutes.textContent = String(minutes).padStart(2,"0")
                    seconds = 59
                    displaySeconds.textContent = seconds
                } else{
                    seconds--
                    displaySeconds.textContent =  String(seconds).padStart(2,"0")
                } 
                
                startCountdown()
            }     
        },1000)
    }

    function stopCountdown() {
        clearTimeout(timerCounting)
        minutes = initialMinute
        displayMinutes.textContent = String(initialMinute).padStart(2,"0")
        seconds = 0
        displaySeconds.textContent = "00"
    }

    function addTime(){
        initialMinute = (initialMinute + 5)
        minutes = Number(displayMinutes.textContent) + 5
        displayMinutes.textContent = String(minutes).padStart(2,"0")
    }

    function decreaseTime(){
        if(initialMinute == 5){
            alert("Tempo mínimo de 5 minutos!")
        }else{
            initialMinute = (initialMinute - 5)
            minutes = Number(displayMinutes.textContent) - 5
            displayMinutes.textContent = String(minutes).padStart(2,"0")
        }   
    }

    return{
        startCountdown,
        stopCountdown,
        addTime,
        decreaseTime
    }
}