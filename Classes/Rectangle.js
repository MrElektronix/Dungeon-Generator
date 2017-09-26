class Rectangle extends Object {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.color = "grey";
    this.remove = false;
	this.id = 0;
  }

draw(context) {
	context.beginPath();
	context.rect(this.x, this.y, this.width, this.height);
	context.fillStyle = this.color;
	context.fill();
	context.lineWidth = 0.5;
	context.strokeStyle = "black";
	context.stroke();
}

}
