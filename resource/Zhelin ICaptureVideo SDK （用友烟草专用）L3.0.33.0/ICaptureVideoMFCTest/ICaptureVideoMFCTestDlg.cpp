
// ICaptureVideoMFCTestDlg.cpp : ʵ���ļ�
//

#include "stdafx.h"
#include "ICaptureVideoMFCTest.h"
#include "ICaptureVideoMFCTestDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CICaptureVideoMFCTestDlg �Ի���




CICaptureVideoMFCTestDlg::CICaptureVideoMFCTestDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CICaptureVideoMFCTestDlg::IDD, pParent)
	, m_strInfo(_T(""))
	, m_bMarkAsMultiPageSource(FALSE)
	, m_strFile1Name(_T(""))
	, m_strFile2Name(_T(""))
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CICaptureVideoMFCTestDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_ICAPTUREVIDEOCTRL, m_ocxCV);
	DDX_Control(pDX, IDC_COMBO_DEVICE_INDEX, m_cbDeviceIndex);
	DDX_Control(pDX, IDC_COMBO_RESOLUTION_INDEX, m_cbResolutionIndex);
	DDX_Text(pDX, IDC_EDIT_INFOMATION, m_strInfo);
	DDX_Check(pDX, IDC_CHECK_MARK_MULTI_PAGE_SOURCE, m_bMarkAsMultiPageSource);
	DDX_Text(pDX, IDC_EDIT_FILE1_FOR_MERGE, m_strFile1Name);
	DDX_Text(pDX, IDC_EDIT_FILE2_FOR_MERGE, m_strFile2Name);
}

BEGIN_MESSAGE_MAP(CICaptureVideoMFCTestDlg, CDialog)
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	ON_BN_CLICKED(IDC_BUTTON_START_DEVICE, &CICaptureVideoMFCTestDlg::OnBnClickedButtonStartDevice)
	ON_BN_CLICKED(IDC_BUTTON_STOP_DEVICE, &CICaptureVideoMFCTestDlg::OnBnClickedButtonStopDevice)
	ON_WM_DESTROY()
	ON_CBN_SELCHANGE(IDC_COMBO_DEVICE_INDEX, &CICaptureVideoMFCTestDlg::OnCbnSelchangeComboDeviceIndex)
	ON_BN_CLICKED(IDC_RADIO_FULL_IMAGE, &CICaptureVideoMFCTestDlg::OnBnClickedRadioFullImage)
	ON_BN_CLICKED(IDC_RADIO_AUTO_CUT, &CICaptureVideoMFCTestDlg::OnBnClickedRadioAutoCut)
	ON_BN_CLICKED(IDC_RADIO_CUSTOM_CUT, &CICaptureVideoMFCTestDlg::OnBnClickedRadioCustomCut)
	ON_BN_CLICKED(IDC_BUTTON_CAPTURE, &CICaptureVideoMFCTestDlg::OnBnClickedButtonCapture)
	ON_BN_CLICKED(IDC_BUTTON_SET_PARA, &CICaptureVideoMFCTestDlg::OnBnClickedButtonSetPara)
	ON_BN_CLICKED(IDC_BUTTON_START_RECORDING, &CICaptureVideoMFCTestDlg::OnBnClickedButtonStartRecording)
	ON_BN_CLICKED(IDC_BUTTON_STOP_RECORDING, &CICaptureVideoMFCTestDlg::OnBnClickedButtonStopRecording)
	ON_BN_CLICKED(IDC_RADIO_FACE_DETECT, &CICaptureVideoMFCTestDlg::OnBnClickedRadioFaceDetect)
	ON_BN_CLICKED(IDC_BUTTON_FACE_VERTIFY, &CICaptureVideoMFCTestDlg::OnBnClickedButtonFaceVertify)
	ON_BN_CLICKED(IDC_BUTTON_GET_DEVICE_DETAILS, &CICaptureVideoMFCTestDlg::OnBnClickedButtonGetDeviceDetails)
	ON_BN_CLICKED(IDC_BUTTON_MAKE_MULTIPAGE_FILE, &CICaptureVideoMFCTestDlg::OnBnClickedButtonMakeMultipageFile)
	ON_BN_CLICKED(IDC_BUTTON_MERGE, &CICaptureVideoMFCTestDlg::OnBnClickedButtonMerge)
	ON_BN_CLICKED(IDC_BUTTON_FACE_VERTIFY_2_IMAGE, &CICaptureVideoMFCTestDlg::OnBnClickedButtonFaceVertify2Image)
	ON_BN_CLICKED(IDC_BUTTON_LIVING_REG, &CICaptureVideoMFCTestDlg::OnBnClickedButtonLivingReg)
