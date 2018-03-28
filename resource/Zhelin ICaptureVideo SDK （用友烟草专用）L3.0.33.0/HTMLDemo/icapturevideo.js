var szDeviceIndex = '0';// 设备的编号；   0：文档摄像头;1：人像摄像头
var iColorMode = '0';// 设定获取的图像的色彩模式；   0: 彩色，1: 灰度，2: 黑白。
var nDpi = 200//设定拍照后图像存档的DPI;
var szPostfix = '.jpg';
var Capture//必须得获取object对象
var Content
var imgeId = 0
var ResSelect//必须取得分辨率标签对象
var strMergeSource1//合并图像源文件1
var strMergeSource2//合并图像源文件2
var strFilePath = 'D:\\DocImage\\';
var strFileNames = new Array()
var szTifFileName
var szAddInFileName
var continueNo = 1
var szContinuePath
var bContinueToTiff = 0
var szFileForBase64 = '';
var iDeviceStatus = -1
var iCutPageType = -1
var iWaterMarkType = -1
var iVideoType = 0

//打开设备
function StartDevice (value) {
  var iType = parseInt(value)
	szDeviceIndex = iType.toString()
	for (var iDx = 0; iDx < 3; iDx++) {
    if (iDx == iType) {
      continue
		}
    Capture.StopDevice(iDx.toString())
	}
  if (Capture.StartDevice(szDeviceIndex) == 0) {
    WriteInfomation('启动设备' + iType.toString() + '成功')
		FillInRes()
	} else {
    WriteInfomation('启动设备' + iType.toString() + '失败')
	}
}
// 读取分辨率列表
function FillInRes () {
  var iResVecLenth = ResSelect.options.length
	for (var i = 0; i < iResVecLenth; i++) {
    ResSelect.options.remove(0)	//清除分辨率select选项内容
	}
  var strResolutions = JSON.parse(Capture.GetResolution(szDeviceIndex))
	for (var i = 0; i < strResolutions.Resolution.length; i++) {
    var resopp = new Option(strResolutions.Resolution[i].toString(), i.toString())
		ResSelect.add(resopp)
	}
}
// 关闭设备
function StopDevice () {
  Capture.StopDevice(szDeviceIndex)
}
// 获取控件版本信息
function GetOcxVersion () {
  WriteInfomation('控件产品版本:' + Capture.GetVersion())
}

// 切边类型
function SetCutPageType (value) {
  var iType = parseInt(value)
	if (Capture.SetCutPageType(szDeviceIndex, iType.toString()) == 0) {
    WriteInfomation('设置切边方式为' + iType)
	} else {
    WriteInfomation('设置切边方式失败')
	}
}

// 设置颜色模式
function SetColorMode (value) {
  var iType = parseInt(value)
	switch (iType) {
    case 0:
    {
      iColorMode = 0
				Capture.SetColorMode(szDeviceIndex, '0')
				break;
    }
    case 1:
    {
      iColorMode = 1
				Capture.SetColorMode(szDeviceIndex, '1')
				break;
    }
    case 2:
    {
      iColorMode = 2
				Capture.SetColorMode(szDeviceIndex, '2')
				break;
    }
    default:
    {
      break
			}
  }
}

// 设置文件保存格式
function SetFileType (value) {
  var iFileTye = parseInt(value)
  switch (iFileTye) {
    case 0:
      szPostfix = '.jpg';
      break
		case 1:
      szPostfix = '.bmp';
      break
		case 2:
      szPostfix = '.png';
      break
		case 3:
      szPostfix = '.tif';
      break
		case 4:
      szPostfix = '.pdf';
      break
		default:
      szPostfix = '.jpg';
      break
	}
}

// 设置分辨率
function SetResIndex (value) {
  var iIndex = parseInt(value)
	var szResSel = ResSelect.options[iIndex].text.split('*')
	var iW = parseInt(szResSel[0])
	var iH = parseInt(szResSel[1])
	if (Capture.SetResolution(szDeviceIndex, iW.toString(), iH.toString()) == 0) {
    WriteInfomation('设置分辨率成功,将重新打开设备')
	} else {
    WriteInfomation('设置分辨率失败')
	}
}

// 设置拍照存档的DPI
function SetDPI (iDPIValue) {
  if (iDPIValue == '') {
    alert('DPI值都不能为空！')
		return;
  }
  if (isDigit(iDPIValue)) {
    iDpi = parseInt(iDPIValue)
		if (Capture.SetImagePara(szDeviceIndex, '0', iDpi.toString()) == 0)
      {WriteInfomation("DPI设置成功");}
    else {
      WriteInfomation('DPI设置失败')
		}
  } else {
    alert('含有非法字符，请重新输入数字！')
	}
}

