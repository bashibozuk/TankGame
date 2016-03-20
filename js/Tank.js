/**
 * 
 */

Tank.Default = {
	'width': 75,
	'height': 75,
	playerImage: Resources.PlayerTank,
	enemyImage: Resources.EnemyTank
}
function Tank(x, y, image, direction) {
	GameObject.call(this, x, y, Tank.Default.width, Tank.Default.height, image);
}

Tank.prototype = Object.create(GameObject.prototype);
Tank.prototype.constructor = Tank;

Tank.prototype.update = function(data){
	console.log(data);
}