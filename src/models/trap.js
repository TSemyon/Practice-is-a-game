export default class Trap {
    x = 0
    y = 0
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    init() {
        this.trap = document.createElement('div')
        this.trap.id = 'trap' 
        this.render()

        return this.trap
    }
    render() {
        this.trap.style.left = this.x + 'px'
        this.trap.style.top = this.y + 'px'
        this.trap.style.zIndex = 1 
        // this.trap.innerText = 'X'
        // this.trap.style.color = 'white'
        // this.trap.style.fontSize = '100px'
        
    }
}