
// ICaptureVideoMFCTestDlg.h : 头文件
//

#pragma once
#include "icapturevideoctrl.h"
#include "afxwin.h"


// CICaptureVideoMFCTestDlg 对话框
class CICaptureVideoMFCTestDlg : public CDialog
{
// 构造
public:
	CICaptureVideoMFCTestDlg(CWnd* pParent = NULL);	// 标准构造函数

// 对话框数据
	enum { IDD = IDD_ICAPTUREVIDEOMFCTEST_DIALOG };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV 支持


// 实现
protected:
	HICON m_hIcon;

	// 生成的消息映射函数
	virtual BOOL OnInitDialog();
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()
private:
	CIcapturevideoctrl m_ocxCV;
public:
	afx_msg void OnBnClickedButtonStartDevice();
	afx_msg void OnBnClickedButtonStopDevice();
private:
	CComboBox m_cbDeviceIndex;
public:
	afx_msg void OnDestroy();
private:
	CComboBox m_cbResolutionIndex;
public:
	afx_msg void OnCbnSelchangeComboDeviceIndex();
private:
	CString m_strInfo;
	int m_iFileIdx;
public:
	afx_msg void OnBnClickedRadioFullImage();
	afx_msg void OnBnClickedRadioAutoCut();
	afx_msg void OnBnClickedRadioCustomCut();
	afx_msg void OnBnClickedButtonCapture();
	afx_msg void OnBnClickedButtonSetPara();
	afx_msg void OnBnClickedButtonStartRecording();
	afx_msg void OnBnClickedButtonStopRecording();
	afx_msg void OnBnClickedRadioFaceDetect();
	afx_msg void OnBnClickedButtonFaceVertify();
	afx_msg void OnBnClickedButtonGetDeviceDetails();
	DECLARE_EVENTSINK_MAP()
	void GetFaceImage(LPCTSTR szFaceImageFileName);
private:
	BOOL m_bMarkAsMultiPageSource;
public:
	afx_msg void OnBnClickedButtonMakeMultipageFile();
private:
	CString m_strFile1Name;
	CString m_strFile2Name;
public:
	afx_msg void OnBnClickedButtonMerge();
	afx_msg void OnBnClickedButtonFaceVertify2Image();
	afx_msg void OnBnClickedButtonLivingReg();
	void GetLivingRecognizeResult(LPCTSTR szLivingRecognizeResult);
};
