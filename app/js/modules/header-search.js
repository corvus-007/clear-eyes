window.headerSearch = (function () {
  var headerSearch = document.querySelector('.header-search');
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