// 拍照并且存档,若勾选条码则一起获取条码信息
function CaptureToFile () {
  var strFileName
	strFileName = strFilePath + imgeId.toString() + szPostfix
	Capture.CaptureImage(szDeviceIndex, strFileName)
	alert('文件保存为当前目录下的' + strFileName)
	if (checkMultiSource.checked) {
    Capture.MakeMultiPageFile(strFileName, imgeId.toString(), '0')
	}
  if (szPostfix != '.pdf' && szPostfix != '.tif') {
    // strFileNames.push(strFileName);
    // Preview(0);
    strFileNames.push(Capture.EncodeBase64(strFileName))
		Preview(1)
	}
  var strBarcodeContent = '';
  imgeId++
}
// 条形码/二维码识别
function GetBarCodeEx () {
  var strFileName = textBaseFileName.value
	var strBarCode = Capture.RecognizeBarcode(strFileName)
	if (strFileName == '') {
    WriteInfomation('当前图像读码结果为：\r\n' + strBarCode)
	} else {
    WriteInfomation('指定文件' + strFileName + '读码结果为：\r\n' + strBarCode)
	}
}
// 获取base64字符串
function GetBase64Ex () {
  var strFileName = textBaseFileName.value
	var strBase64 = Capture.EncodeBase64(strFileName)//获取图像的Base64字符流;
	//alert(strBase64);

	//////////////////////////////////////////////////////////////////////////////////
	// ie6、ie7支持Base64图像显示的字符流大小为2k
	// ie8支持的Base64图像显示的字符流大小为32k
	// 因此此处ie8及更早的ie版本不执行Base64码显示
	// 为了更好地兼容早期浏览器，建议在服务端实现Base64码存图，
	// 显示时则指向图片地址
	// 显示的代码见本例程ShowPreview();以及ShowPreviewBase64();两个方法
	if (CheckIEVersion() > 8) {
    strFileNames.push(strBase64)
		Preview(1)
	}
  if (strFileName == '') {
    WriteInfomation('当前图像Base64编码为：\r\n' + strBase64)
	} else {
    WriteInfomation('指定文件' + strFileName + '执行Base64编码的结果：\n' + strBase64)
	}
}

// 摄像旋转
function SetDeviceRotation (rotation) {
  var nRotation = parseInt(rotation)
	if (nRotation % 90 != 0) {
    Capture.SetDeviceAngle(szDeviceIndex, '0')//不能被90整除的默认不旋转
	}
  // alert(rotation);
  Capture.SetDeviceAngle(szDeviceIndex, nRotation.toString())
}

// 设置jpg图片质量
function SetJPGQuality (iQuality) {
  if (isDigit(iQuality))
    {Capture.SetImagePara(szDeviceIndex, "3", parseInt(iQuality).toString());}
  else alert('请输入数字')
}

// 正则判断文本框中的内容是否为数字
function isDigit (iVal) {
  var patrn = /^-?\d+(\.\d+)?$/
	if (!patrn.exec(iVal)) {
    return false
  }
  return true
}

function BtnCreateMultiPageFile () {
  if (Capture.MakeMultiPageFile('d:\\DocImage\\CreatePdf.pdf', '0', '3') == 0) {
    alert('d:\\DocImage\\CreatePdf.pdf创建成功')
	}
  if (Capture.MakeMultiPageFile('d:\\DocImage\\CreateTIF.tif', '0', '3') == 0) {
    alert('d:\\DocImage\\CreateTIF.tif创建成功')
	}
}

function ShowFolderFileList (folderspec) {
  var fso, f, fc
	fso = new ActiveXObject('Scripting.FileSystemObject')
	f = fso.GetFolder(folderspec)
	fc = new Enumerator(f.files)
	var s = new Array()
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
  if (Capture.StartRecordingVideo(szDeviceIndex, 'D:\\Test.asf') == 0) {
    WriteInfomation('开始录制视频, 视频保存在D:\\Test.asf')
	} else {
    WriteInfomation('启动录制视频失败')
	}
}
function StopRecordingVideo () {
  if (Capture.StopRecordingVideo(szDeviceIndex) == 0) {
    WriteInfomation('录制视频完成')
	} else {
    WriteInfomation('停止录制视频失败')
	}
}

function OpenDesFile() {
	var file = document.getElementById("OpenDesFile");
	var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
	if (ext != 'tif' && ext != 'jpg' && ext != 'bmp' && ext != 'png') {
		alert("请选择图片文件用于追加！");
		
	}
	else {
		szTifFileName = file.value;
		WriteInfomation("以下图片文件设为待追加状态：" + szTifFileName);
	}
}
function OpenImageFile() {
	var file = document.getElementById("OpenImageFile");
	var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
	if (ext != 'jpg' && ext != 'bmp' && ext != 'png') {
		alert("请选择用于追加的图片(*.jpg;*.bmp;*.png)！");
		
	}
	else {
		szAddInFileName = file.value;
		WriteInfomation("以下图片被设为追加源：" + szAddInFileName);
	}
}

