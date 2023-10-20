function getCookie(name) {
  const dc = document.cookie;
  const prefix = name + '=';
  let begin = dc.indexOf('; ' + prefix);
  const end = document.cookie.indexOf(';', begin);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

export function initCookies(cookiesBtn, cookiesContainer) {
  // Проверяем, поддерживаются ли cookie браузером
  if (!navigator.cookieEnabled) {
    console.warn('Cookies are disabled. The cookies consent functionality will not work.');
    return;
  }

  // Проверяем наличие элементов на странице
  if (!cookiesContainer || !cookiesBtn) {
    console.warn('Cookies consent elements are missing on the page.');
    return;
  }

  const myCookie = getCookie('cookies');
  const expires = new Date(Date.now() + 86400 * 150000).toUTCString();

  function disableScroll() {
    document.body.classList.add('no-scroll');
  }

  function enableScroll() {
    document.body.classList.remove('no-scroll');
  }

  cookiesBtn.addEventListener('click', function () {
    document.cookie = 'cookies=true;expires=' + expires + ';path=/;';
    cookiesContainer.style.display = 'none';
    enableScroll();
  });

  if (!myCookie) {
    cookiesContainer.style.display = 'flex';
    disableScroll();
  }
}
