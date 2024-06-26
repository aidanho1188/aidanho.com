import {useEffect} from 'react'

// Trees from https://codepen.io/MinzCode/pen/YzpbyzK

export default function Trees() {
  let canvas, ctx, w, h, trees
  let branchChance = [0.08, 0.09, 0.1, 0.11, 0.12, 0.15, 0.3]
  let branchAngles = [20, 25, 30, 35]

  function init() {
    canvas = document.querySelector('#canvas')
    ctx = canvas.getContext('2d')
    resizeReset()
    animationLoop()
  }

  function addTree(x, y, l, h) {
    trees.push(new Tree(x, y, l, h))
  }

  function resizeReset() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
    trees = []
    drawGround()
  }

  function drawGround() {
    ctx.fillStyle = `rgba(0, 0, 0, 1)`
    ctx.fillRect(0, h - 55, w, h)
  }

  function animationLoop() {
    drawScene()
    requestAnimationFrame(animationLoop)
  }

  function drawScene() {
    trees.map((t) => {
      t.update()
      t.draw()
    })
  }

  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min
  }

  class Tree {
    constructor(x = window.innerWidth * 0.5, y = window.innerHeight - 50, l = 7, h = 7) {
      this.x = x
      this.y = y
      this.branchs = []
      this.addBranch(this.x, this.y, getRandomInt(l, h), 180)
    }
    addBranch(x, y, radius, angle) {
      this.branchs.push(new Branch(x, y, radius, angle))
    }
    draw() {
      this.branchs.map((b) => {
        b.draw()
      })
    }
    update() {
      this.branchs.map((b) => {
        b.update()

        // Add branch when conditions are true
        if (b.radius > 0 && b.progress > 0.4 && Math.random() < b.branchChance && b.branchCount < 3) {
          let newBranch = {
            x: b.x,
            y: b.y,
            radius: b.radius - 1,
            angle: b.angle + branchAngles[Math.floor(Math.random() * branchAngles.length)] * b.branchDirection,
          }
          this.addBranch(newBranch.x, newBranch.y, newBranch.radius, newBranch.angle)

          b.branchCount++
          b.branchDirection *= -1
        }
      })
    }
  }

  class Branch {
    constructor(x, y, radius, angle) {
      this.x = x
      this.y = y
      this.radius = radius
      this.angle = angle
      this.branchReset()
    }
    branchReset() {
      this.sx = this.x
      this.sy = this.y
      this.length = this.radius * 21
      this.progress = 0
      this.branchChance = branchChance[7 - this.radius]
      this.branchCount = 0
      this.branchDirection = Math.random() < 0.5 ? -1 : 1
    }
    draw() {
      if (this.progress > 1 || this.radius <= 0) return
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(0, 0, 0, 0.7)`
      ctx.fill()
      ctx.closePath()
    }
    update() {
      let radian = (Math.PI / 180) * this.angle
      this.x = this.sx + this.length * this.progress * Math.sin(radian)
      this.y = this.sy + this.length * this.progress * Math.cos(radian)

      if (this.radius == 1) {
        this.progress += 0.05
      } else {
        this.progress += 0.1 / this.radius
      }

      if (this.progress > 1) {
        this.radius -= 1
        this.angle += (Math.floor(Math.random() * 3) - 1) * 10
        this.branchReset()
      }
    }
  }

  useEffect(() => {
    init()
    addTree()
    let addedTrees = false

    const onScroll = () => {
      let documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
      let scrollableHeight = documentHeight - window.innerHeight
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      let scrollPercent = Math.floor((scrollTop / scrollableHeight) * 100)

      if (scrollPercent % 50 === 0 && !addedTrees) {
        let x1 = Math.random() * (window.innerWidth * 0.33)
        let x2 = Math.random() * (window.innerWidth * 0.33) + window.innerWidth * 0.33
        let x3 = Math.random() * (window.innerWidth * 0.33) + window.innerWidth * 0.66

        addTree(x1, window.innerHeight - 50, 4, 6)
        addTree(x2, window.innerHeight - 50, 4, 6)
        addTree(x3, window.innerHeight - 50, 4, 6)

        addedTrees = true
      } else if (scrollPercent % 50 !== 0) {
        addedTrees = false
      }

      if (scrollPercent >= 100) {
        window.removeEventListener('scroll', onScroll)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div>
      <canvas id='canvas'></canvas>
    </div>
  )
}
