export default class Enemy {
    x = 0
    y= 0

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    init() {
        this.enemy = document.createElement('div')
        this.enemy.id = 'enemy'
        this.render()

        return this.enemy
    }

    render() {
        this.enemy.style.left = this.x + 'px'
        this.enemy.style.top = this.y + 'px'
        this.enemy.style.zIndex = 1   
    }
}

