(function(){
	var d = document,
		canvas = d.getElementById('animated-particle-background'),
		context = canvas.getContext( '2d' ),
		time = 0,
		w = 0,
		h = 0,
		cos = Math.cos,
		sin = Math.sin,
		PI = Math.PI;

	// Create gradient
  gradient = context.createLinearGradient(25,370,0,780);
  
  // Add colors
  gradient.addColorStop(0.800, 'rgba(34, 10, 10, 1.000)');
  gradient.addColorStop(0, 'rgba(134, 10, 10, 1.000)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 1.000)');
  gradient.addColorStop(0.300, 'rgba(120, 189, 12, 1.000)');
  gradient.addColorStop(1.000, 'rgba(35, 1, 4, 1.000)');
  gradient.addColorStop(0.700, 'rgba(120, 182, 12, 1.000)');
  gradient.addColorStop(1.000, 'rgba(35, 1, 4, 1.000)');  


	function resize() {
		canvas.width = w = innerWidth;
		canvas.height = h = innerHeight;
	}

	// Monitor browser resize
	addEventListener( 'resize', resize, false );

	// Initial size
	resize();
	
	// The main animation loop
	function draw() {
		context.clearRect( 0, 0, w, h );
		time += .1;
		
		// The number of particles to generate
		i = 10000;
		
		while( i-- ) {
			r = ( ( w + h ) * 0.4 ) * ( sin( ( time + i ) + (i * time * 0.5) * ( .15 + ( ( sin(time*0.00002) / PI ) * .2 ) ) ) / PI );
			
			context.fillStyle = gradient;
			context.fillRect( cos(i) * r + (w/2), 
							  sin(i) * r + (h/2), 
							  1, 
							  1 );
		}
	}
	setInterval( draw, 125 );
})()

