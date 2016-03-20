/**
 * Created by vasil on 3/19/16.
 */
function Movable() {
    this.north = false;
    this.south = false;
    this.east =false;
    this.west = false;

}

Movable.prototype.update = function (data) {
    Movable.prototype.updateRotation.call(this, data);
}

Movable.prototype.updateRotation = function (data) {
    var codeToProperty = {
        37: 'west',
        38: 'north',
        39: 'east',
        40: 'south'
    };
    if (codeToProperty[data.key] != undefined) {
        this.oldRotation = {
            north: this.north,
            south: this.south,
            east: this.east,
            west: this.west
        };

        this[codeToProperty[data.key]] = data.action;

        if (this.north == this.oldRotation.north &&
            this.south == this.oldRotation.south &&
            this.east == this.oldRotation.east &&
            this.west == this.oldRotation.west) {
            return;
        }
    }

    if (this.north && !this.west && !this.east) {
        this.shape.rotation = GameObject.Direction.North;
    } else if (this.north && this.west) {
        this.shape.rotation = GameObject.Direction.NorthWest
    }  else if (this.north && this.east) {
        this.shape.rotation = GameObject.Direction.NorthEast;
    } else if (this.east && !this.north && !this.south) {
        this.shape.rotation = GameObject.Direction.East;
    } else if (this.west && !this.north && !this.south) {
        this.shape.rotation = GameObject.Direction.West;
    } else if (this.south && !this.west && !this.east) {
        this.shape.rotation = GameObject.Direction.South;
    } else if (this.south && this.west) {
        this.shape.rotation = GameObject.Direction.SouthWest;
    } else if (this.south && this.east) {
        this.shape.rotation = GameObject.Direction.SouthEast;
    }
}
