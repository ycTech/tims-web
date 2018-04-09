
#include "stdafx.h"
#include "EtOcxExDemo.h"
#include "EtOcxExDemoDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif

#define WMSG_DISPATCH	(WM_USER + 0x010)

CEtOcxExDemoDlg::CEtOcxExDemoDlg(CWnd* pParent /*=NULL*/)
	: CDialogEx(CEtOcxExDemoDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CEtOcxExDemoDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialogEx::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_COMBO_ANGLE, m_wndCboAngle);
	DDX_Control(pDX, IDC_COMBO_CLRMODE, m_wndCboClrMode);
	DDX_Control(pDX, IDC_COMBO_FORMAT, m_wndCboFormat);
	DDX_Control(pDX, IDC_COMBO_IASSIST, m_wndCboAssist);
	DDX_Control(pDX, IDC_SLIDER_QUALITY, m_wndSliderQuality);
	DDX_Control(pDX, IDC_LIST_FILE, m_wndListFile);
	DDX_Control(pDX, IDC_ST, m_wndSt);
	DDX_Control(pDX, IDC_COMBO_DISPLAYGRID, m_wndCboDisplayGrid);
	DDX_Control(pDX, IDC_CBO_BOXTYPE, m_wndCboBoxtype);
	DDX_Control(pDX, IDC_CBO_BLANKPAGE, m_wndCboBlankPage);
}

#define IDC_CZUROCX		6800

BEGIN_EVENTSINK_MAP(CEtOcxExDemoDlg, CDialogEx)
	ON_EVENT(CEtOcxExDemoDlg, IDC_CZUROCX, 1, CEtOcxExDemoDlg::OCX_CZUR_CALLBACK, VTS_I4 VTS_BSTR VTS_BSTR VTS_BSTR VTS_BSTR)
	ON_EVENT(CEtOcxExDemoDlg, IDC_CZUROCX, 2, CEtOcxExDemoDlg::OCX_CZUR_UPLOAD_CALLBACK, VTS_I4 VTS_BSTR VTS_I4 VTS_BSTR)
	ON_EVENT(CEtOcxExDemoDlg, IDC_CZUROCX, 3, CEtOcxExDemoDlg::OCX_CZUR_PDF_CALLBACK, VTS_I4)
END_EVENTSINK_MAP()

BEGIN_MESSAGE_MAP(CEtOcxExDemoDlg, CDialogEx)
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_BN_CLICKED(IDC_BTN_CZUROPEN, &CEtOcxExDemoDlg::OnBnClickedBtnCzuropen)
	ON_BN_CLICKED(IDC_BTN_CZURCLOSE, &CEtOcxExDemoDlg::OnBnClickedBtnCzurclose)
	ON_BN_CLICKED(IDC_BTN_CZURGRAB, &CEtOcxExDemoDlg::OnBnClickedBtnCzurgrab)
	ON_BN_CLICKED(IDC_BTN_CZURRESIZE, &CEtOcxExDemoDlg::OnBnClickedBtnCzurresize)
	ON_BN_CLICKED(IDC_BTN_CZURDPI, &CEtOcxExDemoDlg::OnBnClickedBtnCzurdpi)
	ON_CBN_CLOSEUP(IDC_COMBO_ANGLE, &CEtOcxExDemoDlg::OnCbnCloseupComboAngle)
	ON_CBN_CLOSEUP(IDC_COMBO_CLRMODE, &CEtOcxExDemoDlg::OnCbnCloseupComboClrmode)
	ON_CBN_CLOSEUP(IDC_COMBO_FORMAT, &CEtOcxExDemoDlg::OnCbnCloseupComboFormat)
	ON_CBN_CLOSEUP(IDC_COMBO_IASSIST, &CEtOcxExDemoDlg::OnCbnCloseupComboIassist)
	ON_BN_CLICKED(IDC_BTN_SCAN, &CEtOcxExDemoDlg::OnBnClickedBtnScan)
	ON_BN_CLICKED(IDC_BTN_CZURPATH, &CEtOcxExDemoDlg::OnBnClickedBtnCzurpath)
	ON_BN_CLICKED(IDC_BTN_CZURCUSTOM, &CEtOcxExDemoDlg::OnBnClickedBtnCzurcustom)
	ON_WM_CLOSE()
	ON_WM_HSCROLL()
	ON_BN_CLICKED(IDC_BTN_HTTP_URL, &CEtOcxExDemoDlg::OnBnClickedBtnHttpUrl)
	ON_BN_CLICKED(IDC_BTN_HTTP_USERPWD, &CEtOcxExDemoDlg::OnBnClickedBtnHttpUserpwd)
	ON_BN_CLICKED(IDC_BTN_HTTP_FORM, &CEtOcxExDemoDlg::OnBnClickedBtnHttpForm)
	ON_CBN_CLOSEUP(IDC_COMBO_DISPLAYGRID, &CEtOcxExDemoDlg::OnCbnCloseupComboDisplaygrid)
	ON_BN_CLICKED(IDC_BTN_HTTP_UPLOAD, &CEtOcxExDemoDlg::OnBnClickedBtnHttpUpload)
	ON_CBN_CLOSEUP(IDC_CBO_BOXTYPE, &CEtOcxExDemoDlg::OnCbnCloseupCboBoxtype)
	ON_CBN_CLOSEUP(IDC_CBO_BLANKPAGE, &CEtOcxExDemoDlg::OnCbnCloseupCboBlankpage)
