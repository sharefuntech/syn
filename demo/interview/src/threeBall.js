window.onload = function() {
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	var particles = [];
	var numParticles = 3;
	var minDist = 150;
	var springAmount = 0.001;

	for(var particle, i = 0; i < numParticles; i++) {
		particle = new Ball(10, '#ffffff');
		particle.x = Math.random() * canvas.width;
		particle.y = Math.random() * canvas.height;
		particle.vx = Math.random() * 2 - 1;
		particle.vy = Math.random() * 2 - 1;
		particles.push(particle);
	}

	// sun.x = canvas.width / 2;
	// sun.y = canvas.height / 2;
	// sun.mass = 10000;
	// particles.push(sun);

	// planet.x = canvas.width / 2 + 200;
	// planet.y = canvas.height / 2;
	// planet.vy = 7;
	// planet.mass = 1;
	// particles.push(planet);

	function spring(partA, partB) {
		var dx = partB.x - partA.x;
		var dy = partB.y - partA.y;
		var distSQ = dx * dx + dy * dy;
		var dist = Math.sqrt(distSQ);

		if (dist < minDist) {
			var alpha = 1 - dist / minDist;
			// context.strokeStyle = utils.colorToRGB('#ffffff', alpha);
			context.strokeStyle = '#fff';
			context.beginPath();
			context.moveTo(partA.x, partA.y);
			context.lineTo(partB.x, partB.y)
			context.stroke();

			var ax = dx * springAmount;
			var ay = dy * springAmount;

			partA.vx += ax;
			partA.vy += ay;
			partB.vx -= ax;
			partB.vy -= ay;
		};
	}

	function draw(particle) {
		particle.draw(context);
	}

	function move(partA, i) {
		partA.x += partA.vx;
		partA.y += partA.vy;

		// for (var partB, j = i + 1; j < numParticles; j++) {
		// 	partB = particles[j];
		// 	checkCollision(partA, partB);
		// 	gravitate(partA, partB);
		// }

		if (partA.x > canvas.width) {
			partA.x = 0;
		} else if (partA.x < 0) {
			partA.x = canvas.width;
		}

		if (partA.y > canvas.height) {
			partA.y = 0;
		} else if (partA.y < 0) {
			partA.y = canvas.height;
		}

		for (var partB, j = i + 1; j < numParticles; j++) {
			partB = particles[j];
			spring(partA,partB);
			// checkCollision(partA, partB);
			// gravitate(partA, partB);
		}

		//additon test
		// checkWalls(partA);
	}

	function gravitate(partA, partB) {
		var dx = partB.x - partA.x;
		var dy = partB.y - partA.y;
		var distSQ = dx * dx + dy * dy;
		var dist = Math.sqrt(distSQ);
		var force = partA.mass * partB.mass / distSQ;
		var ax = force * dx / dist;
		var ay = force * dy / dist;

		partA.vx += ax / partA.mass;
		partA.vy += ay / partA.mass;
		partB.vx -= ax / partB.mass;
		partB.vy -= ay / partB.mass;
	}

	function rotate(x, y, sin, cos, reverse) {
		return {
			x: (reverse) ? (x * cos + y * sin) : (x * cos - y * sin),
			y: (reverse) ? (y * cos - x * sin) : (y * cos + x * sin)
		};
	}

	function checkCollision(ball_0, ball_1) {
		var dx = ball_1.x - ball_0.x;
		var dy = ball_1.y - ball_0.y;
		var dist = Math.sqrt(dx * dx + dy * dy);

		if (dist < ball_0.radius + ball_1.radius) {
			//calculate collision angle
			var angle = Math.atan2(dy, dx);
			var sin = Math.sin(angle);
			var cos = Math.cos(angle);
			//ini ball_0 as pivot positon and rotate
			// var x0 = 0;
			// var y0 = 0;
			var pos0 = {x:0, y: 0};
			//rotate ball_1's position
			// var x1 = dx * cos + dy * sin;
			// var y1 = dy * cos - dx * sin;
			var pos1 = rotate(dx, dy, sin, cos, true);
			//rotate ball_0's velocity
			// var vx0 = ball_0.vx * cos + ball_0.vy * sin;
			// var vy0 = ball_0.vy * cos - ball_0.vx * sin;
			var vel0 = rotate(ball_0.vx, ball_0.vy, sin, cos, true);
			//rotate ball_1's velocity
			// var vx1 = ball_1.vx * cos + ball_1.vy * sin;
			// var vy1 = ball_1.vy * cos - ball_1.vx * sin;
			var vel1 = rotate(ball_1.vx, ball_1.vy, sin, cos, true);
			//collision reaction
			// var vxTotal = vx0 - vx1;
			var vxTotal = vel0.x - vel1.x;
			vel0.x = ((ball_0.mass - ball_1.mass) * vel0.x + 2 * ball_1.mass * vel1.x) / (ball_0.mass + ball_1.mass);
			vel1.x = vxTotal + vel0.x;
			//update position
			// pos0.x += vel0.x;
			// pos1.x += vel1.x
			//===avoid ball stuck together
			var absV = Math.abs(vel0.x) + Math.abs(vel1.x);
			var overLap = (ball_0.radius + ball_1.radius) - Math.abs(pos0.x - pos1.x);
			pos0.x += vel0.x / absV * overLap;
			pos1.x += vel1.x / absV * overLap;
			//rotate position back
			// var x0Final = x0 * cos - y0 * sin;
			// var y0Final = y0 * cos + x0 * sin;
			// var x1Final = x1 * cos - y1 * sin;
			// var y1Final = y1 * cos + x1 * sin;
			var pos0F = rotate(pos0.x, pos0.y, sin, cos, false);
			var pos1F = rotate(pos1.x, pos1.y, sin, cos, false);
			//adjust position to actual screen position
			ball_1.x = ball_0.x + pos1F.x;
			ball_1.y = ball_0.y + pos1F.y;
			ball_0.x = ball_0.x + pos0F.x;
			ball_0.y = ball_0.y + pos0F.y;
			//rotate velocities back
			var vel0F = rotate(vel0.x, vel0.y, sin, cos, false);
			var vel1F = rotate(vel1.x, vel1.y, sin, cos, false);

			ball_0.vx = vel0F.x;
			ball_0.vy = vel0F.y;
			ball_1.vx = vel1F.x;
			ball_1.vy = vel1F.y;
		}
	}

	function checkWalls(ball) {
		if (ball.x + ball.radius > canvas.width) {
			ball.x = canvas.width - ball.radius;
			ball.vx *= bounce;
		} else if(ball.x - ball.radius < 0) {
			ball.x = ball.radius;
			ball.vx *= bounce;
		}

		if (ball.y + ball.radius > canvas.height) {
			ball.y = canvas.height - ball.radius;
			ball.vy *= bounce;
		} else if(ball.y - ball.radius < 0) {
			ball.y = ball.radius;
			ball.vy *= bounce;
		}
	}

	(function drawFrame() {
		window.requestAnimationFrame(drawFrame, canvas);
		context.clearRect(0, 0, canvas.width, canvas.height);

		particles.forEach(move);
		particles.forEach(draw);
	}());
};