// 形成预览图
function Preview (iValue) {
  var iPreViewType = parseInt(iValue)
  if (strFileNames.length > 3) {
    var pic1 = document.getElementById('preview1')
		var pic2 = document.getElementById('preview2')
		var pic3 = document.getElementById('preview3')
		pic1.style.filter = pic2.style.filter
		pic1.src = pic2.src
		pic2.style.filter = pic3.style.filter
		pic2.src = pic3.src
		if (iPreViewType == 0) {
      ShowPreview(strFileNames[strFileNames.length - 1], 3)
		} else {
      ShowPreviewBase64(strFileNames[strFileNames.length - 1], 3)
		}
  } else {
    if (iPreViewType == 0) {
      ShowPreview(strFileNames[strFileNames.length - 1], strFileNames.length)
		} else {
      ShowPreviewBase64(strFileNames[strFileNames.length - 1], strFileNames.length)
		}
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
function ShowPreviewBase64 (strFileName, PreviewWinsowsNo) {
  if (CheckIEVersion() > 8) {
    var pic = document.getElementById('preview' + PreviewWinsowsNo)
		pic.src = 'data:image/gif;base64,' + strFileName
	}
}
function ShowPreview (strFileName, PreviewWinsowsNo) {
  var pic = document.getElementById('preview' + PreviewWinsowsNo)
	var ext = strFileName.substring(strFileName.lastIndexOf('.') + 1).toLowerCase()
	// gif在IE浏览器暂时无法显示
	if (ext != 'png' && ext != 'jpg' && ext != 'bmp' && ext != 'tif') {
    alert('文件必须为图片！')
		return;
  }
  // IE浏览器
  // IE6浏览器设置img的src为本地路径可以直接显示图片
  if (CheckIEVersion() === 6) {
    pic.src = strFileName
	} else {
    // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现
    pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + strFileName + '")';
    // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
    pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
	}
}

// 获取设备硬件码
function BtnHID () {
  var strHID = Capture.GetDeviceDetails()
	WriteInfomation('设备信息为' + strHID)
}

// 把相关信息写入操作记录编辑框中
function WriteInfomation (strInfo) {
  Content.value += ('\r\n' + strInfo)
}

function Init () {
  Capture.InitDevice()
	StartDevice(0)
}

function FaceVertify () {
  if (Capture.ReadIDCard('d:\\DocImage\\IDCard.jpg') == '') {
    WriteInfomation('读取二代证信息失败')
		return;
  }

  var iResult = Capture.CaptureImage(szDeviceIndex, 'd:\\DocImage\\face.jpg')
	if (iResult != 0) {
    WriteInfomation('获取人脸图片失败，错误代码' + iResult)
		return;
  }

  strFileNames.push(Capture.EncodeBase64('d:\\DocImage\\IDCard.jpg'))
	Preview(1)
	strFileNames.push(Capture.EncodeBase64('d:\\DocImage\\face.jpg'))
	Preview(1)
	iResult = Capture.FaceVertify('d:\\DocImage\\IDCard.jpg', 'd:\\DocImage\\face.jpg')
	WriteInfomation('人证比对相似度为' + iResult)
}

function CatchGetFaceImage (szFileName) {
  WriteInfomation('获取实时人脸图片' + szFileName)
}

function CatchButtonMessage (iButtonType) {
  alert(iButtonType)
}

function CatchInitFinishedMessage () {
  Capture.InitDevice()
	//StartDevice(0);
}

function ReadIDCard () {
  var strIDCardJSONStr = Capture.ReadIDCard('d:\\DocImage\\IDCard.jpg')
	var strIDCardJSON = JSON.parse(strIDCardJSONStr)
	var strIDCardContent = strIDCardJSON.IDCardInfo.name + '\r\n' +
		strIDCardJSON.IDCardInfo.sex + '\r\n' +
		strIDCardJSON.IDCardInfo.nation + '\r\n' +
		strIDCardJSON.IDCardInfo.birthday + '\r\n' +
		strIDCardJSON.IDCardInfo.address + '\r\n' +
		strIDCardJSON.IDCardInfo.cardID + '\r\n' +
		strIDCardJSON.IDCardInfo.issueOrgan + '\r\n' +
		strIDCardJSON.IDCardInfo.validStart + '\r\n' +
		strIDCardJSON.IDCardInfo.validEnd
	strFileNames.push(strIDCardJSON.IDCardInfo.picBase64)
	Preview(1)
	WriteInfomation(strIDCardContent)
}
