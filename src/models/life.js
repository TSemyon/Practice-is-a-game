export default class Life {
    x = 0
    y = 0

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    init() {
        this.menuLife = document.createElement('div')
        this.menuLife.id = 'menu-life'


        for(let i = 0; i < 3; i++) {
            this.life = document.createElement('div')
            this.life.classList.add('life')
            this.menuLife.appendChild(this.life)
            this.render()
        }


        // for (let i = 0; i < 2; i++) { 
        //     this.life = document.createElement('div')
        //     this.life.classList.add('life')
        //     this.menuLife.appendChild(this.life)
        // }

      
        // return this.life
        return this.menuLife
    }

    render() {
        this.life.style.left = this.x + 'px'
        this.life.style.top = this.y + 'px'
    }
}