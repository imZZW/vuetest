export function setCookie (username, value, expire) {
  var date = new Date()
  date.setSeconds(date.getSeconds() + expire)
  document.cookie = username + '=' + escape(value) + '; expires=' + date.toGMTString()
  console.log(document.cookie)
}

export function getCookie (username) {
  if (document.cookie.length > 0) {
    let start = document.cookie.indexOf(username + '=')
    if (start !== -1) {
      start = start + username.length + 1
      let end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      }
      return unescape(document.cookie.substring(start, end))
    }
  }
  return ''
}

export function delCookie (username) {
  setCookie(username, '', -1)
}
