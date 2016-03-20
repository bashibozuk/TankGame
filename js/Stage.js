/**
 * 
 */

Stage.DEFAULT_GAME_ID = 'my-game';

function Stage(canvasId, socketClient, gameID) {
	this.stage = new createjs.Stage(canvasId);
	this.socketClient = socketClient;
	this.gameID = gameID ? gameID : Stage.DEFAULT_GAME_ID;
}

Stage.prototype.onUpdate = function (e) {
	this.tank.onStageUpdate(e);

}
Stage.prototype.resize = function() {

}

Stage.prototype.init = function () {
	this.tank = new PlayerTank(this.socketClient);
	this.tank.draw(this.stage);

	this.keyHander = new KeyHandler();
	this.keyHander.initEvents();
	this.keyHander.addObserver(this.tank);

	var _this = this;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener('tick', function (e) {
		_this.onUpdate(e);
		_this.stage.update();
	});

	this.socketClient.addObserver(this.tank);
	this.socketClient.send({id: this.gameID, type: 'add_game_id' })
}