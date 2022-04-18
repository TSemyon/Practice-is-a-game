export default class Player {
    x = 0
    y = 0

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    init() {
        this.player = document.createElement('div')
        this.player.id = 'player'
        this.render()

        return this.player
    }

    render(){
        this.player.style.left = this.x + 'px'
        this.player.style.top = this.y + 'px'
        this.player.style.zIndex = 2
    }
}

