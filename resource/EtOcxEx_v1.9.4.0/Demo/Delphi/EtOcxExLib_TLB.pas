unit EtOcxExLib_TLB;

// ************************************************************************ //
// WARNING                                                                    
// -------                                                                    
// The types declared in this file were generated from data read from a       
// Type Library. If this type library is explicitly or indirectly (via        
// another type library referring to this type library) re-imported, or the   
// 'Refresh' command of the Type Library Editor activated while editing the   
// Type Library, the contents of this file will be regenerated and all        
// manual modifications will be lost.                                         
// ************************************************************************ //

// PASTLWTR : 1.2
// File generated on 2017/6/6 13:57:17 from Type Library described below.

// ************************************************************************  //
// Type Lib: D:\公司项目\Git_Jzy\CzurOcx_ET\Release\EtOcxEx.ocx (1)
// LIBID: {BB414919-4000-43A4-AA16-1A88DFCCB1FE}
// LCID: 0
// Helpfile: 
// HelpString: 
// DepndLst: 
//   (1) v2.0 stdole, (C:\Windows\SysWOW64\stdole2.tlb)
// ************************************************************************ //
{$TYPEDADDRESS OFF} // Unit must be compiled without type-checked pointers. 
{$WARN SYMBOL_PLATFORM OFF}
{$WRITEABLECONST ON}
{$VARPROPSETTER ON}
interface

uses Windows, ActiveX, Classes, Graphics, OleCtrls, OleServer, StdVCL, Variants;
  


// *********************************************************************//
// GUIDS declared in the TypeLibrary. Following prefixes are used:        
//   Type Libraries     : LIBID_xxxx                                      
//   CoClasses          : CLASS_xxxx                                      
//   DISPInterfaces     : DIID_xxxx                                       
//   Non-DISP interfaces: IID_xxxx                                        
// *********************************************************************//
const
  // TypeLibrary Major and minor versions
  EtOcxExLibMajorVersion = 1;
  EtOcxExLibMinorVersion = 0;

  LIBID_EtOcxExLib: TGUID = '{BB414919-4000-43A4-AA16-1A88DFCCB1FE}';

  DIID__DEtOcxEx: TGUID = '{189C425B-8C55-4991-9573-421A6E0FD49B}';
  DIID__DEtOcxExEvents: TGUID = '{F5A6A0C8-F05B-45DE-8DA8-0332C59B65DC}';
  CLASS_EtOcxEx: TGUID = '{6BA87457-4473-41A1-9A48-6AC45389B971}';
type

// *********************************************************************//
// Forward declaration of types defined in TypeLibrary                    
// *********************************************************************//
  _DEtOcxEx = dispinterface;
  _DEtOcxExEvents = dispinterface;

// *********************************************************************//
// Declaration of CoClasses defined in Type Library                       
// (NOTE: Here we map each CoClass to its Default Interface)              
// *********************************************************************//
  EtOcxEx = _DEtOcxEx;


// *********************************************************************//
// DispIntf:  _DEtOcxEx
// Flags:     (4096) Dispatchable
// GUID:      {189C425B-8C55-4991-9573-421A6E0FD49B}
// *********************************************************************//
  _DEtOcxEx = dispinterface
    ['{189C425B-8C55-4991-9573-421A6E0FD49B}']
    function CZUR_Initialize(const bsrOCXLog: WideString): Integer; dispid 1;
    procedure CZUR_Deinitialize; dispid 2;
    function CZUR_OpenDevice: Integer; dispid 3;
    function CZUR_GrabSingleImage: Integer; dispid 7;
    function CZUR_CloseDevice: Integer; dispid 8;
    procedure CZUR_Path(const bsrPath: WideString); dispid 10;
    procedure CZUR_Custom(const bsrPrefix: WideString; iInitNumber: Integer); dispid 11;
    procedure CZUR_Zoom(xResolut: Integer; yResolut: Integer); dispid 12;
    procedure CZUR_DPI(wdpi: {??Word}OleVariant); dispid 13;
    procedure CZUR_ClrMode(iClrMode: Integer); dispid 14;
    procedure CZUR_Rotate(iAngle: Integer); dispid 15;
    procedure CZUR_Original; dispid 16;
    procedure CZUR_EdgeCutting; dispid 17;
    procedure CZUR_CurveFlatten(lSlpit: Integer); dispid 18;
    procedure CZUR_Format_Bmp; dispid 19;
    procedure CZUR_Format_Jpg(iQuality: Integer); dispid 20;
    procedure CZUR_Http_URL(const bsrURL: WideString; const bsrName: WideString); dispid 21;
    procedure CZUR_Http_User_Pwd(const bsrUserName: WideString; const bsrPassword: WideString); dispid 22;
    procedure CZUR_Http_Form(const bsrName: WideString; const bsrContent: WideString); dispid 23;
    procedure CZUR_DisplayGrid(lDisplayGrid: Integer); dispid 25;
    function CZUR_Http_Upload(const bsrLocalFile: WideString; const bsrURL: WideString; 
                              const bsrName: WideString; const bsrUserName: WideString; 
                              const bsrPassword: WideString): Integer; dispid 26;
    function CZUR_Pdf_Image(const bsrImageFile: WideString): Integer; dispid 29;
    function CZUR_Pdf_Submit(const bsrPdfFile: WideString): Integer; dispid 30;
    function CZUR_DeleteFile(const bsrFileName: WideString): Integer; dispid 31;
    function CZUR_RenameFile(const bsrSrcFile: WideString; const bsrDstFile: WideString): Integer; dispid 32;
    procedure CZUR_AutoPageDetect(lAutoDetect: Integer); dispid 33;
    function CZUR_GetModel: Integer; dispid 34;
	procedure CZUR_SelectType(lType: Integer); dispid 36;
	procedure CZUR_ClearSelect(lClear: Integer); dispid 37;
  end;

