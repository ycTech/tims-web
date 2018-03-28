var ScannerTypeMap = {
  czur: 'scanner-czur.html',
  founder: 'scanner-founder.html',
  zhelin: 'scanner-zhelin.html'
}
ScannerOcx = {
  start: function () {
    alert('启动失败：扫描设备控件未加载，请确认在IE环境下，并且允许加载Ocx控件！');
  },
  scan: function () {
    alert('扫描失败：设备未启动！')
  },
  merge: function () {
    alert('合并失败：设备未启动！')
  },
  upload: function () {
    alert('上传失败：设备未启动！')
  }
}
$(function () {
  // 初始化事件监听
  initEventListening()
  $('[data-toggle="tooltip"]').tooltip()

  // 默认加载成者高拍仪
  loadHtml(ScannerTypeMap['czur'])
})

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

  $('#action-button__scan').click(function (e) { 
    e.preventDefault()
    ScannerOcx.scan()
  })

  $('#action-button__merge').click(function (e) { 
    e.preventDefault()
    ScannerOcx.merge()
  })

  $('#action-button__upload').click(function (e) { 
    e.preventDefault()
    ScannerOcx.upload()
  })
}

function onDeviceTypeChange () {
  $('#device-select').change(function (e) {
    e.preventDefault()
    var type = $(this).children('option:selected').val()
    console.log('设备类型改变', type)
    loadHtml(ScannerTypeMap[type])
  })
}

function loadHtml (htmlPath) {
  $.get(htmlPath, function (data) {
    $('#scanner-iframe').html(data)
  })
}