END_MESSAGE_MAP()


// CICaptureVideoMFCTestDlg ��Ϣ�������

BOOL CICaptureVideoMFCTestDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	// ���ô˶Ի����ͼ�ꡣ��Ӧ�ó��������ڲ��ǶԻ���ʱ����ܽ��Զ�
	//  ִ�д˲���
	SetIcon(m_hIcon, TRUE);			// ���ô�ͼ��
	SetIcon(m_hIcon, FALSE);		// ����Сͼ��

	// TODO: �ڴ���Ӷ���ĳ�ʼ������
	m_ocxCV.InitDevice();
	int iDeviceCount = m_ocxCV.GetDeviceCount();
	if (iDeviceCount > 0 )
	{
		m_cbDeviceIndex.AddString(L"�ĵ��豸");
	}
	if (iDeviceCount > 1)
	{
		m_cbDeviceIndex.AddString(L"��һ�����豸");
	}
	if (iDeviceCount > 2)
	{
		m_cbDeviceIndex.AddString(L"�ڶ������豸");
	}
	m_cbDeviceIndex.SetCurSel(0);
	OnCbnSelchangeComboDeviceIndex();
	m_iFileIdx = 0;
	return TRUE;  // ���ǽ��������õ��ؼ������򷵻� TRUE
}

// �����Ի��������С����ť������Ҫ����Ĵ���
//  �����Ƹ�ͼ�ꡣ����ʹ���ĵ�/��ͼģ�͵� MFC Ӧ�ó���
//  �⽫�ɿ���Զ���ɡ�

void CICaptureVideoMFCTestDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // ���ڻ��Ƶ��豸������

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// ʹͼ���ڹ����������о���
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// ����ͼ��
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialog::OnPaint();
	}
}

//���û��϶���С������ʱϵͳ���ô˺���ȡ�ù��
//��ʾ��
HCURSOR CICaptureVideoMFCTestDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonStartDevice()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	int iDevIdx = m_cbDeviceIndex.GetCurSel();
	strDevIdx.Format(L"%d", iDevIdx);
	int iResult = m_ocxCV.StartDevice(strDevIdx);
	if (iDevIdx == 0)
	{
		m_ocxCV.SetResolution(strDevIdx, L"2592", L"1944");
		m_ocxCV.SetCutPageType(strDevIdx, L"1");
	}
	else
	{
		m_ocxCV.SetResolution(strDevIdx, L"640", L"480");
		m_ocxCV.SetCutPageType(strDevIdx, L"3");
	}
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %sʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}


void CICaptureVideoMFCTestDlg::OnBnClickedButtonStopDevice()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.StopDevice(strDevIdx);
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"ֹͣ�豸 %s�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"ֹͣ�豸 %sʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnDestroy()
{
	m_ocxCV.ReleaseDevice();
	CDialog::OnDestroy();
	// TODO: Add your message handler code here
}

