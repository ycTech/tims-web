#pragma once

class CEtOCXEx : public CWnd
{
protected:
	DECLARE_DYNCREATE(CEtOCXEx)
public:
	CLSID const& GetClsid()
	{
		static CLSID const clsid
			= { 0x6BA87457, 0x4473, 0x41A1, { 0x9A, 0x48, 0x6A, 0xC4, 0x53, 0x89, 0xB9, 0x71 } };
		return clsid;
	}
	virtual BOOL Create(LPCTSTR lpszClassName, LPCTSTR lpszWindowName, DWORD dwStyle,
						const RECT& rect, CWnd* pParentWnd, UINT nID, 
						CCreateContext* pContext = NULL)
	{ 
		return CreateControl(GetClsid(), lpszWindowName, dwStyle, rect, pParentWnd, nID); 
	}

    BOOL Create(LPCTSTR lpszWindowName, DWORD dwStyle, const RECT& rect, CWnd* pParentWnd, 
				UINT nID, CFile* pPersist = NULL, BOOL bStorage = FALSE,
				BSTR bstrLicKey = NULL)
	{ 
		return CreateControl(GetClsid(), lpszWindowName, dwStyle, rect, pParentWnd, nID,
		pPersist, bStorage, bstrLicKey); 
	}

// 特性
public:


// 操作
public:

// _DETActiveX

// Functions
//

	long CZUR_Initialize(LPCTSTR bsrOCXLog)
	{
		long result;
		static BYTE parms[] = VTS_BSTR;

		InvokeHelper(0x1, DISPATCH_METHOD, VT_I4, (void*)&result, parms, bsrOCXLog);
		return result;
	}