// *********************************************************************//
// DispIntf:  _DEtOcxExEvents
// Flags:     (4096) Dispatchable
// GUID:      {F5A6A0C8-F05B-45DE-8DA8-0332C59B65DC}
// *********************************************************************//
  _DEtOcxExEvents = dispinterface
    ['{F5A6A0C8-F05B-45DE-8DA8-0332C59B65DC}']
    procedure CZUR_CALLBACK(count: Integer; const bsrBarcode:WideString; const bsrHttpInfo: WideString; 
                            const bsrFile1: WideString; const bsrFile2: WideString); dispid 1;
    procedure CZUR_UPLOAD_CALLBACK(count: Integer; const bsrFile: WideString; errCode: Integer; 
                                   const errMsg: WideString); dispid 2;
    procedure CZUR_PDF_CALLBACK(status: Integer); dispid 3;
  end;


// *********************************************************************//
// OLE Control Proxy class declaration
// Control Name     : TEtOcxEx
// Help String      : 
// Default Interface: _DEtOcxEx
// Def. Intf. DISP? : Yes
// Event   Interface: _DEtOcxExEvents
// TypeFlags        : (2) CanCreate
// *********************************************************************//
  TEtOcxExCZUR_CALLBACK = procedure(ASender: TObject; count: Integer; 
													  const bsrBarcode:WideString;
                                                      const bsrHttpInfo: WideString; 
                                                      const bsrFile1: WideString; 
                                                      const bsrFile2: WideString) of object;
  TEtOcxExCZUR_UPLOAD_CALLBACK = procedure(ASender: TObject; count: Integer; 
                                                             const bsrFile: WideString; 
                                                             errCode: Integer; 
                                                             const errMsg: WideString) of object;
  TEtOcxExCZUR_PDF_CALLBACK = procedure(ASender: TObject; status: Integer) of object;

  TEtOcxEx = class(TOleControl)
  private
    FOnCZUR_CALLBACK: TEtOcxExCZUR_CALLBACK;
    FOnCZUR_UPLOAD_CALLBACK: TEtOcxExCZUR_UPLOAD_CALLBACK;
    FOnCZUR_PDF_CALLBACK: TEtOcxExCZUR_PDF_CALLBACK;
    FIntf: _DEtOcxEx;
    function  GetControlInterface: _DEtOcxEx;
  protected
    procedure CreateControl;
    procedure InitControlData; override;
  public
    function CZUR_Initialize(const bsrOCXLog: WideString): Integer;
    procedure CZUR_Deinitialize;
    function CZUR_OpenDevice: Integer;
    function CZUR_GrabSingleImage: Integer;
    function CZUR_CloseDevice: Integer;
    procedure CZUR_Path(const bsrPath: WideString);
    procedure CZUR_Custom(const bsrPrefix: WideString; iInitNumber: Integer);
    procedure CZUR_Zoom(xResolut: Integer; yResolut: Integer);
    procedure CZUR_DPI(wdpi: {??Word}OleVariant);
    procedure CZUR_ClrMode(iClrMode: Integer);
    procedure CZUR_Rotate(iAngle: Integer);
    procedure CZUR_Original;
    procedure CZUR_EdgeCutting;
    procedure CZUR_CurveFlatten(lSlpit: Integer);
    procedure CZUR_Format_Bmp;
    procedure CZUR_Format_Jpg(iQuality: Integer);
    procedure CZUR_Http_URL(const bsrURL: WideString; const bsrName: WideString);
    procedure CZUR_Http_User_Pwd(const bsrUserName: WideString; const bsrPassword: WideString);
    procedure CZUR_Http_Form(const bsrName: WideString; const bsrContent: WideString);
    procedure CZUR_DisplayGrid(lDisplayGrid: Integer);
    function CZUR_Http_Upload(const bsrLocalFile: WideString; const bsrURL: WideString; 
                              const bsrName: WideString; const bsrUserName: WideString; 
                              const bsrPassword: WideString): Integer;
    function CZUR_Pdf_Image(const bsrImageFile: WideString): Integer;
    function CZUR_Pdf_Submit(const bsrPdfFile: WideString): Integer;
    function CZUR_DeleteFile(const bsrFileName: WideString): Integer;
    function CZUR_RenameFile(const bsrSrcFile: WideString; const bsrDstFile: WideString): Integer;
    procedure CZUR_AutoPageDetect(lAutoDetect: Integer);
    function CZUR_GetModel: Integer;
	procedure CZUR_SelectType(lType: Integer);
	procedure CZUR_ClearSelect(lClear: Integer);

    property  ControlInterface: _DEtOcxEx read GetControlInterface;
    property  DefaultInterface: _DEtOcxEx read GetControlInterface;
  published
    property Anchors;
    property  TabStop;
    property  Align;
    property  DragCursor;
    property  DragMode;
    property  ParentShowHint;
    property  PopupMenu;
    property  ShowHint;
    property  TabOrder;
    property  Visible;
    property  OnDragDrop;
    property  OnDragOver;
    property  OnEndDrag;
    property  OnEnter;
    property  OnExit;
    property  OnStartDrag;
    property OnCZUR_CALLBACK: TEtOcxExCZUR_CALLBACK read FOnCZUR_CALLBACK write FOnCZUR_CALLBACK;
    property OnCZUR_UPLOAD_CALLBACK: TEtOcxExCZUR_UPLOAD_CALLBACK read FOnCZUR_UPLOAD_CALLBACK write FOnCZUR_UPLOAD_CALLBACK;
    property OnCZUR_PDF_CALLBACK: TEtOcxExCZUR_PDF_CALLBACK read FOnCZUR_PDF_CALLBACK write FOnCZUR_PDF_CALLBACK;
  end;