void CICaptureVideoMFCTestDlg::OnCbnSelchangeComboDeviceIndex()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
// 	CString strResolutionJSON = m_ocxCV.GetResolution(strDevIdx);
// 	//CString strResJSON = m_ocxCV.GetResolutionEx(iDeviceIdx);
// 	int iLen = strResolutionJSON.GetLength();
// 	char *pResJson = new char[strResolutionJSON.GetLength() + 1]();
// 	CStringAndFilePro::CvtChar(strResolutionJSON, pResJson, strResolutionJSON.GetLength());
// 	pResJson[strResolutionJSON.GetLength()] = '\0';
// 	Json::Reader reader;
// 	Json::Value root;
// 	//m_vRes.clear();
// 	m_cbResolutionIndex.ResetContent();
// 	if (reader.parse(pResJson, root)) 
// 	{
// 		Json::Value list = root["Resolution"];
// 		for(int iDx = 0; iDx < list.size(); iDx++)
// 		{
// 			//std::string szRes = list[iDx].asCString();
// 			//CString strRes = CString(szRes.c_str());
// 			CString strRes = CString(list[iDx].asCString());
// // 			Res resTmp;
// // 			resTmp.m_iWidth = _wtoi(strRes.Left(strRes.Find(L"*")));
// // 			resTmp.m_iHeight = _wtoi(strRes.Right(strRes.GetLength() - strRes.Find(L"*") - 1));
// //			m_vRes.push_back(resTmp);
// 			m_cbResolutionIndex.AddString(strRes);
// 		}
// 	}
// 	m_cbResolutionIndex.SetCurSel(0);
	MessageBox(m_ocxCV.GetResolution(strDevIdx));
}

