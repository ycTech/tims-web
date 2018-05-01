var ScannerTypeMap = {
  czur: 'scanner-czur.html',
  founder: 'scanner-founder.html',
  zhelin: 'scanner-zhelin.html'
}
var urlQuery = {
  vsystem: getQueryString('vsystem'),
  pk_corp: getQueryString('pk_corp'),
  userCode: getQueryString('userCode'),
  billType: getQueryString('billType'),
  billtypename: getQueryString('billtypename'),
  billId: getQueryString('billId'),
  billNo: getQueryString('billNo'),
  isFolder: getQueryString('isFolder'),
  path: getQueryString('path')
}

var ScannerOcx = {
  start: function () {
    alert('请选择设备并启动该设备，请确保已正确安装驱动！')
  },
  scan: function () {
    alert('请选择设备并启动该设备，请确保已正确安装驱动！')
  },
  merge: function () {
    alert('请选择设备并启动该设备，请确保已正确安装驱动！')
  },
  upload: function () {
    alert('请选择设备并启动该设备，请确保已正确安装驱动！')
  },
  setting: function () {
    alert('请选择设备并启动该设备，请确保已正确安装驱动！')
  }
}

ScannerHome = {
  params: urlQuery,
  // 上传Base64格式图片预览
  uploadImageBase64Preview: function (base64, fileName, fileLocalPath, cb) {
    var postData = {
      imageBase64: base64,
      imageName: fileName
    }
    $.ajax({
      url: baseUrl + 'fast/group/base64/upload',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      traditional: true,
      processData: false,
      async: false,
      data: JSON.stringify(postData),
      success: function (resp) {
        if (!resp.data || !resp.data.fileUrl) {
          return false
        }
        var res = resp.data
        var fileUrl = res.fileUrl
        var thumbImageUrl = res.thumbImageUrl
        AddImagePreview(fileUrl, thumbImageUrl)
        cb(fileUrl, thumbImageUrl)
      },
      error: function (error) {
        console.log('fast/group/base64/upload error')
        console.log(JSON.stringify(error))
      }
    })
  },

  // 上传Base64格式的PDF文件
  uploadPdfBase64: function (fileName, base64, callback) {
    var postData = {
      vsystem: getQueryString('vsystem'),
      pk_corp: getQueryString('pk_corp'),
      userCode: getQueryString('userCode'),
      billType: getQueryString('billType'),
      billtypename: getQueryString('billtypename'),
      billId: getQueryString('billId'),
      billNo: getQueryString('billNo'),
      isFolder: getQueryString('isFolder'),
      path: getQueryString('path'),
      imageBase64: base64,
      imageName: fileName
    }
    $.ajax({
      url: baseUrl + 'fast/base64/upload',
      method: 'POST',
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      traditional: true,
      processData: false,
      async: false,
      data: JSON.stringify(postData),
      success: function (resp) {
        var fileUrl = resp.data
        console.log(JSON.stringify(resp))
        callback(fileUrl)
      },
      error: function (error) {
        console.log('fast/group/base64/upload error')
        console.log(JSON.stringify(error))
      }
    })
  },

  // 上传Base64格式的图片文件
  uploadImageBase64: function () {
  },

  clearImageThumbsNails: function () {
  },

  closeImagePreview: function () {

  },

  // 设置图片预览图片的Src
  setImagePreviewSrc: function () {

  },

  //
  resetImagePreviewSrc: function () {

  },

  reloadFileList: function () {
    initJsTree()
  }
}

$(function () {
  initJsTree()
  // if (!isBrowserSupport()) {
  //   return false
  // }
  initLayout()
  initEventListening()
  // 初始化
  function initLayout () {
    // 初始化工具栏按钮提示框
    $('[data-toggle="tooltip"]').tooltip()

    // 加载默认设备对应的OCX控件及配置界面
    var storedDeviceType = store.get('scannerType')
    var type = store.get('scannerType') || 'zhelin'
    loadDeviceHtml(type)
  }

  // 初始化事件监听
  function initEventListening () {
    onDeviceTypeChange()
    onActionButtonClick()
  }

  function onActionButtonClick () {
    // 启动设备
    $('#action-button__start').click(function (e) {
      e.preventDefault()
      isBrowserSupport() && ScannerOcx.start()
    })

    // 开始扫描
    $('#action-button__scan').click(function (e) {
      e.preventDefault()
      isBrowserSupport() && ScannerOcx.scan()
    })

    // 合并PDF
    $('#action-button__merge').click(function (e) {
      e.preventDefault()
      isBrowserSupport() && ScannerOcx.merge()
    })

    // 上传PDF
    $('#action-button__upload').click(function (e) {
      e.preventDefault()
      isBrowserSupport() && ScannerOcx.upload()
    })

    // 设置
    $('#action-button__setting').click(function (e) {
      e.preventDefault()
      toggleScannerConfigPanel()
    })
  }
})

