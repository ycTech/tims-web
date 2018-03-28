console.log('czur.js')
var fileDirect = null // 扫描后文件的存放路径
var defaultFileName = null
function $notify (msg, type) {
  console.log(msg)
  $.growl(msg)
}
var imageUrlList = []
var imageFilePathList = []
$(function () {
  window.ScannerOcx = {
    start: function () {
      console.log('czur start')
      imageFilePathList = []
      czurOcxStartDevice()
    },
    scan: function () {
      console.log('czur scan')
      czurOcxScan()
    },
    merge: function () {
      console.log('czur merge')
      czurOcxMergeImageToPdf()
    },
    upload: function () {
      console.log('czur upload')
      czurHttpUpload()
    },
    close: function () {
      console.log('czur close')
      czurOcxCloseDevice()
    }
  }
  addEventListeners()
})
function addEventListeners () {
  if (window.attachEvent) {
    document.getElementById('CZUROcx').attachEvent('CZUR_CALLBACK', JS_CZUR_CALLBACK)
    document.getElementById('CZUROcx').attachEvent('CZUR_UPLOAD_CALLBACK', JS_CZUR_UPLOAD_CALLBACK)
    document.getElementById('CZUROcx').attachEvent('CZUR_PDF_CALLBACK', JS_CZUR_PDF_CALLBACK)
  } else if (window.addEventListener) {
    document.getElementById('CZUROcx').addEventListener('CZUR_CALLBACK', JS_CZUR_CALLBACK, false)
    document.getElementById('CZUROcx').addEventListener('CZUR_UPLOAD_CALLBACK', JS_CZUR_UPLOAD_CALLBACK, false)
    document.getElementById('CZUROcx').addEventListener('CZUR_PDF_CALLBACK', JS_CZUR_PDF_CALLBACK, false)
  }
}
function czurOcxStartDevice () {
  var breadth = 0 // A3幅面
  var detect = 1 // 边缘检测
  var res = czurInitialize() &&
    czurScanBreadth(breadth) &&
    czurEdgeDetect(detect) &&
    czurEdgeCutting() &&
    czurHttpUrl() &&
    czurOpenDevice()

  if (res) {
    var breadthLabel = breadth === 0 ? 'A3幅面' : 'A4幅面'
    var detectLabel = detect === 1 ? '开启' : '关闭'
    console.log('启动设备成功,扫描幅面：' + detectLabel + '；边缘检测:' + breadthLabel + '；开启自动裁边;')
  }
}
function initCzurParams (breadth, detect) {
  czurScanBreadth(breadth)
  czurEdgeDetect(detect)
  czurEdgeCutting()
  czurHttpUrl()
  return true
}
function czurOcxScan () {
  czurGrabSingleImage()
}
function czurOcxCloseDevice () {
  czurCloseDevice()
  czurDeinitialize()
}
function czurOcxMergeImageToPdf () {
  imageFilePathList = imageFilePathList || []
  for (var i = 0; i < imageFilePathList.length; i++) {
    czurPdfImage(imageFilePathList[i])
  }
  czurPdfSubmit()
}

