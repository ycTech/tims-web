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
  uploadImageFilePreview: function () {
  },
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
  uploadPdfFile: function () {
  },
  uploadImageBase64: function () {
  },
  uploadImageFile: function () {
  }
}

$(function () {
  initEventListening()
  // 初始化
  initLayout()
  initJsTree()
  function initLayout () {
    // 初始化工具栏按钮提示框
    $('[data-toggle="tooltip"]').tooltip()

    // 加载默认设备对应的OCX控件及配置界面
    var type = $('#device-select').children('option:selected').val()
    loadHtml(ScannerTypeMap[type])
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
      ScannerOcx.start()
    })

    // 开始扫描
    $('#action-button__scan').click(function (e) {
      e.preventDefault()
      ScannerOcx.scan()
    })

    // 合并PDF
    $('#action-button__merge').click(function (e) {
      e.preventDefault()
      ScannerOcx.merge()
    })

    // 上传PDF
    $('#action-button__upload').click(function (e) {
      e.preventDefault()
      ScannerOcx.upload()
    })

    // 设置
    $('#action-button__setting').click(function (e) {
      e.preventDefault()
      toggleScannerConfig()
      ScannerOcx.setting()
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
      var treeData = res.data.file
      var fileArray = res.data.fileStoreList
      $('#jstree').jstree({
        core: {
          data: parseTreeData(treeData)
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
  showImagePreview()
}

// 切换设备配置面板
function toggleScannerConfig () {
  $('.image-preview__wrapper,.scanner-setting__wrapper').toggle()
}
// 显示图片预览
function showImagePreview () {
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
    loadHtml(ScannerTypeMap[type])
  })
}

// 加载不同扫描设备的面板
function loadHtml (htmlPath) {
  $.get(htmlPath, function (data) {
    $('#scanner-iframe').empty().html(data)
    console.log('showImagePreview')
    showImagePreview()
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

    showImagePreview()
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
