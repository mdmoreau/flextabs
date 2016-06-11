(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.flextabs = factory();
  }
}(this, function() {

  var flextabs = function(target) {

    var _ = {};

    _.flextabs = target;

    _.toggle = _.flextabs.querySelectorAll('.flextabs__toggle');

    _.content = _.flextabs.querySelectorAll('.flextabs__content');

    _.reset = function() {
      for (var i = 0; i < _.toggle.length; i += 1) {
        _.toggle[i].classList.remove('flextabs__toggle--active--last');
        _.content[i].classList.remove('flextabs__content--active--last');
      }
    };

    _.activate = function() {
      var i = Array.prototype.indexOf.call(_.toggle, this);
      _.toggle[i].classList.toggle('flextabs__toggle--active');
      _.toggle[i].classList.add('flextabs__toggle--active--last');
      _.content[i].classList.toggle('flextabs__content--active');
      _.content[i].classList.add('flextabs__content--active--last');
    };

    _.click = function(e) {
      e.preventDefault();
      _.reset();
      _.activate.call(this);
    };

    _.init = function() {
      for (var i = 0; i < _.toggle.length; i += 1) {
        _.toggle[i].addEventListener('click', _.click);
      }
    };

    return _;

  };

  return flextabs;

}));
