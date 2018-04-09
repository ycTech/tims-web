
#pragma once

#include "EtOCXEx.h"
#include "afxwin.h"

class CEtOcxExDemoDlg : public CDialogEx
{
// 构造
public:
	CEtOcxExDemoDlg(CWnd* pParent = NULL);	// 标准构造函数

	enum { IDD = IDD_ETOCXEXDEMO_DIALOG };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV 支持
	virtual BOOL OnInitDialog();

	afx_msg void	OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	afx_msg void	OnClose();

	afx_msg void	OnBnClickedBtnCzuropen();
	afx_msg void	OnBnClickedBtnCzurclose();
	afx_msg void	OnBnClickedBtnCzurgrab();
	afx_msg void	OnBnClickedBtnCzurresize();
	afx_msg void	OnBnClickedBtnCzurdpi();
	afx_msg void	OnCbnCloseupComboAngle();
	afx_msg void	OnCbnCloseupComboClrmode();
	afx_msg void	OnCbnCloseupComboFormat();
	afx_msg void	OnCbnCloseupComboIassist();
	afx_msg void	OnBnClickedBtnScan();
	afx_msg void	OnBnClickedBtnCzurpath();
	afx_msg void	OnBnClickedBtnCzurcustom();
	afx_msg void	OnHScroll(UINT nSBCode, UINT nPos, CScrollBar* pScrollBar);
	afx_msg void	OnBnClickedBtnHttpUrl();
	afx_msg void	OnBnClickedBtnHttpUserpwd();
	afx_msg void	OnBnClickedBtnHttpForm();
	afx_msg void	OnCbnCloseupComboDisplaygrid();
	afx_msg void	OnBnClickedBtnHttpUpload();

	afx_msg LRESULT OnDispatch(WPARAM wParam, LPARAM lParam);

	DECLARE_MESSAGE_MAP()

public:
	DECLARE_EVENTSINK_MAP()

	void OCX_CZUR_CALLBACK(long count, BSTR bsrBarcode, BSTR lpHttpError, BSTR lpFile1, BSTR lpFile2);

	void OCX_CZUR_UPLOAD_CALLBACK(long count, BSTR bsrFile, long errCode, BSTR errMsg);

	void OCX_CZUR_PDF_CALLBACK(long status);

private:
	HICON		m_hIcon;
	CEtOCXEx	m_EtOCXEx;
	CComboBox	m_wndCboAngle;
	CComboBox	m_wndCboClrMode;
	CComboBox	m_wndCboFormat;
	CComboBox	m_wndCboAssist;
	CSliderCtrl m_wndSliderQuality;
	CListCtrl	m_wndListFile;
	CComboBox   m_wndCboDisplayGrid;
	CStatic     m_wndSt;
	CComboBox   m_wndCboBoxtype;
public:
	afx_msg void OnCbnCloseupCboBoxtype();
private:
	CComboBox m_wndCboBlankPage;
public:
	afx_msg void OnCbnCloseupCboBlankpage();
};
