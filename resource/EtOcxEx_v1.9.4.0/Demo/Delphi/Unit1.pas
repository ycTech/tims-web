unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, StdCtrls, EtOcxExLib_TLB, OleCtrls;

type
    TForm1 = class(TForm)
    EtOcxEx1: TEtOcxEx;
    btnInit: TButton;
    btnOpen: TButton;
    btnGrab: TButton;
    btnClose: TButton;
    btnOriginal: TButton;
    btnEdgeCut: TButton;
    btnFlatten: TButton;
    cboSplit: TComboBox;
    cboClrmode: TComboBox;
    btnClrmode: TButton;
    cboRotate: TComboBox;
    btnRotate: TButton;
    cboGrid: TComboBox;
    btnGrid: TButton;
    cboDetect: TComboBox;
    btnDetect: TButton;
    Label2: TLabel;
    edtImage: TEdit;
    Label3: TLabel;
    edtPDF: TEdit;
    btnPdf: TButton;
    btnImage: TButton;
    Label1: TLabel;
    edtPath: TEdit;
    btnPath: TButton;
    Label4: TLabel;
    edtPrefix: TEdit;
    Label5: TLabel;
    edtNumber: TEdit;
    btnCustom: TButton;
    Label6: TLabel;
    edtX: TEdit;
    Label7: TLabel;
    edtY: TEdit;
    btnZoom: TButton;
    Label8: TLabel;
    edtDPI: TEdit;
    btnDPI: TButton;
    Label9: TLabel;
    edtLocalfile: TEdit;
    Label10: TLabel;
    edtURL: TEdit;
    Label11: TLabel;
    edtName: TEdit;
    Label12: TLabel;
    edtUser: TEdit;
    Label13: TLabel;
    edtPwd: TEdit;
    btnHttp: TButton;
    btnBmp: TButton;
    Label14: TLabel;
    edtQuality: TEdit;
    btnJpg: TButton;
    btnDeinit: TButton;

    procedure btnInitClick(Sender: TObject);
    procedure btnOpenClick(Sender: TObject);
    procedure btnGrabClick(Sender: TObject);
    procedure btnCloseClick(Sender: TObject);
    procedure btnOriginalClick(Sender: TObject);
    procedure btnEdgeCutClick(Sender: TObject);
    procedure btnFlattenClick(Sender: TObject);
    procedure btnClrmodeClick(Sender: TObject);
    procedure btnRotateClick(Sender: TObject);
    procedure btnGridClick(Sender: TObject);
    procedure btnDetectClick(Sender: TObject);
    procedure btnImageClick(Sender: TObject);
    procedure btnPdfClick(Sender: TObject);
    procedure btnPathClick(Sender: TObject);
    procedure btnCustomClick(Sender: TObject);
    procedure btnZoomClick(Sender: TObject);
    procedure btnDPIClick(Sender: TObject);
    procedure btnHttpClick(Sender: TObject);
    procedure btnBmpClick(Sender: TObject);
    procedure btnJpgClick(Sender: TObject);
    procedure btnDeinitClick(Sender: TObject);
    procedure OnFormCreate(Sender: TObject);

    procedure OCX_CZUR_CALLBACK(Sender: TObject; count: Integer;
                const bsrBarcode:WideString;
                const bsrHttpInfo: WideString;
                const bsrFile1: WideString;
                const bsrFile2: WideString);

     procedure OCX_CZUR_UPLOAD_CALLBACK(Sender: TObject; count: Integer;
                const bsrFile: WideString;
                errCode: Integer;
                const errMsg: WideString);
                
     procedure OCX_CZUR_PDF_CALLBACK(Sender: TObject; status: Integer);
    
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.OCX_CZUR_CALLBACK(Sender: TObject; count: Integer;
                      const bsrBarcode:WideString;
                      const bsrHttpInfo: WideString;
                      const bsrFile1: WideString;
                      const bsrFile2: WideString);
begin
//拍照事件回调函数
showmessage('拍照事件触发');
end;

procedure TForm1.OCX_CZUR_UPLOAD_CALLBACK(Sender: TObject; count: Integer;
                      const bsrFile: WideString;
                      errCode: Integer;
                      const errMsg: WideString);
begin
//上传事件回调函数
showmessage('上传事件触发');
end;

procedure TForm1.OCX_CZUR_PDF_CALLBACK(Sender: TObject; status: Integer);
begin
//合成PDF事件回调函数
showmessage('合成PDF事件触发');
end;

procedure TForm1.btnBmpClick(Sender: TObject);
begin
//设置生成的图片为bmp
  EtOcxEx1.CZUR_Format_Bmp();
end;

procedure TForm1.btnCloseClick(Sender: TObject);
begin
//关闭设备
  EtOcxEx1.CZUR_CloseDevice();
end;

procedure TForm1.btnClrmodeClick(Sender: TObject);
begin
//0: 无模式
//1: 彩色模式
//2: 白纸印章模式
//3: 证件底纹模式
//4: 黑白模式
//5: 灰度模式
  EtOcxEx1.CZUR_ClrMode(cboClrmode.ItemIndex);
end;

procedure TForm1.btnCustomClick(Sender: TObject);
begin
//自定义图片格式，前缀+序号
  EtOcxEx1.CZUR_Custom(edtPrefix.Text, StrToInt(edtNumber.Text));
end;

