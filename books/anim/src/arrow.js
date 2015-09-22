function Arrow() {
	this.x = 0;
	this.y = 0;
	this.color = '#ffff00';
	this.rotation = 0;
}
//通过原型申明的函数，必须在调用之前；不像函数可以变量申明自动提升
Arrow.prototype.draw = function(context) {
	context.save();
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.lineWidth = 2;
	context.fillStyle = this.color;
	context.beginPath();
	context.moveTo(-50, -25);
	context.lineTo(0, -25);
	context.lineTo(0, -50);
	context.lineTo(50, 0);
	context.lineTo(0, 50);
	context.lineTo(0, 25);
	context.lineTo(-50, 25);
	context.lineTo(-50, -25);
	context.closePath();
	context.fill();
	context.stroke();
	context.restore();
};