// 初始化JsTree
function initJsTree () {
  $.ajax({
    type: 'POST',
    url: baseUrl + 'bill/file/list',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: JSON.stringify(urlQuery),
    success: function (res) {
      if (!res.data || !res.data.file) {
        $notify('暂时获取不到单据相关文件！', 'warning')
        return false
      }
      var treeData = res.data.file
      var fileArray = res.data.fileStoreList
      $('#jstree').jstree({
        core: {
          data: parseTreeData(treeData)
        }
      })

      $('#jstree').on('changed.jstree', function (e, data) {
        if (data.node && data.node.li_attr && data.node.li_attr.fileUrl) {
          var hostname = window.location.hostname
          var search = window.location.search || '?t=' + new Date().getTime()
          search = search + '&fileId=' + data.node.id
          window.open('http://' + hostname + ':8012/index?' + search)
        }
      })
    },
    error: function (error) {
      console.log(JSON.stringify(error))
    }
  })
  function parseTreeData (treeArray) {
    for (var i = 0; i < treeArray.length; i++) {
      var item = treeArray[i]
      item.text = item.name
      item.state = {
        opened: true
      }
      if (item.children && item.children.length > 0) {
        item.icon = 'glyphicon glyphicon-folder-open'
        item.children = parseTreeData(item.children)
      } else {
        item.icon = 'glyphicon glyphicon-file'
        item.li_attr = {
          fileUrl: item.url
        }
      }
    }
    return treeArray
  }
}

// 关闭配置面板
function onCloseConfig () {
  showImagePreviewPanel()
}

// 切换设备配置面板
function toggleScannerConfigPanel () {
  $('.image-preview__wrapper,.scanner-setting__wrapper').toggle()
}
// 显示图片预览
function showImagePreviewPanel () {
  $('.image-preview__wrapper').show()
  $('.scanner-setting__wrapper').hide()
}
// 显示扫描设备配置项
function showScannerConfig () {
  $('.image-preview__wrapper').hide()
  $('.scanner-setting__wrapper').show()
}

// 监听设备类型改变事件
function onDeviceTypeChange () {
  $('#device-select').change(function (e) {
    e.preventDefault()
    var type = $('#device-select').children('option:selected').val()
    loadDeviceHtml(type)
  })
}

// 加载设备对应HTML
function loadDeviceHtml (deviceType) {
  store.set('scannerType', deviceType)
  loadHtml(ScannerTypeMap[deviceType])
}

// 加载不同扫描设备的面板
function loadHtml (htmlPath) {
  $.get(htmlPath, function (data) {
    $('#scanner-iframe').empty().html(data)
    console.log('showImagePreviewPanel')
    showImagePreviewPanel()
  })
}
function AddImagePreview (fileUrl, thumbImageUrl) {
  var $imageThumb = $('<img/>').attr({
    src: thumbImageUrl,
    'origin-src': fileUrl
  }).addClass('image-thumbnail').bind('click', function () {
    var $imgThumb = $(this)
    var src = $imgThumb.attr('origin-src')
    var contentW = $('.image-preview__wrapper').width()
    var contentH = $('.image-preview__wrapper').height()
    var imgW = $imgThumb.attr('img-w')
    var imgH = $imgThumb.attr('img-h')

    var $imagePreview = $('<img/>')
      .attr('src', src)
      .addClass('image-preview')

    if (imgW / imgH > contentW / contentH) {
      $imagePreview.css({
        width: '100%',
        height: 'auto'
      })
    } else {
      $imagePreview.css({
        width: 'auto',
        height: '100%'
      })
    }

    var $imagePreviewContent = $('<div/>')
      .addClass('image-preview-content')
      .append($imagePreview)

    $('.image-preview__wrapper')
      .empty()
      .append($imagePreviewContent)

    showImagePreviewPanel()
  })
  var $imageThumbWrapper = $('<div/>')
    .addClass('image-thumbnail-wrapper')
    .append($imageThumb)
  $('.image-thumbnails')
    .append($imageThumbWrapper)
  setTimeout(function () {
    var imageThumbW = $imageThumb.width()
    var imageThumbH = $imageThumb.height()
    $imageThumb.attr({
      'img-w': imageThumbW,
      'img-h': imageThumbH
    })
    if (imageThumbH > imageThumbW) {
      $imageThumb.css('height', '100%')
      $imageThumb.css('width', 'auto')
    } else {
      $imageThumb.css('height', 'auto')
      $imageThumb.css('width', '100%')
    }
  }, 0)
}
function isBrowserSupport () {
  var IEVersion = CheckIEVersion()
  if (IEVersion == 'edge') {
    alert('您正在使用Edge浏览器，可能无法正常使用扫描功能，请使用IE8、IE9、IE10、IE11浏览器！')
    return false
  }

  if (IEVersion == -1) {
    alert('您使用的浏览器不是IE浏览器，可能无法正常使用扫描功能，请使用IE8、IE9、IE10、IE11浏览器！')
    return false
  }

  if (IEVersion < 8) {
    alert('您的IE版本过低，请使用IE8及以上浏览器！')
    return false
  }
  return true
}

function CheckIEVersion () {
  var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion === 7) {
      return 7
    } else if (fIEVersion === 8) {
      return 8
    } else if (fIEVersion === 9) {
      return 9
    } else if (fIEVersion === 10) {
      return 10
    } else {
      return 6// IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'// edge
  } else if (isIE11) {
    return 11 // IE11
  } else {
    return -1// 不是ie浏览器
  }
}

function toggleSidebar () {
  $('.layui-layout.layui-layout-admin').toggleClass('collapsed')
}