	void CZUR_Deinitialize()
	{
		InvokeHelper(0x2, DISPATCH_METHOD, VT_EMPTY, NULL, NULL);
	}
	long CZUR_OpenDevice()
	{
		long result;
		InvokeHelper(0x3, DISPATCH_METHOD, VT_I4, (void*)&result, NULL);
		return result;
	}
	long CZUR_GrabSingleImage()
	{
		long result;
		InvokeHelper(0x7, DISPATCH_METHOD, VT_I4, (void*)&result, NULL);
		return result;
	}
	long CZUR_CloseDevice()
	{
		long result;
		InvokeHelper(0x8, DISPATCH_METHOD, VT_I4, (void*)&result, NULL);
		return result;
	}
	void CZUR_Path(LPCTSTR bsrPath)
	{
		static BYTE parms[] = VTS_BSTR ;
		InvokeHelper(0xa, DISPATCH_METHOD, VT_EMPTY, NULL, parms, bsrPath);
	}
	void CZUR_Custom(LPCTSTR bsrPrefix, long iInitNumber)
	{
		static BYTE parms[] = VTS_BSTR VTS_I4 ;
		InvokeHelper(0xb, DISPATCH_METHOD, VT_EMPTY, NULL, parms, bsrPrefix, iInitNumber);
	}
	void CZUR_Zoom(long xResolut, long yResolut)
	{
		static BYTE parms[] = VTS_I4 VTS_I4 ;
		InvokeHelper(0xc, DISPATCH_METHOD, VT_EMPTY, NULL, parms, xResolut, yResolut);
	}
	void CZUR_DPI(unsigned short wdpi)
	{
		static BYTE parms[] = VTS_UI2 ;
		InvokeHelper(0xd, DISPATCH_METHOD, VT_EMPTY, NULL, parms, wdpi);
	}
	void CZUR_ClrMode(long iClrMode)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0xe, DISPATCH_METHOD, VT_EMPTY, NULL, parms, iClrMode);
	}
	void CZUR_Rotate(long iAngle)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0xf, DISPATCH_METHOD, VT_EMPTY, NULL, parms, iAngle);
	}
	void CZUR_Original()
	{
		InvokeHelper(0x10, DISPATCH_METHOD, VT_EMPTY, NULL, NULL);
	}
	void CZUR_EdgeCutting()
	{
		InvokeHelper(0x11, DISPATCH_METHOD, VT_EMPTY, NULL, NULL);
	}
	void CZUR_CurveFlatten(long lSlpit)
	{
		static BYTE parms[] = VTS_I4 ;
		InvokeHelper(0x12, DISPATCH_METHOD, VT_EMPTY, NULL, parms, lSlpit);
	}
	void CZUR_Format_Bmp()
	{
		InvokeHelper(0x13, DISPATCH_METHOD, VT_EMPTY, NULL, NULL);
	}
	void CZUR_Format_Jpg(long iQuality)
	{
		static BYTE parms[] = VTS_I4;
		InvokeHelper(0x14, DISPATCH_METHOD, VT_EMPTY, NULL, parms, iQuality);
	}

	void CZUR_Http_URL(LPCTSTR bsrURL, LPCTSTR bsrFileId)
	{
		static BYTE parms[] = VTS_BSTR VTS_BSTR ;
		InvokeHelper(21, DISPATCH_METHOD, VT_EMPTY, NULL, parms, bsrURL, bsrFileId);
	}

	void CZUR_Http_User_Pwd(LPCTSTR bsrUserName, LPCTSTR bsrPassword)
	{
		static BYTE parms[] = VTS_BSTR VTS_BSTR ;
		InvokeHelper(22, DISPATCH_METHOD, VT_EMPTY, NULL, parms, bsrUserName, bsrPassword);
	}

	void CZUR_Http_Form(LPCTSTR bsrName, LPCTSTR bsrContent)
	{
		static BYTE parms[] = VTS_BSTR VTS_BSTR ;
		InvokeHelper(23, DISPATCH_METHOD, VT_EMPTY, NULL, parms, bsrName, bsrContent);
	}

	void CZUR_DisplayGrid(long lDisplayGrid)
	{
		static BYTE parms[] = VTS_I4;
		InvokeHelper(25, DISPATCH_METHOD, VT_EMPTY, NULL, parms, lDisplayGrid);
	}

	long CZUR_Http_Upload(LPCTSTR bsrLocalFile, LPCTSTR bsrUrl, LPCTSTR bsrName, LPCTSTR bsrUserName, LPCTSTR bsrPassword)
	{
		long result;
		static BYTE parms[] = VTS_BSTR VTS_BSTR VTS_BSTR VTS_BSTR VTS_BSTR;

		InvokeHelper(26, DISPATCH_METHOD, VT_I4, (void*)&result, parms, bsrLocalFile, bsrUrl, bsrName, bsrUserName, bsrPassword);

		return result;
	}

	long CZUR_Pdf_Image(LPCTSTR bsrImageFile)
	{
		long result;
		static BYTE parms[] = VTS_BSTR;

		InvokeHelper(29, DISPATCH_METHOD, VT_I4, (void*)&result, parms, bsrImageFile);

		return result;
	}

	//图片合成pdf文件
	long CZUR_Pdf_Submit(LPCTSTR bsrPdfFile)
	{
		long result;
		static BYTE parms[] = VTS_BSTR;

		InvokeHelper(30, DISPATCH_METHOD, VT_I4, (void*)&result, parms, bsrPdfFile);

		return result;
	}

	//删除文件
	long CZUR_DeleteFile(LPCTSTR bsrFileName)
	{
		long result;
		static BYTE parms[] = VTS_BSTR;

		InvokeHelper(31, DISPATCH_METHOD, VT_I4, (void*)&result, parms, bsrFileName);

		return result;
	}

	//重命名文件
	long CZUR_RenameFile(BSTR bsrSrcFile, BSTR bsrDstFile)
	{
		long result;
		static BYTE parms[] = VTS_BSTR VTS_BSTR;

		InvokeHelper(32, DISPATCH_METHOD, VT_I4, (void*)&result, parms, bsrSrcFile, bsrDstFile);

		return result;
	}

	//自动翻译检测
	void CZUR_AutoPageDetect(long lAutoDetect)
	{
		static BYTE parms[] = VTS_I4;

		InvokeHelper(33, DISPATCH_METHOD, VT_EMPTY, NULL, parms, lAutoDetect);
	}

	//获取设备型号
	long CZUR_GetModel()
	{
		long result;
		InvokeHelper(34, DISPATCH_METHOD, VT_I4, (void*)&result, NULL);

		return result;
	}

	//设置框选的类型
	void CZUR_SelectType(long lType)
	{
		static BYTE parms[] = VTS_I4;

		InvokeHelper(36, DISPATCH_METHOD, VT_EMPTY, NULL, parms, lType);
	}

	//清除选择的区域。1:裁剪区域, 2:扫码区域, 3:全部取消
	void CZUR_ClearSelect(long lClear)
	{
		static BYTE parms[] = VTS_I4;

		InvokeHelper(37, DISPATCH_METHOD, VT_EMPTY, NULL, parms, lClear);
	}

	//空白页检测。0:不检测, 1:检测
	void CZUR_BlankPageDetect(long lBlankDetect)
	{
		static BYTE parms[] = VTS_I4;

		InvokeHelper(38, DISPATCH_METHOD, VT_EMPTY, NULL, parms, lBlankDetect);
	}
};
