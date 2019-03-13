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
