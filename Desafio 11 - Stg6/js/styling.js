export default function Styling(){
    const homeNav = document.querySelector('#homeNav')
    const explorationNav = document.querySelector('#explorationNav')
    const universeNav = document.querySelector('#universeNav')
    
    function navStyle () {
        var path = window.location.pathname

        if(path == "/"){
            homeNav.classList.add('selected')
            explorationNav.classList.remove('selected')
            universeNav.classList.remove('selected')
        }
    
        if(path == "/exploracao"){
            homeNav.classList.remove('selected')
            explorationNav.classList.add('selected')
            universeNav.classList.remove('selected')
        }
    
        if(path == "/universo"){
            homeNav.classList.remove('selected')
            explorationNav.classList.remove('selected')
            universeNav.classList.add('selected')
        }
    }

    return{
        navStyle
    }
}