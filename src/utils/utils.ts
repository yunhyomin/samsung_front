// fn is the event callback we need to wrap, delay is the time interval threshold
export function throttle(fn: Function, delay: number) {
  // last is the last time the callback was triggered, timer is the timer
  let last = 0,
    timer: any = null;
  // Return the throttle processing result as a function
  return function () {
    const that: any = (this as any);
    // preserve this context at the time of invocation
    let context = that;
    // Preserve the parameters passed in when calling
    let args = arguments;
    // Record the time when the callback is triggered this time
    let now = +new Date();

    // Determine whether the time difference between the last trigger time and this trigger time is less than the time interval threshold
    if (now - last < delay) {
      // If the time interval is less than the time interval threshold we set, a new timer is set up for this trigger operation
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, delay);
    } else {
      // If the time interval exceeds the time interval threshold we set, it will not wait, anyway to give the user a response
      last = now;
      fn.apply(context, args);
    }
  };
}

export function setCookie(cName: string, value: any, expiredays: any) {
  if (expiredays > 0 && expiredays !== "100") {
    let exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie =
      cName +
      "=" +
      escape(value) +
      // (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
      (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
  }
  if (expiredays === "100") {
    let exdate = new Date("2118-01-01 00:00:00");
    document.cookie =
      cName +
      "=" +
      escape(value) +
      // (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
      (expiredays == null ? "" : ";expires=" + exdate.toUTCString());
  }
}
export function getCookie(cName: string) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + "=");
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1;
      let cEnd = document.cookie.indexOf(";", cStart);
      if (cEnd === -1) cEnd = document.cookie.length;
      return unescape(document.cookie.substring(cStart, cEnd));
    }
  }
  return "";
}

export function delCookie(name: string) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = getCookie(name);
  if (cval != null)
    // document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    document.cookie = name + "=" + cval + ";expires=" + exp.toUTCString();
}

//clear cookies
export function clearCookie(name: string) {
  setCookie(name, "", -1);
}

//Get an array of Query Strings
export function getQueryString() {
  let result = window.location.search.match(
    new RegExp("[?&][^?&]+=[^?&]+", "g")
  );
  if (result == null) {
    return "";
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].substring(1);
  }
  return result;
}
//Get value based on QueryString parameter name
export function getQueryStringByName(name: string) {
  let result = window.location.search.match(
    new RegExp("[?&]" + name + "=([^&]+)", "i")
  );
  if (result == null || result.length < 1) {
    return "";
  }
  return result[1];
}
//Get the height of the scrolled top of the page
export function getScrollTop() {
  return Math.max(
    //chrome
    document.body.scrollTop,
    //firefox/IE
    document.documentElement.scrollTop
  );
}
//Get the total height of the page document
export function getDocumentHeight() {
  //Both document.body.scroll Height and document.document Element.scroll Height for modern browsers (IE 9+ and others) and IE 8 are ok
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );
}
//The height of the page browser viewport
export function getWindowHeight() {
  return document.compatMode === "CSS1Compat"
    ? document.documentElement.clientHeight
    : document.body.clientHeight;
}
//// time formatted as 2018-12-12 12:12:00
export function timestampToTime(timestamp: Date | any, dayMinSecFlag: boolean) {
  const date = new Date(timestamp);
  const Y = date.getFullYear() + "-";
  const M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  const D =
    date.getDate() < 10 ? "0" + date.getDate() + " " : date.getDate() + " ";
  const h =
    date.getHours() < 10 ? "0" + date.getHours() + ":" : date.getHours() + ":";
  const m =
    date.getMinutes() < 10
      ? "0" + date.getMinutes() + ":"
      : date.getMinutes() + ":";
  const s =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  if (!dayMinSecFlag) {
    return Y + M + D;
  }
  return Y + M + D + h + m + s;
}

//Determine whether it is a mobile terminal or a pc terminal, true means it is a mobile terminal, false means it is a pc terminal
export function isMobileOrPc() {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
}