function czurInitialize () {
  var lInitialize = window.CZUROcx.CZUR_Initialize('JS_OCX.log')
  if (lInitialize === 0) {
    $notify('设备初始化失败！')
    return false
  }
  console.log('设备初始化成功！')
  return true
}
// 打开设备 0：失败，1：成功，2：设备未连接或型号不支持（不支持ET16、ET18U）
function czurOpenDevice () {
  console.log('打开设备')
  var bOpenDevice = window.CZUROcx.CZUR_OpenDevice()
  if (bOpenDevice === 0) {
    $notify('打开设备失败！请确认设备是否已启动，如未启动，请再次点击启动按钮或刷新页面；如果设备已启动，无需重复点击。')
    return false
  } else if (bOpenDevice === 1) {
    console.log('打开设备成功')
    return true
  } else {
    $notify('请检查设备是否连接或型号是否支持')
    return false
  }
}
// 触发设备进行拍照 0：失败，1：成功
function czurGrabSingleImage () {
  var res = window.CZUROcx.CZUR_GrabSingleImage()
  if (res === 0) {
    $notify('扫描图像失败！')
    return false
  }
  $notify('扫描图像成功！正在保存图片到本地...')
  return true
}
// 关闭设备
function czurCloseDevice () {
  var res = window.CZUROcx.CZUR_CloseDevice()
  if (res === 0) {
    $notify('关闭设备失败')
  } else {
    $notify('关闭设备成功')
  }
}
// 设置扫描幅面，0：A3幅面，1：A4幅面，默认A3幅面
function czurScanBreadth (breadth) {
  console.log('设置扫描幅面：' + (breadth === 0 ? 'A3幅面' : 'A4幅面'))
  window.CZUROcx.CZUR_ScanBreadth(breadth)
  return true
}
// 是否开启边缘检测，0：关闭，1：开启
function czurEdgeDetect (detect) {
  console.log((detect === 0 ? '关闭' : '开启') + '边缘检测')
  window.CZUROcx.CZUR_EdgeDetect(detect)
  return true
}
// 清除Ocx资源
function czurDeinitialize () {
  console.log('清除控件内存资源')
  window.CZUROcx.CZUR_Deinitialize()
}
// 设置图片保存路径
function czurPath (path) {
  console.log('设置图片保存路径', path)
  window.CZUROcx.CZUR_Path(path)
}
// 自定义图片命名规则
function czurCustom (prefix, initNumber) {
  initNumber = initNumber || 1
  console.log('自定义图片命名规则', '前缀：' + prefix + ', 图片起始序号：' + initNumber)
  window.CZUROcx.CZUR_Custom(prefix, initNumber)
}
function czurHttpUrl () {
  var url = 'http://192.168.1.112:10060/fast/upload?billNo=1111&billTypeId=2222&classifyId=33333'
  var name = 'file'
  window.CZUROcx.CZUR_Http_URL(url, name)
  return true
}
function czurHttpForm (name, content) {
  window.CZUROcx.CZUR_Http_Form(name, content)
}
//  自动对图片进行裁边处理
function czurEdgeCutting () {
  console.log('自动对图片进行裁边处理')
  window.CZUROcx.CZUR_EdgeCutting()
  return true
}
// 添加用于合成pdf的图片文件
function czurPdfImage (filePath) {
  var res = window.CZUROcx.CZUR_Pdf_Image(filePath)
  if (res === 0) {
    console.log('添加用于合成PDF的图片文件添加成功' + '图片路径：' + filePath)
    return true
  }
  $notify('添加图片失败' + filePath)
  return false
}
// 将添加的图片文件合成PDF文档
function czurPdfSubmit (filePath) {
  var defaultPath = fileDirect || 'D:'
  defaultFileName = 'CZUR_' + getDateTimeString() + '.pdf'
  filePath = filePath || defaultPath + '\\' + defaultFileName
  var res = window.CZUROcx.CZUR_Pdf_Submit(filePath)
  if (res === 0) {
    $notify('合成pdf成功' + '正在生成pdf并保存到本地：' + filePath)
  } else {
    $notify('合成PDF失败')
  }
}
function czurHttpUpload () {
  var localfile = fileDirect + '\\' + defaultFileName
  console.log(localfile)
  var url = 'http://192.168.1.112:10060/fast/upload?billNo=1111&billTypeId=2222&classifyId=33333'
  var name = 'file'
  var username = ''
  var password = ''
  var res = window.CZUROcx.CZUR_Http_Upload(localfile, url, name, username, password)
  if (res == 1) {
    $notify('未初始化EtOcxEx资源')
    return false
  }
  if (res == 2) {
    $notify('本地文件不存在')
    return false
  }
  if (res == 3) {
    $notify('上传PDF失败，错误码：3')
    return false
  }
  if (res == 0) {
    return true
  }
}
function czurBase64 (iamgePath) {
  var base64 = window.CZUROcx.CZUR_Base64(iamgePath)
  showImage(base64)
}

function showImage (base64) {
  console.log('showImage')
  $('#image-preview').attr('src', 'data:image/png;base64, ' + base64)
}
function addImgUrlToPreview (imageUrl) {
  imageUrlList.push(imageUrl)
  console.log(imageUrl)
  var $img = $('<img/>').attr('src', imageUrl).addClass('img-thumbnail').attr('width', '80px')
    .bind('click', function () {
      var imgUrl = $(this).attr('src')
      $('#czur-image-preview').attr('src', imgUrl)
    })
  // var $wrapper = $('<div/>').addClass('img-thumbnail__wrapper').append($img)
  $('.layout-footer').append($img)
}
function JS_CZUR_CALLBACK (uploadcnt, barcode, httpinfo, imagefile1, imagefile2) {
  $notify('图片已保存到本地' + imagefile1)
  if (uploadcnt && httpinfo) {
    console.log(httpinfo)
    var res = JSON.parse(httpinfo)
    console.log(res.data)
    if (res.code == 200) {
      addImgUrlToPreview(res.data)
    }
  }
  fileDirect = imagefile1.slice(0, imagefile1.lastIndexOf('\\'))
  imageFilePathList.push(imagefile1)
  if (imagefile2) {
    imageFilePathList.push(imagefile2)
  }
  console.log(fileDirect)
}
function JS_CZUR_UPLOAD_CALLBACK (uploadcnt, localfile, errcode, errmsg) {
  $notify('文件上传成功' + '上传的本地文件地址为：' + localfile)
  console.log(uploadcnt, localfile, errcode, errmsg)
}
function JS_CZUR_PDF_CALLBACK (pdfstatus) {
  if (pdfstatus === 0) {
    $notify('生成PDF成功！文件保存地址：' + defaultFileName)
  } else {
    $notify('生成PDF失败！')
  }
}
function getDateTimeString () {
  var date = new Date()
  var Year = date.getFullYear()
  var Month = date.getMonth() + 1
  var Dates = date.getDate()
  var Hour = date.getHours()
  var Minite = date.getMinutes()
  var Second = date.getSeconds()
  return '' + Year + Month + Dates + Hour + Minite + Second
}
