function setCookie(name, value, options) {
  const innerOptions = options || {};
  let expires = options.expires;

  if (typeof expires === 'number' && expires) {
    const d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = innerOptions.expires = d;
  }
  if (expires && expires.toUTCString) {
    innerOptions.expires = expires.toUTCString();
  }
  const tempValue = encodeURIComponent(value);
  let updatedCookie = `${name}=${tempValue}`;
  for (const propName in innerOptions) {
    updatedCookie += `; ${propName}`;
    const propValue = innerOptions[propName];
    if (propValue !== true) {
      updatedCookie += `=${propValue}`;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(cname) {
  const name = `${cname}=`;
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}

export function deleteCookie(name) {
  setCookie(name, '', {
    expires: -1,
  });
}
