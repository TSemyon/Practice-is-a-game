import Game from "./models/game"
import "./styles/style.css"

const field = document.getElementById('field')
const game = new Game(field)
game.init()

