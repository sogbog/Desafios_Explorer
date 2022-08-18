import Button from "./buttons.js"

export default function Theme(){

    const rootStyle = document.documentElement.style

    function setDark() {
        rootStyle.setProperty('--Fnt-color', "#C4C4CC")
        rootStyle.setProperty('--bg-color', "#121214")
        rootStyle.setProperty("--btnBgnd-color", "#29292E")
        rootStyle.setProperty("--btnActivedBgnd-color", "#0A3442")
        Button.setDark.classList.add('hidden')
        Button.setLight.classList.remove('hidden')
    }

    function setLight() {
        rootStyle.setProperty('--Fnt-color', "#323238")
        rootStyle.setProperty('--bg-color', "white")
        rootStyle.setProperty("--btnBgnd-color", "#E1E1E6")
        rootStyle.setProperty("--btnActivedBgnd-color", "#02799D")
        Button.setLight.classList.add('hidden')
        Button.setDark.classList.remove('hidden')
    }

    return{
        setDark,
        setLight
    }
}