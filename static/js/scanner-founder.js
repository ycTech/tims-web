// {"code":200,"msg":"\u64cd\u4f5c\u6210\u529f","data":"http://192.168.1.195/group1/M00/00/00/wKgBw1rKJ-SAZZKoAAAEX-4DxsU348.jpg"}
ScannerOcx = {
  start: function () {
    if (!isOcxInstalled()) {
      return false
    }

    GetScannerName()
  },
  scan: function () {
    if (!isOcxInstalled()) {
      return false
    }

    Scan()
  },
  merge: function () {
    if (!isOcxInstalled()) {
      return false
    }

    SaveAsPDF()
  },
  upload: function () {
    if (!isOcxInstalled()) {
      return false
    }

    // TODO: Upload PdfFile
  }
}

$(function () {
  ScannerOcx.start()
})

function isOcxInstalled () {
  try {
    if (!window.FScanX) {
      $notify('方正扫描仪Ocx控件未正确加载，请确保在IE8~IE11环境下，并且Ocx控件已正确加载，如有任何问题，请联系管理员！', 'danger')
      return false
    }
  } catch (error) {
    $notify('方正扫描仪Ocx控件未正确加载，请确保在IE8~IE11环境下，并且Ocx控件已正确加载，如有任何问题，请联系管理员！', 'danger')
    return false
  }
  return true
}
function addEventListeners () {
  if (window.attachEvent) {
    document.getElementById('FScanX').attachEvent('OnRecvMsg', OnRecvMsg)
  } else if (window.addEventListener) {
    document.getElementById('FScanX').addEventListener('OnRecvMsg', OnRecvMsg, false)
  }
}
function getFormData () {
  var dataArray = $('#FounderScanner').serializeArray()
  var formData = {}
  for (var i = 0; i < dataArray.length; i++) {
    formData[dataArray[i].name] = dataArray[i].value
  }
  console.log(JSON.stringify(formData))
  return formData
}
function OnRecvMsg (msg) {
  alert(msg)
  console.log(JSON.stringify(msg))
}
function GetScannerName () {
  var i = 0
  try {
    var ScannerCount = window.FScanX.GetScannerCount()
    var obj = document.getElementById('ScannerName')
    obj.options.length = 0
    for (i = 0; i < ScannerCount; i++) {
      var ScannerName = window.FScanX.GetScannerName(i)
      var objOption = document.createElement('OPTION')
      objOption.text = ScannerName
      objOption.value = i
      obj.options.add(objOption)
    }
    SelScanner()
  } catch (error) {
    console.log(error)
  }
}
function SelScanner () {
  var obj = document.getElementById('ScannerName')
  var index = obj.selectedIndex
  var ScannerName = obj.options[index].text
  window.FScanX.SelScannerByName(ScannerName)
}
function ThumbWH () {
  window.FScanX.ThumbWidth = document.getElementById('ThumbWidth').value
  window.FScanX.ThumbHeight = document.getElementById('ThumbHeight').value
}
function Scan () {
  window.FScanX.ScanShowUI = document.getElementById('ShowUI').value// 1为显示，0为不显示
  window.FScanX.ShowThumb = document.getElementById('ShowThumb').value// 1为显示，0为不显示
  window.FScanX.ScanSourceType = document.getElementById('SourceType').value// 0为平板，1为ADF正面，2为ADF双面
  window.FScanX.ScanPixelType = document.getElementById('PixelType').value// 0为黑白，1为灰度，2为彩色
  window.FScanX.ScanResolution = document.getElementById('Resolution').value// 分辨率
  window.FScanX.Brightness = document.getElementById('Brightness').value// 亮度
  window.FScanX.Contrast = document.getElementById('Contrast').value// 对比度
  var FilePath = document.getElementById('FilePath').value// 图像保存路径
  var FilePrefix = document.getElementById('FilePrefix').value// 图像名称前缀
  var StartIndex = document.getElementById('StartIndex').value// 图像名称起始编号
  var IndexLength = document.getElementById('IndexLength').value// 图像编号长度
  window.FScanX.SetImageName(FilePath, FilePrefix, StartIndex, IndexLength)
  window.FScanX.ImageFormat = document.getElementById('ImageFormat').value
  window.FScanX.CompressionRate = document.getElementById('CompressionRate').value
  window.FScanX.TiffCompressType = document.getElementById('TiffCompressType').value
  window.FScanX.PDFCompressType = document.getElementById('PDFCompressType').value
  window.FScanX.Scan()
  var ScanImageCount = window.FScanX.GetScanImageCount()
  document.getElementById('ScanImageCount').value = ScanImageCount
  document.getElementById('StartIndex').value = parseInt(StartIndex) + ScanImageCount
}
function ScanAdd () { // 添加扫描,添加到最后一页
  window.FScanX.ScanShowUI = document.getElementById('ShowUI').value// 1为显示，0为不显示
  window.FScanX.ShowThumb = document.getElementById('ShowThumb').value// 1为显示，0为不显示
  window.FScanX.ScanSourceType = document.getElementById('SourceType').value// 0为平板，1为ADF正面，2为ADF双面
  window.FScanX.ScanPixelType = document.getElementById('PixelType').value// 0为黑白，1为灰度，2为彩色
  window.FScanX.ScanResolution = document.getElementById('Resolution').value// 分辨率
  window.FScanX.Brightness = document.getElementById('Brightness').value// 亮度
  window.FScanX.Contrast = document.getElementById('Contrast').value// 对比度
  window.FScanX.ScanAdd()
}
function ScanIns () { // 插入扫描，添加到选中页的前面
  window.FScanX.ScanShowUI = document.getElementById('ShowUI').value// 1为显示，0为不显示
  window.FScanX.ShowThumb = document.getElementById('ShowThumb').value// 1为显示，0为不显示
  window.FScanX.ScanSourceType = document.getElementById('SourceType').value// 0为平板，1为ADF正面，2为ADF双面
  window.FScanX.ScanPixelType = document.getElementById('PixelType').value// 0为黑白，1为灰度，2为彩色
  window.FScanX.ScanResolution = document.getElementById('Resolution').value// 分辨率
  window.FScanX.Brightness = document.getElementById('Brightness').value// 亮度
  window.FScanX.Contrast = document.getElementById('Contrast').value// 对比度
  window.FScanX.ScanIns()
}
function SaveAsPDF () {
  window.FScanX.SaveAsPDF('D:\\test.pdf')
}
function DelOneImg () {
  window.FScanX.DelOneImg()
}
function DelAllImg () {
  window.FScanX.DelAllImg()
}
function ShowUISettings () {
  window.FScanX.ShowUISettings()
}
function GetScanImagePath () {
  var ImageIndex = document.getElementById('ImageIndex').value
  document.getElementById('ScanImagePath').value = window.FScanX.GetScanImagePath(ImageIndex)
}
function GetBar () {
  var BarCount = window.FScanX.GetBarCount(1)// 参数为要识别的是第几页
  var BarData = ''
  for (var i = 0; i < BarCount; i++) {
    BarData = BarData + window.FScanX.GetBarData(i) + '\n'
  }
  document.getElementById('BarData').value = BarData
}
function uploadPdf () {
  var base64 = window.FScanX.HttpSendFileEx('D:\\test.pdf', 'http:\\localhost:8080')
}
function GetImageBase64 () {
  var base64 = window.FScanX.GetImageBase64String(document.getElementById('ScanImagePath').value)
  document.getElementById('ImageBase64').value = base64
  console.log('upload base64')
  // $.post('/scanner/api/fast/base64/upload', {
  //   billNo: 'billNo',
  //   billTypeId: 'billTypeId',
  //   classifyId: 'classifyId',
  //   classifyName: 'classifyName',
  //   imageBase64: 'base64',
  //   imageName: 'test.jpg'
  // }, function (resp) {
  //   console.log('resp success')
  //   console.log(JSON.stringify(resp))
  // }).done(function () {
  //   console.log('second success')
  // }).fail(function (error) {
  //   console.log('error')
  //   console.log(JSON.stringify(error))
  // }).always(function () {
  //   console.log('finished')
  // })
  var postData = {
    billNo: 'billNo',
    billTypeId: 'billTypeId',
    classifyId: 'classifyId',
    classifyName: 'classifyName',
    imageBase64: base64,
    imageName: 'test.jpg'
  }
  console.log(new Date().getTime())
  $.ajax({
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    traditional: true,
    processData: false,
    url: '/fast/base64/upload',
    data: JSON.stringify(postData),
    success: function (resp) {
      console.log('resp success')
      console.log(new Date().getTime())
      console.log(JSON.stringify(resp))
    },
    error: function (error) {
      console.log('error')
      console.log(JSON.stringify(error))
    }
  })
}
function GetSN () {
  var strSN = window.FScanX.GetSN('154F', '3202')
  alert(strSN)
}
function HttpSendFileEx () {
  var strrep = window.FScanX.HttpSendFileEx('D:\\test.pdf', 'http:\\localhost:8080')
  alert(strrep)
}
