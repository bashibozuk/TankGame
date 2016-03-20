/**
 * Created by vasil on 3/18/16.
 */

function WSClient(url) {
    this.url = url;
    Observable.call(this);
    this.init();
}

WSClient.prototype.init = function() {
    var _this = this;
    this.socket = new WebSocket(this.url);
    this.socket.onmessage = function(event) {
        var msg = event.data;
        try {
            console.log(event);
            _this.onMessage(JSON.parse(msg));
        } catch (e) {
           console.error(e);
        }
    }

    this.syncID = null;
}

WSClient.prototype.onMessage = function(data) {
    if (data.type && data.type == 'connected') {
        this.syncID = data.id;
        return;
    }
    this.notify(data);
}


WSClient.prototype.send = function(data) {
    this.socket.send(JSON.stringify(data));
}
