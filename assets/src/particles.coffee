$ ->
  canvas = $('#animated-particle-background')
  ctx    = canvas.getContext('2d')
  time   = 0
  width  = 0
  height = 0
  cos    = Math.cos
  sin    = Math.sin
  PI     = Math.PI

  # Create fill gradient
  gradient = ctx.createLinearGradient(25, 370, 0, 780)
  gradient.addColorStop 0.800, 'rgba(34, 10, 10, 1.000)'
  gradient.addColorStop 0.000, 'rgba(134, 10, 10, 1.000)'
  gradient.addColorStop 1.000, 'rgba(255, 255, 255, 1.000)'
  gradient.addColorStop 0.300, 'rgba(120, 189, 12, 1.000)'
  gradient.addColorStop 1.000, 'rgba(35, 1, 4, 1.000)'
  gradient.addColorStop 0.700, 'rgba(120, 189, 12, 1.000)'
  gradient.addColorStop 1.000, 'rgba(35, 1, 4, 1.000)'

  resize = ->
    width  = canvas.width  = innerWidth
    height = canvas.height = innerHeight
    return

  draw = ->
    ctx.clearRect 0, 0, width, height
    ctx.globalCompositeOperation = 'lighter'
    time += .1
    i = 7500 # The number of particles to generate
    while i--
      r = (width + height) * 0.4 * cos(time + i + i * time * 0.5 * (.15 + sin(time * 0.00002) / PI * .2)) / PI
      ctx.fillStyle = gradient
      ctx.fillRect cos(i) * r + width / 2, sin(i) * r + height / 2, 1, 1
    return

  
  # Event for browser resizing
  addEventListener 'resize', resize, false

  # Initialize
  resize()
  setInterval draw, 125


