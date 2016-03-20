/**
 * Created by vasil on 3/18/16.
 */


function Observable(observers) {

    var _observers = typeof observers == 'object' && observers.hasOwnProperty('length') ? observers : [];

    this.addObserver = function(o) {
        if (_observers.indexOf(o) === -1) {
            _observers.push(o);
        }
    }

    this.removeObserver = function(o) {
        var index = _observers.indexOf(o);
        if (index === -1) {
            return;
        }

        _observers.splice(index, 1);
    }

    this.notify = function(data) {
        for (var i = 0 ; i < _observers.length; i++) {
            _observers[i].update(data);
        }
    }
}