END_MESSAGE_MAP()

BOOL CEtOcxExDemoDlg::OnInitDialog()
{
	CDialogEx::OnInitDialog();

	CRect rect;
	m_wndSt.GetWindowRect(&rect);
	ScreenToClient(&rect);

	if(!m_EtOCXEx.Create(L"", WS_CHILD | WS_VISIBLE, rect, this, IDC_CZUROCX))
	{
		MessageBox(L"Create OCX Failed");
		exit(0);
	}
	else
	{
		//初始化EtOcxEx资源
		m_EtOCXEx.CZUR_Initialize(L"VC_OCX.log");
	}

	DWORD dwStyle = m_wndListFile.GetExtendedStyle();
	dwStyle |= LVS_EX_FULLROWSELECT;
	dwStyle |= LVS_EX_GRIDLINES;
	m_wndListFile.SetExtendedStyle(dwStyle);

	m_wndListFile.InsertColumn(0, L"文件", LVCFMT_LEFT, 300);

	m_wndSliderQuality.SetRange(0, 100);
	m_wndSliderQuality.SetPos(70);

	m_wndCboDisplayGrid.InsertString(0, L"不显示网格");
	m_wndCboDisplayGrid.InsertString(1, L"显示网格");
	m_wndCboDisplayGrid.SetCurSel(0);

	m_wndCboAngle.InsertString(0, L"0°");
	m_wndCboAngle.InsertString(1, L"90°");
	m_wndCboAngle.InsertString(2, L"180°");
	m_wndCboAngle.InsertString(3, L"270°");
	m_wndCboAngle.SetCurSel(0);

	m_wndCboClrMode.InsertString(0, L"保持原图");
	m_wndCboClrMode.InsertString(1, L"彩色模式");
	m_wndCboClrMode.InsertString(2, L"白纸印章模式");
	m_wndCboClrMode.InsertString(3, L"证件底纹模式");
	m_wndCboClrMode.InsertString(4, L"黑白模式");
	m_wndCboClrMode.InsertString(5, L"灰度模式");
	m_wndCboClrMode.SetCurSel(0);

	m_wndCboBoxtype.InsertString(0, L"裁剪区域");
	m_wndCboBoxtype.InsertString(1, L"扫码区域");
	m_wndCboBoxtype.SetCurSel(0);

	m_wndCboFormat.InsertString(0, L"jpg");
	m_wndCboFormat.InsertString(1, L"bmp");
	m_wndCboFormat.SetCurSel(0);

	m_wndCboAssist.InsertString(0, L"原图不处理");
	m_wndCboAssist.InsertString(1, L"单页裁边");
	m_wndCboAssist.InsertString(2, L"书籍展平");
	m_wndCboAssist.InsertString(3, L"书籍展平(拆分双页)");
	m_wndCboAssist.SetCurSel(0);

	m_wndCboBlankPage.InsertString(0, L"不检测空白页");
	m_wndCboBlankPage.InsertString(1, L"检测空白页");
	m_wndCboBlankPage.SetCurSel(0);

	SetIcon(m_hIcon, TRUE);			// 设置大图标
	SetIcon(m_hIcon, FALSE);		// 设置小图标

	return TRUE;
}

void CEtOcxExDemoDlg::OCX_CZUR_CALLBACK(long count, BSTR bsrBarcode, BSTR lpHttpError, BSTR lpFile1, BSTR lpFile2)
{
	if(bsrBarcode)
	{
		m_wndListFile.InsertItem(0, bsrBarcode);
	}

	//图片处理完毕的事件通知
	if(lpFile1)
	{
		m_wndListFile.InsertItem(0, lpFile1);
	}

	if(lpFile2)
	{
		m_wndListFile.InsertItem(0, lpFile2);
	}
}

void CEtOcxExDemoDlg::OCX_CZUR_UPLOAD_CALLBACK(long count, BSTR bsrFile, long errCode, BSTR errMsg)
{
	CString strText;
	strText.Format(L"上传个数: %d, 错误码: %d, 错误信息: %s", count, errCode, errMsg);
	MessageBox(strText, L"上传事件通知");
}

