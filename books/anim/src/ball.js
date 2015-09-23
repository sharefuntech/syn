function Ball(radius, color) {
	if(radius == undefined) { radius = 30}
	if(color == undefined) { color = 'teal'}
	this.x = 0;
	this.y = 0;
	this.radius =radius;
	this.vx = 0;
	this.vy = 0;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.color = utils.parseColor(color);
	this.lineWidth = 1;
}

Ball.prototype.draw = function(context) {
	context.save(); //这里的save和下文的restore是为了保存当前canvas的绘图style，并完成绘制ball之后给予恢复
	context.translate(this.x, this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;

	context.beginPath();
	context.arc(0, 0, this.radius, 0, (Math.PI*2), true);
	context.closePath();
	context.fill();
	// context.stroke();
	context.restore();
};

Ball.prototype.getBounds = function() {
	return {
		x: this.x - this.radius,
		y: this.y - this.radius,
		width: this.radius * 2,
		height: this.radius * 2
	};
}