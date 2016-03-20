/**
 * 
 */

GameObject.Direction = {
	North: 0,
	South: 180,
	East: 90,
	West: 270,
	NorthWest: 315,
	SouthWest: 225,
	SouthEast: 135,
	NorthEast: 45
}

function GameObject(x, y, width, height, image, direction) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.image = image;
	this.shape;

	this.direction = direction;

	this.isMoving = false;

	var _isActive = false;

	this.activate = function() {
		_isActive = true;
	}

	this.deactivate = function () {
		_isActive = false;
	}
}

GameObject.prototype.draw = function(stage) {
	stage.addChild(this.getShape());

}

GameObject.prototype.getShape = function () {
	if (!this.shape) {
		var bmp = this.createShape();
		this.shape = bmp;
	}

	return this.shape;
}

GameObject.prototype.createShape = function() {
	var bmp = new createjs.Bitmap(ResourceLoader.getResource(this.image));
	bmp.scaleX = this.width / bmp.image.width;
	bmp.scaleY = this.height / bmp.image.height;
	bmp.x = this.x;
	bmp.y = this.y;
	bmp.rotation = this.direction;

	/*bmp.regX = this.x + this.width / 2;
	bmp.regY = this.y + this.height / 2;*/
	return bmp;
}