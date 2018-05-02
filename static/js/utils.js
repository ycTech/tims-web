// var baseUrl = '/scanner/api/'
var baseUrl = '/'

function $notify (msg, type) {
  $.growl({
    message: msg
  }, {
    type: type || 'info',
    placement: {
      from: 'top',
      align: 'right'
    },
    offset: {
      x: 120,
      y: 70
    }
  })
}

// 获取location参数
function getQueryString (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return null
  }
}

function getDateString () {
  var date = new Date()
  return '' + date.getFullYear() + (date.getMonth() + 1) + date.getDate() +
    date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds()
}
