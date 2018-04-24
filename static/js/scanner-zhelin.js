/*
 * @Author: qingbin_bai@163.com
 * @Date: 2018-04-24 23:52:07
 * @Last Modified by: qingbin_bai@163.com
 * @Last Modified time: 2018-04-25 02:14:20
 * TODO:
 *  1. 用户可配置文件保存路径
 *  2. Cookie中保存用户的配置文件
 */

var szDeviceIndex = '0' // 设备的编号；   0：文档摄像头;1：人像摄像头
var iColorMode = '0' // 设定获取的图像的色彩模式；   0: 彩色，1: 灰度，2: 黑白。
var nDpi = 200 // 设定拍照后图像存档的DPI;
var szPostfix = '.jpg' // 默认图片文件后缀为jpg
var imgeId = 0 // 图片默认起始ID（也用于预览）
var strMergeSource1 // 合并图像源文件1 strMergeSource2 // 合并图像源文件2
var strFileDirectory = 'D:\\DocImage\\'

var strFileNames = []
var imageFiles = []
var szTifFileName
var szAddInFileName
var continueNo = 1
var szContinuePath
var bContinueToTiff = 0
var szFileForBase64 = ''
var iDeviceStatus = -1
var iCutPageType = -1 //
var iWaterMarkType = -1 // 水印类型
var iVideoType = 0 // 视频类型
var gRotation = 0
var $notify = window.$notify
var imageId = 0

// 全局变量
var gPdfName = ''
var gPdfPath = ''
var gTifName = ''
var gTifPath = ''
var gImagePrefix = 'image'

$(function () {
  if (!isOcxInstalled()) {
    return false
  }
  // TODO:如果设备已在运行，则不再重复启动设备，需要优化
  StopDevice()
  InitDevice()
  StartDevice()
  InitDefaultConfig()
})

// 统一对外接口，供父组件调用
ScannerOcx = {
  // 页面请求参数
  urlQuery: {},
  // 配置初始化
  init: function (urlQuery) {
    ScannerOcx.urlQuery = urlQuery || {}
  },

  // 启动设备
  start: function () {
    if (!isOcxInstalled()) {
      return false
    }

    StartDevice()
  },

  // 开启扫描
  scan: function () {
    if (!isOcxInstalled()) {
      return false
    }
    gImagePrefix = urlQuery.vbillno || 'image'
    CaptureToFile(imagePrefix + '_')
  },

  // 合并PDF
  merge: function () {
    if (!isOcxInstalled()) {
      return false
    }
    var pdfPrefix = urlQuery.vbillno || ''
    BtnCreateMultiPageFile(pdfPrefix + '_')
  },

  // 上传最近合并的PDF
  upload: function () {
    if (!isOcxInstalled()) {
      return false
    }

    BtnUploadPdfFiles()
  }
}

// 检测Ocx控件是否安装
function isOcxInstalled () {
  if (!window.Capture ||
    !window.Capture.GetVersion ||
    !window.Capture.GetVersion()) {
    $notify('哲林高拍仪Ocx控件未正确加载，请确保在IE8~IE11环境下，并且Ocx控件已正确加载，如有任何问题，请联系管理员！', 'danger')
    return false
  }

  return true
}

// 拍照并且存档,若勾选条码则一起获取条码信息
function CaptureToFile (imagePrefix) {
  imagePrefix = imagePrefix || ''
  var strFileName = imagePrefix + getDateString() + szPostfix
  var strFilePath = strFileDirectory + strFileName
  window.Capture.CaptureImage(szDeviceIndex, strFilePath)
  $notify('文件保存路径:' + strFilePath)
  window.Capture.MakeMultiPageFile(strFilePath, imgeId.toString(), '0')
  // if ($('#checkMultiSource').attr('checked')) {
  //   window.Capture.MakeMultiPageFile(strFilePath, imgeId.toString(), '0')
  // }
  if (szPostfix != '.pdf' && szPostfix != '.tif') {
    var base64 = window.Capture.EncodeBase64(strFilePath)
    ScannerHome.uploadImageBase64Preview(base64, strFileName, strFilePath,
      function (fileUrl, thumbImageUrl) {
        imageFiles.push({
          imageId: imageId,
          fileName: strFileName,
          localPath: strFilePath,
          fileUrl: fileUrl,
          thumbImageUrl: thumbImageUrl
        })
      }
    )
  }
  var strBarcodeContent = ''
  imageId++
}

// 合并PDF
function BtnCreateMultiPageFile (prefix) {
  var pdfName = prefix + getDateString() + '.pdf'
  var pdfPath = strFileDirectory + pdfName
  var tifName = prefix + getDateString() + '.tif'
  var tifPath = strFileDirectory + tifName

  if (window.Capture.MakeMultiPageFile(pdfPath, '0', '3') == 0) {
    WriteInfomation(pdfPath + '创建成功')
    gPdfName = pdfName
    gPdfPath = pdfPath
    console.log(gPdfPath)
  }
  // if (window.Capture.MakeMultiPageFile(tifPath, '0', '3') == 0) {
  //   alert(tifPath + '创建成功')
  //   gTifPath = tifPath
  // }
}

