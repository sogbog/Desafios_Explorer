import { Router } from "./router.js"
import Styling from "./styling.js"

const navBtns = document.querySelector('nav')
const style = Styling()

style.navStyle()

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universo","/pages/universe.html")
router.add("/exploracao","/pages/exploration.html")
router.add(404,"/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
window.navStyle = () => style.navStyle()

navBtns.addEventListener('click', function() {style.navStyle()})