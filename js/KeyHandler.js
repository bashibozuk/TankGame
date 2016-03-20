/**
 * Created by vasil on 2/21/16.
 */
function KeyHandler() {
    Observable.call(this);
}

KeyHandler.prototype.initEvents = function () {
    var _this = this;
    document.body.addEventListener('keydown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        _this.notify({
            action: true,
            key: e.keyCode
        })
    })

    document.body.addEventListener('keyup', function(e) {
        e.preventDefault();
        e.stopPropagation();
        _this.notify({
            action: false,
            key: e.keyCode
        })
    })
}