function BtnUploadPdfFiles () {
  WriteInfomation('准备上传PDF中...')
  setTimeout(function () {
    var base64 = window.Capture.EncodeBase64(gPdfPath)
    WriteInfomation('上传PDF中，请稍候...')
    setTimeout(function () {
      ScannerHome.uploadPdfBase64(gPdfName, base64, function (fileUrl) {
        WriteInfomation('上传PDF成功！' + fileUrl)
      })
    }, 0)
  }, 0)
}

/**
 * --------------------------------------
 */
function InitDefaultConfig () {
  iCutPageType = $('#rgCutPageType').val()
  SetCutPageType(iCutPageType) // 设置
  SetDeviceRotation(0)
}

function onBeforeUnload () {
}

function WriteInfomation (strInfo) {
  $notify(strInfo)
  // Content.value += ("\r\n" + strInfo);
}

// 1. 初始化设备
function InitDevice () {
  var res = window.Capture.InitDevice()
  if (res != 0) {
    $notify('初始化设备失败' + res, 'error')
    return false
  } else {
    $notify('设备初始化成功！')
    return true
  }
}

// 2. 启动指定设备 0：文档设备，1：人像设备，2：附加设备
function StartDevice (value) {
  value = value || szDeviceIndex
  var iType = parseInt(value)
  szDeviceIndex = iType.toString()
  for (var iDx = 0; iDx < 3; iDx++) {
    if (iDx == iType) {
      continue
    }
    window.Capture.StopDevice(iDx.toString())
  }
  var deviceTypeMap = {
    0: '文档设备',
    1: '人像设备',
    2: '附加设备'
  }
  var deviceTypeName = deviceTypeMap[iType]
  if (window.Capture.StartDevice(szDeviceIndex) == 0) {
    WriteInfomation('启动' + deviceTypeName + '成功')
    FillInRes()
  } else {
    WriteInfomation('启动' + deviceTypeName + '失败')
  }
}

// 3. 停用当前设备
function StopDevice () {
  window.Capture.StopDevice(szDeviceIndex)
  console.log('StopDevice')
  // WriteInfomation('停用当前设备')
}

// 4. 释放设备，退出程序之前，必须调用此方法，保证设备被正确释放
function ReleaseDevice () {
  window.Capture.ReleaseDevice()
  WriteInfomation('释放设备')
}

// 5. 获取设备数量
// 返回值：
//    1：有且只有文档设备
//    2：有文档设备和人像设备
//    3：有文档设备、人像设备和附加设备（第二人像设备）
function GetDeviceCount () {
  var count = window.Capture.GetDeviceCount()
  WriteInfomation('获取设备数量：' + count)
  return count
}

// 6. 获取控件版本信息
function GetOcxVersion () {
  WriteInfomation('控件产品版本:' + window.Capture.GetVersion())
}

// 读取分辨率列表
function FillInRes () {
  var $select = $('#Resolution_Select').empty()
  var strResolutions = JSON.parse(window.Capture.GetResolution(szDeviceIndex))
  for (var i = 0; i < strResolutions.Resolution.length; i++) {
    var resolution = strResolutions.Resolution[i].toString()
    var option = $('<option/>').attr('value', resolution).text(resolution)
    $select.append(option)
  }
}

// 10. 设置切边类型
function SetCutPageType (value) {
  var cutPageTypeMap = {
    0: '完整图幅',
    1: '自动校正去边',
    2: '自定义切边',
    3: '人脸捕捉',
    4: '人脸捕捉并自动出图'
  }
  var iType = parseInt(value)
  if (window.Capture.SetCutPageType(szDeviceIndex, iType.toString()) == 0) {
    iCutPageType = value
    WriteInfomation('设置切边方式为：' + cutPageTypeMap[iType])
  } else {
    WriteInfomation('设置切边方式失败')
  }
}

// 设置颜色模式
function SetColorMode (value) {
  var iType = parseInt(value)
  switch (iType) {
    case 0:
      iColorMode = 0
      window.Capture.SetColorMode(szDeviceIndex, '0')
      break
    case 1:
      iColorMode = 1
      window.Capture.SetColorMode(szDeviceIndex, '1')
      break
    case 2:
      iColorMode = 2
      window.Capture.SetColorMode(szDeviceIndex, '2')
      break
    default:
      break
  }
}

// 设置文件保存格式
function SetFileType (value) {
  var iFileTye = parseInt(value)
  switch (iFileTye) {
    case 0:
      szPostfix = '.jpg'
      break
    case 1:
      szPostfix = '.bmp'
      break
    case 2:
      szPostfix = '.png'
      break
    case 3:
      szPostfix = '.tif'
      break
    case 4:
      szPostfix = '.pdf'
      break
    default:
      szPostfix = '.jpg'
      break
  }
}

// 设置分辨率
function SetResIndex (value) {
  var szResSel = value.split('*')
  var iW = parseInt(szResSel[0])
  var iH = parseInt(szResSel[1])
  if (window.Capture.SetResolution(szDeviceIndex, iW.toString(), iH.toString()) == 0) {
    WriteInfomation('设置分辨率成功,将重新打开设备')
  } else {
    WriteInfomation('设置分辨率失败')
  }
}

