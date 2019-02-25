window.util = (function () {
  'use strict';

  return {
    KEYCODE_ESC: 27,
    isDevMode: function () {
      return location.hostname === 'localhost';
    },
    setMaxHeight: function (selector) {
      var maxHeight;
      var elements = document.querySelectorAll(selector);

      if (!elements.length) {
        return;
      }

      maxHeight = Array.from(elements).reduce(function findMaxHeight(prevValue, element) {
        var currentValue = element.offsetHeight;
        return (prevValue > currentValue) ? prevValue : currentValue;
      }, 0);

      Array.from(elements).forEach(function specifyMaxHeight(it) {
        it.style.height = maxHeight + 'px';
      });
    },
    getScrollbarWidth: function () {
      var div = document.createElement('div');

      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      var scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);

      return scrollWidth;
    }
  };
})();

window.splashScreen = (function (window, $) {
  'use strict';

  var splashScreen = document.querySelector('.splash-screen');

  if (!splashScreen) {
    return;
  }

  document.body.style.overflowY = 'hidden';
  document.body.style.paddingRight = window.util.getScrollbarWidth() + 'px';

  window.addEventListener('load', function () {
    splashScreen.classList.add('splash-screen--hidden');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';
  });
})(window, jQuery);

window.outCover = (function () {
  'use strict';

  var outCover = document.querySelector('.out-cover');
  var outCoverToggle = document.querySelector('.out-cover-toggle');
  var outCoverClose = outCover.querySelector('.out-cover__close');
  var scrollWidth = window.util.getScrollbarWidth();

  var onOutCoverEscPress = function (event) {
    if (event.keyCode === window.util.KEYCODE_ESC) {
      hideOutCover();
    }
  };

  var showOutCover = function () {
    outCover.classList.add('out-cover--opened');
    outCoverToggle.classList.add('out-cover-toggle--fired');
    document.body.classList.add('is-out-cover-opened');
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollWidth + 'px';

    document.addEventListener('keydown', onOutCoverEscPress);
  };

  var hideOutCover = function () {
    outCover.classList.remove('out-cover--opened');
    outCoverToggle.classList.remove('out-cover-toggle--fired');
    document.body.classList.remove('is-out-cover-opened');
    document.body.style.overflowY = '';
    document.body.style.paddingRight = '';

    document.removeEventListener('keydown', onOutCoverEscPress);
  };

  outCoverToggle.addEventListener('click', function (event) {
    event.preventDefault();

    if (!this.classList.contains('out-cover-toggle--fired')) {
      showOutCover();
    } else {
      hideOutCover();
    }
  });

  outCoverClose.addEventListener('click', function(event) {
    event.preventDefault();
    hideOutCover();
  });

  return {
    show: showOutCover,
    hide: hideOutCover
  };
})();

window.headerSearch = (function () {
  var headerSearch = document.querySelector('.header-search');

  if (!headerSearch) {
    return;
  }

  var headerSearchToggle = headerSearch.querySelector('.header-search__toggle');
  var headerSearchInput = headerSearch.querySelector('.header-search__input');

  headerSearchToggle.addEventListener('click', handlerHeaderSearchToggleClick);

  function handlerHeaderSearchToggleClick(evt) {
    evt.preventDefault();
    var isHeaderSearchVisible = headerSearch.classList.contains('header-search--is-open');
    headerSearch.classList.toggle('header-search--is-open', !isHeaderSearchVisible);
    if (!isHeaderSearchVisible) {
      setTimeout(() => {
        headerSearchInput.focus();
      }, 100);
    }
  }
})();

window.map = (function (window, $) {
  'use strict';

  var dirname = window.util.isDevMode() ? '' : '/wp-content/themes/trk/';
    dirname = '';

  var mapElem = document.querySelector('#contact-map');

  if (!mapElem) {
    return;
  }

  mapElem.classList.remove('.contact__map--no-js');

  ymaps.ready(function () {
    var map = new ymaps.Map(mapElem, {
      center: [55.518290, 37.345167],
      zoom: 16,
      controls: []
    });

    map.behaviors.disable(['scrollZoom']);
    var myPlacemark = new ymaps.Placemark([55.518290, 37.345167], {
      hintContent: "Офтальмологическая клиника ЯСНО ВИЖУ"
    }, {
      iconLayout: 'default#image',
      iconImageHref: dirname + 'images/icon-map-pin.svg',
      iconImageSize: [48, 52],
      iconImageOffset: [-24, -52]
    });

    map.geoObjects.add(myPlacemark);
  });
})(window, jQuery);

window.previewReview = (function () {
  var previewReview = document.querySelectorAll('.preview-review');
  var MAX_LENGTH = 200;
  var SHORT_REVIEW_CLASS_MOD = 'preview-review--is-short';
  var BUTTON_TEXT_OPENED = 'Скрыть';
  var BUTTON_TEXT_COLLAPSE = 'Показать полностью';

  function init() {
    previewReview.forEach(function (review) {
      let p = review.querySelector('.preview-review__text');
      let textNode = p.firstChild;
      let originText = textNode.textContent;
      let textLength = originText.length;
      let shortText = '';
      let button = document.createElement('button');
      button.setAttribute('type', 'button');
      // button.setAttribute('class', 'preview-review__to-full-review button button--outline-accent');
      button.setAttribute('class', 'preview-review__to-full-review button');
      button.textContent = BUTTON_TEXT_COLLAPSE;

      if (textLength > MAX_LENGTH) {
        shortText = originText.slice(0, MAX_LENGTH) + '…';
        textNode.textContent = shortText;
        review.classList.add(SHORT_REVIEW_CLASS_MOD);
        p.appendChild(button);
      }

      button.addEventListener('click', buttonClickHandler);

      function buttonClickHandler(evt) {
        evt.preventDefault();
        var isShortClass = review.classList.contains(SHORT_REVIEW_CLASS_MOD);
        console.log(review);
        review.classList.toggle(SHORT_REVIEW_CLASS_MOD, !isShortClass);
        textNode.textContent = !isShortClass ? shortText : originText;
        button.textContent = !isShortClass ? BUTTON_TEXT_COLLAPSE : BUTTON_TEXT_OPENED;
      }
    });
  }

  return {
    init: init
  };
})();

