/**
 * Created by vasil on 2/21/16.
 */


function ObjectManager(maxItems) {
    var _items = [];

    var _maxItems = maxItems;

    this.getItems = function() {
        return _items;
    }

    this.getMaxItems = function() {
        return _maxItems;
    }
}

ObjectManager.prototype.factory = function() {
    throw new Error('Abstract!!!');
}

/**
 * return {GameObject} item
 */
ObjectManager.prototype.spawn = function() {
    var item = this.getItems().filter(function(v) {
        return v.hasOwnProperty('isActive') && v.isActive == false;
    }).shift();

    if (!item) {
        item = this.factory();
        this.getItems().push(item);
    }

    item.active()

}