// 设置拍照存档的DPI
function SetDPI (iDPIValue) {
  if (iDPIValue == '') {
    alert('DPI值都不能为空！')
    return
  }
  if (isDigit(iDPIValue)) {
    var iDpi = parseInt(iDPIValue)
    if (window.Capture.SetImagePara(szDeviceIndex, '0', iDpi.toString()) == 0) {
      WriteInfomation('DPI设置成功')
    } else {
      WriteInfomation('DPI设置失败')
    }
  } else {
    alert('含有非法字符，请重新输入数字！')
  }
}

// 条形码/二维码识别
function GetBarCodeEx () {
  var strFileName = textBaseFileName.value
  var strBarCode = window.Capture.RecognizeBarcode(strFileName)
  if (strFileName == '') {
    WriteInfomation('当前图像读码结果为：\r\n' + strBarCode)
  } else {
    WriteInfomation('指定文件' + strFileName + '读码结果为：\r\n' + strBarCode)
  }
}
// 获取base64字符串
function GetBase64Ex (strFileName) {
  strFileName = strFileName || null
  if (!strFileName) {
    alert('请选择文件进行Base64编码')
  }
  var strBase64 = window.Capture.EncodeBase64(strFileName)// 获取图像的Base64字符流;
  return strBase64
}

// 摄像旋转
function SetDeviceRotation (rotation) {
  var nRotation = parseInt(rotation)
  if (nRotation % 90 != 0) {
    window.Capture.SetDeviceAngle(szDeviceIndex, '0')// 不能被90整除的默认不旋转
  }
  if (nRotation == 0) {
    gRotation = 0
  } else {
    gRotation = (gRotation + nRotation) % 360
  }
  // alert(rotation);
  window.Capture.SetDeviceAngle(szDeviceIndex, gRotation.toString())
}

// 设置jpg图片质量
function SetJPGQuality (iQuality) {
  if (isDigit(iQuality)) { window.Capture.SetImagePara(szDeviceIndex, '3', parseInt(iQuality).toString()) } else alert('请输入数字')
}

// 正则判断文本框中的内容是否为数字
function isDigit (iVal) {
  var patrn = /^-?\d+(\.\d+)?$/
  if (!patrn.exec(iVal)) {
    return false
  }
  return true
}

function ShowFolderFileList (folderspec) {
  var fso, f, fc
  fso = new ActiveXObject('Scripting.FileSystemObject')
  f = fso.GetFolder(folderspec)
  fc = new Enumerator(f.files)
  var s = []
  for (; !fc.atEnd(); fc.moveNext()) {
    var File = fc.item()
    var tmpStr = File.Path.substring(File.Path.lastIndexOf('.') + 1)
    if (tmpStr == 'jpg' || tmpStr == 'bmp' || tmpStr == 'png' || tmpStr == 'tif') {
      s.push(File.Path)
    }
  }
  return s
}

// 录制/停止录制视频
function SetVideoType (value) {
  iVideoType = parseInt(value)
}
function StartRecordingVideo () {
  if (window.Capture.StartRecordingVideo(szDeviceIndex, 'D:\\Test.asf') == 0) {
    WriteInfomation('开始录制视频, 视频保存在D:\\Test.asf')
  } else {
    WriteInfomation('启动录制视频失败')
  }
}
function StopRecordingVideo () {
  if (window.Capture.StopRecordingVideo(szDeviceIndex) == 0) {
    WriteInfomation('录制视频完成')
  } else {
    WriteInfomation('停止录制视频失败')
  }
}

function OpenDesFile () {
  var file = document.getElementById('OpenDesFile')
  var ext = file.value.substring(file.value.lastIndexOf('.') + 1).toLowerCase()
  if (ext != 'tif' && ext != 'jpg' && ext != 'bmp' && ext != 'png') {
    alert('请选择图片文件用于追加！')
  } else {
    szTifFileName = file.value
    WriteInfomation('以下图片文件设为待追加状态：' + szTifFileName)
  }
}
function OpenImageFile () {
  var file = document.getElementById('OpenImageFile')
  var ext = file.value.substring(file.value.lastIndexOf('.') + 1).toLowerCase()
  if (ext != 'jpg' && ext != 'bmp' && ext != 'png') {
    alert('请选择用于追加的图片(*.jpg;*.bmp;*.png)！')
  } else {
    szAddInFileName = file.value
    WriteInfomation('以下图片被设为追加源：' + szAddInFileName)
  }
}

function CheckIEVersion () {
  var iDx = 6
  var b = document.createElement('b')
  for (; iDx < 12; iDx++) {
    b.innerHTML = '<!--[if IE ' + iDx + ']><i></i><![endif]-->'

    if (b.getElementsByTagName('i').length === 1) {
      break
    }
  }
  return iDx
}
// 获取设备硬件码
function BtnHID () {
  var strHID = window.Capture.GetDeviceDetails()
  WriteInfomation('设备信息为' + strHID)
}
