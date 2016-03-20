/**
 * Created by vasil on 2/20/16.
 */
var ResourceLoader = (function(){

    var _loadQueue = new createjs.LoadQueue();

    return {
        setImages : function (manifest) {
            _loadQueue.loadManifest(manifest);

            return this;
        },
        setOnLoadHandler: function (handler) {
            if (typeof handler == 'function') {
                _loadQueue.on('complete', handler);
            }

            return this;
        },
       getResource: function (id) {
           return _loadQueue.getResult(id);
       }
    }

}())