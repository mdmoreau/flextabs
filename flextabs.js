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

    _.toggles = _.flextabs.querySelectorAll('.flextabs__toggle');

    _.contents = _.flextabs.querySelectorAll('.flextabs__content');

    _.reset = function() {
      for (var i = 0; i < _.toggles.length; i += 1) {
        _.toggles[i].classList.remove('flextabs__toggle--active--last');
        _.contents[i].classList.remove('flextabs__content--active--last');
      }
    };

    _.activate = function() {
      var i = Array.prototype.indexOf.call(_.toggles, this);
      _.toggles[i].classList.toggle('flextabs__toggle--active');
      _.toggles[i].classList.add('flextabs__toggle--active--last');
      _.contents[i].classList.toggle('flextabs__content--active');
      _.contents[i].classList.add('flextabs__content--active--last');
    };

    _.click = function() {
      _.reset();
      _.activate.call(this);
    };

    _.init = function() {
      for (var i = 0; i < _.toggles.length; i += 1) {
        _.toggles[i].addEventListener('click', _.click);
      }
    };

    return _;

  };

  return flextabs;

}));
