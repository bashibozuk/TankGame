/**
 * 
 */

function PlayerTank(socketClient) {
	var position = this.getInitialPosition();
	Tank.call(this, position.x, position.y, Tank.Default.playerImage, GameObject.Direction.North);
	Movable.call(this);
	Syncronizable.call(this, socketClient)

}

PlayerTank.prototype = Object.create(Tank.prototype)
PlayerTank.prototype.constructor = PlayerTank;

PlayerTank.prototype.getInitialPosition = function() {
	return {
			x: $('#stage').width() / 2 - (Tank.Default.width /2),
			y: $('#stage').height()  - Tank.Default.height
	}
}

PlayerTank.prototype.update = function(data) {
	Movable.prototype.update.call(this, data);
	Syncronizable.prototype.update.call(this, data);
}

PlayerTank.prototype.onStageUpdate = function(e) {
	if (this.north) {
		this.getShape().y -= 1;
		this.setDataForSync('shape.y', this.getShape().y)
	}
	if (this.south) {
		this.getShape().y += 1;
		this.setDataForSync('shape.y', this.getShape().y)
	}

	if (this.west) {
		this.getShape().x -= 1;
		this.setDataForSync('shape.x', this.getShape().x)
	}

	if (this.east) {
		this.getShape().x += 1;
		this.setDataForSync('shape.x', this.getShape().x)
	}

	if (this.oldRotation) {
		this.setDataForSync('shape.rotation', this.getShape().rotation);
		this.oldRotation = {};
	}

	this.write();
}

PlayerTank.prototype.write = function() {
	Syncronizable.prototype.write.call(this);
}

PlayerTank.prototype.read = function(data) {
	Syncronizable.prototype.read.call(this, data);
}

PlayerTank.prototype.update = function(data) {
	Movable.prototype.update.call(this, data);
	Syncronizable.prototype.update.call(this, data);
}

PlayerTank.prototype.applySync = function(key, data) {
	Syncronizable.prototype.applySync.call(this, key, data);
}

PlayerTank.prototype.getSyncID = function () {
	return Resources.PlayerTank;
}

PlayerTank.prototype.getGameID = function () {
	return Stage.DEFAULT_GAME_ID;
}

PlayerTank.prototype.onShapeX = function(data) {
	this.shape.x = parseFloat(data);
}

PlayerTank.prototype.onShapeY = function(data) {
	this.shape.y = parseFloat(data);
}

PlayerTank.prototype.onShapeRotation = function(data) {
	this.shape.rotation = parseInt(data);
}