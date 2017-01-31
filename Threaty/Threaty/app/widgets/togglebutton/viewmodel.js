define(['durandal/composition'], function (composition) {
    var ctor = function () { };

    ctor.prototype.activate = function (settings) {
        this.settings = settings;
    };

    ctor.prototype.state = ko.observable('off');

    ctor.prototype.turnOn = function() {
        ctor.prototype.state('on');
    }

    ctor.prototype.turnOff = function () {
        ctor.prototype.state('off');
    }

    return ctor;
});