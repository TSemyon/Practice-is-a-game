import Player from "./player"
import Enemy from "./enemy"
import Trap from "./trap"
import Life from "./life"

export default class Game {
    field = null
    player = null
    enemy = null

    constructor(field) {
        this.field = field
    }
    init() {
        const player = new Player(0, 0)
        this.player = player
        const enemy = new Enemy(700, 700)
        this.enemy = enemy

        const random = Math.round(Math.random() * (700 - 0) / 100 + 0) * 100
        const trap = new Trap(random,random)
        this.trap = trap

        const life = new Life(0, 0)
        this.life = life
        
       
        this.render()
        this.playerMove()
        this.enemyMove() 
        this.jumpRandomeAngle()
        this.jumpCounterAngle()
        this.jumpToAngle()
     
        
    }

    render() {
        this.field.append(this.player.init()) 
        this.field.append(this.enemy.init())
        this.field.append(this.trap.init())
        this.field.append(this.life.init())
    }

    playerMove() {
        document.body.addEventListener('keypress', event => {
            if(event.key === 'w' && this.player.y > 0){
                this.player.y -= 100
            }
            if(event.key === 's' && this.player.y < 700){
                this.player.y += 100
            }
            if(event.key === 'd' && this.player.x < 700){
                this.player.x += 100
            }
            if(event.key === 'a' && this.player.x > 0){
                this.player.x -= 100
            }
            this.player.render()
            this.destrEnemy()
            this.playerOnTrap()
            
            
            console.log(this.trap.x)
            // console.log(this.player.y)
            // console.log(this.enemy.x)
            // console.log(this.player)
            // console.log(this.player.player.style.left)
        })
    }
   
    enemyMove() {
        // console.log(this.enemy) // это объект enemy
        // console.log(enemy) // это div enemy
       let timerId = setInterval(() => { 
            if(this.player.y - this.enemy.y <= 300 && this.player.y - this.enemy.y >= -300 &&
                this.player.x - this.enemy.x <= 300 && this.player.x - this.enemy.x >= -300){
                    if(this.player.y - this.enemy.y > 0){
                        this.enemy.y = this.enemy.y + 100
                    }
                    if(this.player.y - this.enemy.y < 0){
                        this.enemy.y = this.enemy.y - 100
                    }
                    if(this.player.x - this.enemy.x > 0){
                        this.enemy.x = this.enemy.x + 100
                    }
                    if(this.player.x - this.enemy.x < 0){
                        this.enemy.x = this.enemy.x - 100
                    }
                    this.enemy.render()
                    this.lose()
                    this.enemyOnTrap()
                   
               
                    // enemy.style.zIndex = 2
                    // player.style.zIndex = 1   
                } 
        }, 500)
    }

    destrEnemy() {
        if(this.player.x === this.enemy.x && this.player.y === this.enemy.y){
            this.enemy.x = Math.round(Math.random() * (700 - 0) / 100 + 0) * 100
            this.enemy.y = Math.round(Math.random() * (700 - 0) / 100 + 0) * 100
            this.enemy.render()
            // clearInterval(timerId)
            // enemyMove()
        }
    }

    lose() {
        if(this.player.x === this.enemy.x && this.player.y === this.enemy.y){
            alert('Поражение')
            // field.innerHTML = ''
            this.player.x = 0
            this.player.y = 0
            this.player.render()

            this.enemy.x = 700
            this.enemy.y = 700
            this.enemy.render()
        }  
    }
    
    jumpRandomeAngle() {
        document.body.addEventListener('keypress', event => {
            if(event.key === ' ' ){
                if(this.player.x === 200 && this.player.y === 200 || this.player.x === 200 && this.player.y === 500 || this.player.x === 500 && this.player.y === 200 || this.player.x === 500 && this.player.y === 500){
                    const poss = [0, 700]
                    const randomX = Math.floor(Math.random() * poss.length)
                    const randomY = Math.floor(Math.random() * poss.length)
                    
                    this.player.x = poss[randomX]
                    this.player.y = poss[randomY]
                    this.player.render()
                }
            }
        })
    }

