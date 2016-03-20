/**
 * Created by vasil on 3/19/16.
 */

function Syncronizable(socketClient) {
    this.socketClient = socketClient;
    var _syncData = {};
    var _isDirty = false;



    this.setDataForSync = function(key, data) {
        _isDirty = true;
        _syncData[key] = data;
    }

    this.getSyncData = function() {
        return _syncData;
    }

    this.resetSyncData = function() {
        _syncData = {};
    }

    this.getIsDirty = function () {
        return _isDirty;
    }

    this.setIsDirty = function (value) {
        _isDirty = value;
    }

    this.syncInterval = 500;
}

Syncronizable.prototype.write = function() {
    if (!this.getIsDirty()) {
        return
    }
    var envelope = {
        syncID : this.getSyncID(),
        gameID: this.getGameID(),
        data: this.getSyncData(),
        type: 'data.game'
    };
    this.socketClient.send(envelope);
    this.setIsDirty(false);

}

Syncronizable.prototype.read = function(data) {

    for (var i in data) {
        this.applySync(i, data[i]);
    }
}

Syncronizable.prototype.update = function (envelope) {
    var  syncID = this.getSyncID();
    if (envelope.syncID != syncID) {
        return;
    }
    this.read(envelope.data);
}

Syncronizable.prototype.applySync = function (key, data) {

    var syncFunctionName  = 'on' + key.split('.').map(function(v) {
        return v[0].toUpperCase() + v.substring(1);
    }).join('');

    if (this[syncFunctionName] && typeof this[syncFunctionName] == 'function') {
        this[syncFunctionName](data);
    }
}

Syncronizable.prototype.getSyncID = function () {
    throw  new Error('Abstract method');
}

Syncronizable.prototype.getGameID = function () {
    throw  new Error('Abstract method');
}