procedure Register;

resourcestring
  dtlServerPage = 'ActiveX';

  dtlOcxPage = 'ActiveX';

implementation

uses ComObj;

procedure TEtOcxEx.InitControlData;
const
  CEventDispIDs: array [0..2] of DWORD = (
    $00000001, $00000002, $00000003);
  CControlData: TControlData2 = (
    ClassID: '{6BA87457-4473-41A1-9A48-6AC45389B971}';
    EventIID: '{F5A6A0C8-F05B-45DE-8DA8-0332C59B65DC}';
    EventCount: 3;
    EventDispIDs: @CEventDispIDs; 
    LicenseKey: nil (*HR:$80004005*);
    Flags: $00000000;
    Version: 401);
begin
  ControlData := @CControlData;
  TControlData2(CControlData).FirstEventOfs := Cardinal(@@FOnCZUR_CALLBACK) - Cardinal(Self);
end;

procedure TEtOcxEx.CreateControl;

  procedure DoCreate;
  begin
    FIntf := IUnknown(OleObject) as _DEtOcxEx;
  end;

begin
  if FIntf = nil then DoCreate;
end;

function TEtOcxEx.GetControlInterface: _DEtOcxEx;
begin
  CreateControl;
  Result := FIntf;
end;

function TEtOcxEx.CZUR_Initialize(const bsrOCXLog: WideString): Integer;
begin
  Result := DefaultInterface.CZUR_Initialize(bsrOCXLog);
end;

procedure TEtOcxEx.CZUR_Deinitialize;
begin
  DefaultInterface.CZUR_Deinitialize;
end;

function TEtOcxEx.CZUR_OpenDevice: Integer;
begin
  Result := DefaultInterface.CZUR_OpenDevice;
end;

function TEtOcxEx.CZUR_GrabSingleImage: Integer;
begin
  Result := DefaultInterface.CZUR_GrabSingleImage;
end;

function TEtOcxEx.CZUR_CloseDevice: Integer;
begin
  Result := DefaultInterface.CZUR_CloseDevice;
end;

procedure TEtOcxEx.CZUR_Path(const bsrPath: WideString);
begin
  DefaultInterface.CZUR_Path(bsrPath);
end;