    jumpCounterAngle() {
        document.body.addEventListener('keypress', event => {
            if (event.key === ' '){
                if(this.player.x <= 200 && this.player.y <= 200){
                    this.player.x = this.player.x + (700 - this.player.x)
                    this.player.y = 0
                    this.player.render()
                } else if (this.player.x >= 500 && this.player.y <= 200){
                    this.player.y = 0
                    this.player.x = 0
                    this.player.render()
                }
                if(this.player.x <= 200 && this.player.y >= 400){
                    this.player.x = this.player.x + (700 - this.player.x)
                    this.player.y = this.player.y + (700 - this.player.y)
                    this.player.render()
                } else if (this.player.x >= 500 && this.player.y >= 500){
                    this.player.y = this.player.y + (700 - this.player.y)
                    this.player.x = 0
                    this.player.render()
                }
            }
        })
    }

    jumpToAngle() {
        document.body.addEventListener('keypress', event => {
            if (event.key === ' '){
        
                if(this.player.x === 300 && this.player.y === 300 || this.player.x === 300 && this.player.y === 200 || this.player.x === 300 && this.player.y === 100 || this.player.x === 300 && this.player.y === 0 
                    || this.player.x === 200 && this.player.y === 300 || this.player.x === 100 && this.player.y === 300 || this.player.x === 0 && this.player.y === 300){
                    this.player.y = 0
                    this.player.x = 0
                    this.player.render()
                } 
               
                if(this.player.x === 400 && this.player.y === 300 || this.player.x === 400 && this.player.y === 200 || this.player.x === 400 && this.player.y === 100 || this.player.x === 400 && this.player.y === 0 
                    || this.player.x === 500 && this.player.y === 300 || this.player.x === 600 && this.player.y === 300 || this.player.x === 700 && this.player.y === 300){
                    this.player.x = this.player.x + (700 - this.player.x)
                    this.player.y = 0
                    this.player.render()
                } 
                if(this.player.x === 0 && this.player.y === 400 || this.player.x === 100 && this.player.y === 400 || this.player.x === 200 && this.player.y === 400 || this.player.x === 300 && this.player.y === 400 
                    || this.player.x === 300 && this.player.y === 500 || this.player.x === 300 && this.player.y === 600 || this.player.x === 300 && this.player.y === 700){
                    this.player.x = 0
                    this.player.y = this.player.y + (700 - this.player.y)
                    this.player.render()
                } 
                if(this.player.x === 700 && this.player.y === 400 || this.player.x === 600 && this.player.y === 400 || this.player.x === 500 && this.player.y === 400 || this.player.x === 400 && this.player.y === 400 
                    || this.player.x === 400 && this.player.y === 500 || this.player.x === 400 && this.player.y === 600 || this.player.x === 400 && this.player.y === 700){
                    this.player.x = this.player.x + (700 - this.player.x)
                    this.player.y = this.player.y + (700 - this.player.y)
                    this.player.render()
                } 
            }       
        })
    } 

    playerOnTrap() {
        const life = document.querySelectorAll('.life')
        if(this.player.x === this.trap.x && this.player.y === this.trap.y){
            // alert('Поражение') 
            // const life = document.querySelectorAll('.life')
                life.forEach ((item, i)  => {
                life[0].style.borderTop = '25px solid blue'
            })
            console.log(this.life)
            // this.player.x = 0
            // this.player.y = 0
            // this.player.render()м

            // this.enemy.x = 700
            // this.enemy.y = 700
            // this.enemy.render()
           
        }if(life[0].style.borderTop = '25px solid blue' && this.player.x === this.trap.x && this.player.y === this.trap.y){
            // const life = document.querySelectorAll('.life')
            life.forEach ((item, i)  => {
            life[1].style.borderTop = '25px solid blue'
            })
        }
    }

    enemyOnTrap() {
        if(this.trap.x === this.enemy.x && this.trap.y === this.enemy.y){
            this.enemy.x = 700
            this.enemy.y = 700
            this.enemy.render()
            // clearInterval(timerId)
            // enemyMove()
        }
    }
}