void CICaptureVideoMFCTestDlg::OnBnClickedRadioFullImage()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.SetCutPageType(strDevIdx, L"0");
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 0�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 0ʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedRadioAutoCut()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.SetCutPageType(strDevIdx, L"1");
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 1�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 1ʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedRadioCustomCut()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.SetCutPageType(strDevIdx, L"2");
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 2�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 2ʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonCapture()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	CString strFileName;
	strFileName.Format(L"D:\\DocImage\\ocxTest\\%d.jpg", m_iFileIdx);
	int iResult = m_ocxCV.CaptureImage(strDevIdx, strFileName);
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�豸 %s��ȡͼƬ�� %s�ɹ�", strDevIdx, strFileName);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�豸 %s��ȡͼƬ�� %sʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, strFileName, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	m_strInfo.AppendFormat(L"\r\nͼƬBase64��Ϊ%s", m_ocxCV.EncodeBase64(strFileName));
	m_strInfo.AppendFormat(L"\r\nʶ��������Ϊ%s", m_ocxCV.RecognizeBarcode(strFileName));

	if (m_bMarkAsMultiPageSource == TRUE)
	{
		CString strPageNumber;
		strPageNumber.Format(L"%d", m_iFileIdx);
		m_ocxCV.MakeMultiPageFile(strFileName, strPageNumber, L"0");
	}
	m_iFileIdx++;
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonSetPara()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.SetImagePara(strDevIdx, L"0", L"120");
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %sDPIΪ120�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %sDPIΪ120ʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonStartRecording()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	CString strFileName;
	strFileName.Format(L"D:\\DocImage\\ocxTest\\%d.asf", m_iFileIdx);
	int iResult = m_ocxCV.StartRecordingVideo(strDevIdx, strFileName);
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�豸 %s����¼����Ƶ�� %s�ɹ�", strDevIdx, strFileName);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�豸 %s����¼����Ƶ�� %sʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, strFileName, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	m_iFileIdx++;
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonStopRecording()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.StopRecodingVideo(strDevIdx);
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�豸 %sֹͣ¼����Ƶ�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�豸 %sֹͣ¼����Ƶʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedRadioFaceDetect()
{
	// TODO: Add your control notification handler code here
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	int iResult = m_ocxCV.SetCutPageType(strDevIdx, L"4");
	UpdateData(TRUE);
	if (iResult == 0)
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 4�ɹ�", strDevIdx);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	else
	{
		CString strTmp;
		strTmp.Format(L"�����豸 %s�б߷�ʽΪ 4ʧ�ܣ�ʧ�ܴ���Ϊ%d", strDevIdx, iResult);
		m_strInfo = strTmp + L"\r\n" + m_strInfo;
	}
	UpdateData(FALSE);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonFaceVertify()
{
	// TODO: Add your control notification handler code here
	CString strPhotoName;
	strPhotoName.Format(L"D:\\DocImage\\ocxTest\\%d.jpg", m_iFileIdx);
	CString strResult = m_ocxCV.ReadIDCard(strPhotoName);
	MessageBox(strResult, L"IDCard", MB_OK);
	if (strResult == CString())
	{
		MessageBox(L"ʶ������֤ʧ��");
		return;
	}
	m_iFileIdx++;
	//m_ocxCV.SetCutPageType(L"1", L"3");
	CString strFaceName;
	strFaceName.Format(L"D:\\DocImage\\ocxTest\\%d.jpg", m_iFileIdx);
	if(m_ocxCV.CaptureImage(L"1", strFaceName) != 0)
	{
		MessageBox(L"��ȡ����ʵʱͼ��ʧ��");
		return;
	}
	int iSimilarity = m_ocxCV.FaceVertify(strPhotoName, strFaceName);
	if (iSimilarity < 0 || iSimilarity > 100)
	{
		MessageBox(L"��֤�ȶ�ʧ��");
	}
	else
	{
		CString strMsg;
		strMsg.Format(L"�ȶԳɹ������ƶ�Ϊ%d", iSimilarity);
		MessageBox(strMsg);
	}
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonGetDeviceDetails()
{
	// TODO: Add your control notification handler code here
	UpdateData(TRUE);
	m_strInfo.Append(m_ocxCV.GetDeviceDetails());
	UpdateData(FALSE);
}
BEGIN_EVENTSINK_MAP(CICaptureVideoMFCTestDlg, CDialog)
	ON_EVENT(CICaptureVideoMFCTestDlg, IDC_ICAPTUREVIDEOCTRL, 4, CICaptureVideoMFCTestDlg::GetFaceImage, VTS_BSTR)
	ON_EVENT(CICaptureVideoMFCTestDlg, IDC_ICAPTUREVIDEOCTRL, 6, CICaptureVideoMFCTestDlg::GetLivingRecognizeResult, VTS_BSTR)
END_EVENTSINK_MAP()

void CICaptureVideoMFCTestDlg::GetFaceImage(LPCTSTR szFaceImageFileName)
{
	// TODO: Add your message handler code here
	MessageBox(szFaceImageFileName);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonMakeMultipageFile()
{
	// TODO: Add your control notification handler code here
	CString strFileName(L"D:\\DocImage\\ocxTest\\MakeTIFTest.tif");
	m_ocxCV.MakeMultiPageFile(strFileName, L"0", L"3");
	strFileName = CString(L"D:\\DocImage\\ocxTest\\MakePDFTest.pdf");
	m_ocxCV.MakeMultiPageFile(strFileName, L"0", L"3");
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonMerge()
{
	// TODO: Add your control notification handler code here
	UpdateData(TRUE);
	m_ocxCV.Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\ocxTest\\MergeLR.tif", L"0");
	m_ocxCV.Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\ocxTest\\MergeLR.jpg", L"0");
	m_ocxCV.Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\ocxTest\\MergeTB.tif", L"1");
	m_ocxCV.Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\ocxTest\\MergeTB.jpg", L"1");
// 	Z_Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\APITest\\MergeLR.tif", 0);
// 	Z_Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\APITest\\MergeLR.jpg", 0);
// 	Z_Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\APITest\\MergeTB.tif", 1);
// 	Z_Merge2Images(m_strFile1Name, m_strFile2Name, L"d:\\docimage\\APITest\\MergeTB.jpg", 1);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonFaceVertify2Image()
{
	// TODO: Add your control notification handler code here
	UpdateData(TRUE);
	m_ocxCV.FaceVertify(m_strFile1Name, m_strFile2Name);
}

void CICaptureVideoMFCTestDlg::OnBnClickedButtonLivingReg()
{
	// TODO: Add your control notification handler code here
	UpdateData(TRUE);
	CString strDevIdx;
	strDevIdx.Format(L"%d", m_cbDeviceIndex.GetCurSel());
	m_ocxCV.StartLivingRecognize(strDevIdx, L"1", L"10000");
}

void CICaptureVideoMFCTestDlg::GetLivingRecognizeResult(LPCTSTR szLivingRecognizeResult)
{
	// TODO: Add your message handler code here
	MessageBox(szLivingRecognizeResult);
}