void CEtOcxExDemoDlg::OCX_CZUR_PDF_CALLBACK(long status)
{
	if(status)
	{
		MessageBox(L"合成PDF失败");
	}
	else
	{
		MessageBox(L"合成PDF成功");
	}
}

void CEtOcxExDemoDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this);

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialogEx::OnPaint();
	}
}

HCURSOR CEtOcxExDemoDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzuropen()
{
	int error = m_EtOCXEx.CZUR_OpenDevice();
	switch(error)
	{
	case 0:
		{
			MessageBox(L"打开设备失败");
		}
		break;
	case 1:
		{
			MessageBox(L"成功打开设备");
		}
		break;
	case 2:
		{
			MessageBox(L"请检查设备是否连接或型号是否支持");
		}
		break;
	}
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzurclose()
{
	m_EtOCXEx.CZUR_CloseDevice();
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzurgrab()
{
	if(!m_EtOCXEx.CZUR_GrabSingleImage())
	{
		MessageBox(L"CZUR_GrabSingleImage() Failed");
	}
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzurresize()
{
	long xResolut = GetDlgItemInt(IDC_EDIT_X);
	long yResolut = GetDlgItemInt(IDC_EDIT_Y);

	m_EtOCXEx.CZUR_Zoom(xResolut, yResolut);
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzurdpi()
{
	WORD wdpi = (WORD)GetDlgItemInt(IDC_EDIT_DPI);

	m_EtOCXEx.CZUR_DPI(wdpi);
}

void CEtOcxExDemoDlg::OnCbnCloseupComboAngle()
{
	int iAngle = 0;
	switch(m_wndCboAngle.GetCurSel())
	{
	case 0:
		{
			iAngle = 0;
		}
		break;
	case 1:
		{
			iAngle = 90;
		}
		break;
	case 2:
		{
			iAngle = 180;
		}
		break;
	case 3:
		{
			iAngle = 270;
		}
		break;
	}
	m_EtOCXEx.CZUR_Rotate(iAngle);
}

void CEtOcxExDemoDlg::OnCbnCloseupComboClrmode()
{
	int iCurSel = m_wndCboClrMode.GetCurSel();
	if(-1 != iCurSel)
	{
		m_EtOCXEx.CZUR_ClrMode(iCurSel);
	}
}

void CEtOcxExDemoDlg::OnCbnCloseupComboFormat()
{
	switch(m_wndCboFormat.GetCurSel())
	{
	case 0:
		{
			m_wndSliderQuality.EnableWindow(TRUE);
			m_EtOCXEx.CZUR_Format_Jpg(m_wndSliderQuality.GetPos());
		}
		break;
	case 1:
		{
			m_EtOCXEx.CZUR_Format_Bmp();
			m_wndSliderQuality.EnableWindow(FALSE);
		}
		break;
	}
}

void CEtOcxExDemoDlg::OnCbnCloseupComboIassist()
{
	switch(m_wndCboAssist.GetCurSel())
	{
	case 0:
		{
			m_EtOCXEx.CZUR_Original();
		}
		break;
	case 1:
		{
			m_EtOCXEx.CZUR_EdgeCutting();
		}
		break;
	case 2:
		{
			m_EtOCXEx.CZUR_CurveFlatten(0);
		}
		break;
	case 3:
		{
			m_EtOCXEx.CZUR_CurveFlatten(1);
		}
		break;
	}
}

void CEtOcxExDemoDlg::OnBnClickedBtnScan()
{
	BROWSEINFO BrowseInfo = {0};

	BrowseInfo.hwndOwner = m_hWnd;
	BrowseInfo.lpszTitle = L"请选择保存路径";
	BrowseInfo.ulFlags   = BIF_NEWDIALOGSTYLE;

	ITEMIDLIST *pFolderList = SHBrowseForFolder(&BrowseInfo);
	if(NULL != pFolderList)
	{
		TCHAR szSavePath[1024];
		if(SHGetPathFromIDList(pFolderList, szSavePath))
		{
			//去除路径后面的'\\'
			int nLength = lstrlen(szSavePath);
			if('\\' == szSavePath[nLength - 1])
			{
				szSavePath[nLength - 1] = NULL;
			}
			::SetDlgItemText(m_hWnd, IDC_EDIT_PATH, szSavePath);
		}
	}
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzurpath()
{
	TCHAR szPath[1024];
	if(!GetDlgItemText(IDC_EDIT_PATH, szPath, 1024))
	{
		MessageBox(L"请选择保存目录");
	}
	else
	{
		m_EtOCXEx.CZUR_Path(szPath);
	}
}

void CEtOcxExDemoDlg::OnBnClickedBtnCzurcustom()
{
	TCHAR szPrefix[48];
	if(!GetDlgItemText(IDC_EDIT_PREFIX, szPrefix, 48))
	{
		MessageBox(L"请输入前缀名称");
	}
	else
	{
		int iInitNumber = GetDlgItemInt(IDC_EDIT_INITNUMBER);
		m_EtOCXEx.CZUR_Custom(szPrefix, iInitNumber);
	}
}

void CEtOcxExDemoDlg::OnClose()
{
	m_EtOCXEx.CZUR_CloseDevice();
	m_EtOCXEx.CZUR_Deinitialize();

	CDialogEx::OnClose();
}

void CEtOcxExDemoDlg::OnHScroll(UINT nSBCode, UINT nPos, CScrollBar* pScrollBar)
{
	if(SB_ENDSCROLL == nSBCode)
	{
		long lQuality = m_wndSliderQuality.GetPos();
		m_EtOCXEx.CZUR_Format_Jpg(lQuality);
	}
	CDialogEx::OnHScroll(nSBCode, nPos, pScrollBar);
}

void CEtOcxExDemoDlg::OnBnClickedBtnHttpUrl()
{
	TCHAR szURL[1024];
	TCHAR szFileId[128];

	if(!GetDlgItemText(IDC_EDIT_URL, szURL, 1024))
	{
		MessageBox(L"请输入URL");
		return;
	}

	if(!GetDlgItemText(IDC_EDIT_FILEID, szFileId, 128))
	{
		MessageBox(L"请输入FileId");
		return;
	}

	m_EtOCXEx.CZUR_Http_URL(szURL, szFileId);
}

void CEtOcxExDemoDlg::OnBnClickedBtnHttpUserpwd()
{
	TCHAR szUserName[1024];
	TCHAR szPassword[128];

	GetDlgItemText(IDC_EDIT_USERNAME, szUserName, 128);
	GetDlgItemText(IDC_EDIT_PWD, szPassword, 128);

	m_EtOCXEx.CZUR_Http_User_Pwd(szUserName, szPassword);
}

void CEtOcxExDemoDlg::OnBnClickedBtnHttpForm()
{
	TCHAR szName[1024];
	TCHAR szContent[128];

	GetDlgItemText(IDC_EDIT_FORMNAME, szName, 128);
	GetDlgItemText(IDC_EDIT_CONTENT, szContent, 128);

	m_EtOCXEx.CZUR_Http_Form(szName, szContent);
}

void CEtOcxExDemoDlg::OnCbnCloseupComboDisplaygrid()
{
	m_EtOCXEx.CZUR_DisplayGrid(m_wndCboDisplayGrid.GetCurSel());
}

void CEtOcxExDemoDlg::OnBnClickedBtnHttpUpload()
{
	TCHAR szLocalFile[1024];
	TCHAR szHttpUrl[1024];
	TCHAR szName[128];
	TCHAR szUserName[128];
	TCHAR szPassword[128];

	if(!GetDlgItemText(IDC_EDIT_LOCALFILE, szLocalFile, 1024))
	{
		MessageBox(L"请输入本地文件", L"警告");
		return;
	}

	if(!GetDlgItemText(IDC_EDIT_HTTPURL, szHttpUrl, 1024))
	{
		MessageBox(L"请输入URL", L"警告");
		return;
	}

	if(!GetDlgItemText(IDC_EDIT_FILENAME, szName, 1024))
	{
		MessageBox(L"请输入FileName", L"警告");
		return;
	}

	GetDlgItemText(IDC_EDIT_HTTPUSERNAME, szUserName, 128);
	GetDlgItemText(IDC_EDIT_HTTPPWD, szPassword, 128);

	switch(m_EtOCXEx.CZUR_Http_Upload(szLocalFile, szHttpUrl, szName, szUserName, szPassword))
	{
	case 1:
		{
			MessageBox(L"未初始化EtOcxEx资源", L"警告");
		}
		break;
	case 2:
		{
			MessageBox(L"本地文件不存在", L"警告");
		}
		break;
	case 3:
		{
			MessageBox(L"失败", L"警告");
		}
		break;
	}
}

void CEtOcxExDemoDlg::OnCbnCloseupCboBoxtype()
{
	int iCursel = m_wndCboBoxtype.GetCurSel();
	m_EtOCXEx.CZUR_SelectType(iCursel + 1);
}

void CEtOcxExDemoDlg::OnCbnCloseupCboBlankpage()
{
	int iCursel = m_wndCboBlankPage.GetCurSel();
	m_EtOCXEx.CZUR_BlankPageDetect(iCursel);
}