procedure TForm1.btnDeinitClick(Sender: TObject);
begin
//销毁EtOcxEx资源
  EtOcxEx1.CZUR_Deinitialize();
end;

procedure TForm1.btnDetectClick(Sender: TObject);
begin
//0: 不检测翻页动作
//1: 检测翻页动作
  EtOcxEx1.CZUR_AutoPageDetect(cboDetect.ItemIndex);
end;

procedure TForm1.btnDPIClick(Sender: TObject);
begin
//设置图片的DPI
  EtOcxEx1.CZUR_DPI(StrToInt(edtDPI.Text));
end;

procedure TForm1.btnEdgeCutClick(Sender: TObject);
begin
//设置单页裁边处理
  EtOcxEx1.CZUR_EdgeCutting();
end;

procedure TForm1.btnFlattenClick(Sender: TObject);
begin
//0: 书籍展平但不拆分;
//1: 书籍展平并拆分
  EtOcxEx1.CZUR_CurveFlatten(cboSplit.ItemIndex);
end;

procedure TForm1.btnGrabClick(Sender: TObject);
begin
//触发设备进行拍照
  EtOcxEx1.CZUR_GrabSingleImage();
end;

procedure TForm1.btnGridClick(Sender: TObject);
begin
//1: 显示网格
//0: 隐藏网格
  EtOcxEx1.CZUR_DisplayGrid(cboGrid.ItemIndex);
end;

procedure TForm1.btnHttpClick(Sender: TObject);
begin
//对本地文件进行http上传，调用CZUR_Http_Upload接口
  EtOcxEx1.CZUR_Http_Upload(edtLocalfile.Text, edtURL.Text, edtName.Text, edtUser.Text, edtPwd.Text);
end;

procedure TForm1.btnInitClick(Sender: TObject);
begin
   EtOcxEx1.OnCZUR_CALLBACK := OCX_CZUR_CALLBACK;
   EtOcxEx1.OnCZUR_UPLOAD_CALLBACK := OCX_CZUR_UPLOAD_CALLBACK;
   EtOcxEx1.OnCZUR_PDF_CALLBACK := OCX_CZUR_PDF_CALLBACK;

//初始化EtOcxEx资源
  EtOcxEx1.CZUR_Initialize('delphi.log');
end;

procedure TForm1.btnJpgClick(Sender: TObject);
begin
//设置生成的图片为jpg
  EtOcxEx1.CZUR_Format_Jpg(StrToInt(edtQuality.Text));
end;

procedure TForm1.btnOpenClick(Sender: TObject);
var
  ret : Integer;
begin
  //打开设备
  ret := EtOcxEx1.CZUR_OpenDevice();
  If ret = 0  then
     showmessage('打开设备失败');
  If ret = 1  then
     showmessage('成功打开设备');
  if ret = 2  then
     showmessage('请检查设备是否连接或型号是否支持');
end;

procedure TForm1.btnOriginalClick(Sender: TObject);
begin
//原图
  EtOcxEx1.CZUR_Original();
end;

procedure TForm1.btnImageClick(Sender: TObject);
begin
//添加合成pdf的图片文件，如D:\1.jpg，支持jpg(jpeg)、png格式
  EtOcxEx1.CZUR_Pdf_Image(edtImage.Text);
end;

procedure TForm1.btnPathClick(Sender: TObject);
begin
//设置图片保存路径
  EtOcxEx1.CZUR_Path(edtPath.Text);
end;

procedure TForm1.btnPdfClick(Sender: TObject);
begin
//设置合成pdf的文件名称，如D:\1.pdf
  EtOcxEx1.CZUR_Pdf_Submit(edtPdf.Text);
end;

procedure TForm1.btnRotateClick(Sender: TObject);
begin
  EtOcxEx1.CZUR_Rotate(cboRotate.ItemIndex * 90);
end;

procedure TForm1.btnZoomClick(Sender: TObject);
begin
//设置目的图片的分辨率
  EtOcxEx1.CZUR_Zoom(StrToInt(edtX.Text), StrToInt(edtY.Text));
end;

procedure TForm1.OnFormCreate(Sender: TObject);
begin
  cboSplit.Items.AddObject('不拆分', Self);
  cboSplit.Items.AddObject('拆分', Self);
  cboSplit.ItemIndex := 0;

  cboClrmode.Items.AddObject('无模式', Self);
  cboClrmode.Items.AddObject('彩色模式', Self);
  cboClrmode.Items.AddObject('白纸印章模式', Self);
  cboClrmode.Items.AddObject('证件底纹模式', Self);
  cboClrmode.Items.AddObject('黑白模式', Self);
  cboClrmode.Items.AddObject('灰度模式', Self);
  cboClrmode.ItemIndex := 0;

  cboRotate.Items.AddObject('不旋转', Self);
  cboRotate.Items.AddObject('旋转90°', Self);
  cboRotate.Items.AddObject('旋转180°', Self);
  cboRotate.Items.AddObject('旋转270°', Self);
  cboRotate.ItemIndex := 0;

  cboGrid.Items.AddObject('隐藏网格', Self);
  cboGrid.Items.AddObject('显示网格', Self);
  cboGrid.ItemIndex := 0;

  cboDetect.Items.AddObject('不检测翻页动作', Self);
  cboDetect.Items.AddObject('检测翻页动作', Self);
  cboDetect.ItemIndex := 0;
end;

end.
