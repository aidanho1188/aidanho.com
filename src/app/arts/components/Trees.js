import {useEffect} from 'react'
import {useEventListener} from '../hooks/useEventListener'

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
    addTree()
  }

  const addTree = (x, y, l, h) => {
    trees.push(new Tree(x, y, l, h))
  }

  function resizeReset() {
    w = canvas.width = window.innerWidth
    h = canvas.height = window.innerHeight
    trees = []
    // drawBackground()
  }

  // function drawBackground() {
  //   const backgroundImage = new Image()
  //   const starsImage = new Image()
  //   starsImage.src = '/images/arts/stars.png'
  //   backgroundImage.src = '/images/arts/grass.png'
  //   backgroundImage.onload = () => {
  //     ctx.drawImage(starsImage, 0, 0, w, h)
  //     ctx.drawImage(backgroundImage, 0, 0, w, h)
  //   }
  // }

  // function drawGround() {
  //   ctx.fillStyle = `rgba(0, 0, 0, 1)`
  //   ctx.fillRect(0, h - 55, w, h)
  //   drawGrass()
  // }

  // function drawGrass() {
  //   const numLines = 5000
  //   const baseY = h - 55

  //   ctx.save() // Save the current context state
  //   for (let i = 0; i < numLines; i++) {
  //     const angle = Math.random() * 90 * (Math.PI / 180) // Calculate the angle in radians between 0 and 90 degrees
  //     const lineLength = 10 + Math.random() * 20
  //     const x = (w / numLines) * i // X-coordinate for each line

  //     ctx.save() // Save the current context state
  //     ctx.translate(x, baseY) // Move the origin to the base of the line
  //     ctx.rotate(angle) // Rotate the context

  //     ctx.beginPath()
  //     ctx.moveTo(0, 0) // Start at the origin
  //     ctx.lineTo(0, -lineLength) // Draw the line upwards
  //     ctx.strokeStyle = 'rgba(0, 0, 0, 1)' // Line color
  //     ctx.stroke()

  //     ctx.restore() // Restore the context to its original state
  //   }
  //   ctx.restore() // Restore the context to its original state

  //     const dataURL = canvas.toDataURL('image/png')
  // console.log(dataURL) // Log the data URL to the console

  // Create a download link
  // const link = document.createElement('a')
  // link.href = dataURL
  // link.download = 'grass.png' // Set the download file name
  // document.body.appendChild(link) // Append the link to the body
  // link.click() // Programmatically click the link to trigger the download
  // document.body.removeChild(link) // Remove the link from the body
  // }

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

  useEventListener('resize', init)
}