procedure TEtOcxEx.CZUR_Custom(const bsrPrefix: WideString; iInitNumber: Integer);
begin
  DefaultInterface.CZUR_Custom(bsrPrefix, iInitNumber);
end;

procedure TEtOcxEx.CZUR_Zoom(xResolut: Integer; yResolut: Integer);
begin
  DefaultInterface.CZUR_Zoom(xResolut, yResolut);
end;

procedure TEtOcxEx.CZUR_DPI(wdpi: {??Word}OleVariant);
begin
  DefaultInterface.CZUR_DPI(wdpi);
end;

procedure TEtOcxEx.CZUR_ClrMode(iClrMode: Integer);
begin
  DefaultInterface.CZUR_ClrMode(iClrMode);
end;

procedure TEtOcxEx.CZUR_Rotate(iAngle: Integer);
begin
  DefaultInterface.CZUR_Rotate(iAngle);
end;

procedure TEtOcxEx.CZUR_Original;
begin
  DefaultInterface.CZUR_Original;
end;

procedure TEtOcxEx.CZUR_EdgeCutting;
begin
  DefaultInterface.CZUR_EdgeCutting;
end;

procedure TEtOcxEx.CZUR_CurveFlatten(lSlpit: Integer);
begin
  DefaultInterface.CZUR_CurveFlatten(lSlpit);
end;

procedure TEtOcxEx.CZUR_Format_Bmp;
begin
  DefaultInterface.CZUR_Format_Bmp;
end;

procedure TEtOcxEx.CZUR_Format_Jpg(iQuality: Integer);
begin
  DefaultInterface.CZUR_Format_Jpg(iQuality);
end;

procedure TEtOcxEx.CZUR_Http_URL(const bsrURL: WideString; const bsrName: WideString);
begin
  DefaultInterface.CZUR_Http_URL(bsrURL, bsrName);
end;

procedure TEtOcxEx.CZUR_Http_User_Pwd(const bsrUserName: WideString; const bsrPassword: WideString);
begin
  DefaultInterface.CZUR_Http_User_Pwd(bsrUserName, bsrPassword);
end;

procedure TEtOcxEx.CZUR_Http_Form(const bsrName: WideString; const bsrContent: WideString);
begin
  DefaultInterface.CZUR_Http_Form(bsrName, bsrContent);
end;

procedure TEtOcxEx.CZUR_DisplayGrid(lDisplayGrid: Integer);
begin
  DefaultInterface.CZUR_DisplayGrid(lDisplayGrid);
end;

function TEtOcxEx.CZUR_Http_Upload(const bsrLocalFile: WideString; const bsrURL: WideString; 
                                   const bsrName: WideString; const bsrUserName: WideString; 
                                   const bsrPassword: WideString): Integer;
begin
  Result := DefaultInterface.CZUR_Http_Upload(bsrLocalFile, bsrURL, bsrName, bsrUserName, 
                                              bsrPassword);
end;

function TEtOcxEx.CZUR_Pdf_Image(const bsrImageFile: WideString): Integer;
begin
  Result := DefaultInterface.CZUR_Pdf_Image(bsrImageFile);
end;

function TEtOcxEx.CZUR_Pdf_Submit(const bsrPdfFile: WideString): Integer;
begin
  Result := DefaultInterface.CZUR_Pdf_Submit(bsrPdfFile);
end;

function TEtOcxEx.CZUR_DeleteFile(const bsrFileName: WideString): Integer;
begin
  Result := DefaultInterface.CZUR_DeleteFile(bsrFileName);
end;

function TEtOcxEx.CZUR_RenameFile(const bsrSrcFile: WideString; const bsrDstFile: WideString): Integer;
begin
  Result := DefaultInterface.CZUR_RenameFile(bsrSrcFile, bsrDstFile);
end;

procedure TEtOcxEx.CZUR_AutoPageDetect(lAutoDetect: Integer);
begin
  DefaultInterface.CZUR_AutoPageDetect(lAutoDetect);
end;

function TEtOcxEx.CZUR_GetModel: Integer;
begin
  Result := DefaultInterface.CZUR_GetModel;
end;

procedure TEtOcxEx.CZUR_SelectType(lType: Integer);
begin
	DefaultInterface.CZUR_SelectType(lType);
end;

//清除选择的区域。1:裁剪区域, 2:扫码区域, 3:全部取消
procedure TEtOcxEx.CZUR_ClearSelect(lClear: Integer);
begin
	DefaultInterface.CZUR_ClearSelect(lClear);
end;

procedure Register;
begin
  RegisterComponents(dtlOcxPage, [TEtOcxEx]);
end;

end.
