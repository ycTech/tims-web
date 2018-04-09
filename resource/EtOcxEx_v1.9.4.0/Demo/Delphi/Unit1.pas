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
//�����¼��ص�����
showmessage('�����¼�����');
end;

procedure TForm1.OCX_CZUR_UPLOAD_CALLBACK(Sender: TObject; count: Integer;
                      const bsrFile: WideString;
                      errCode: Integer;
                      const errMsg: WideString);
begin
//�ϴ��¼��ص�����
showmessage('�ϴ��¼�����');
end;

procedure TForm1.OCX_CZUR_PDF_CALLBACK(Sender: TObject; status: Integer);
begin
//�ϳ�PDF�¼��ص�����
showmessage('�ϳ�PDF�¼�����');
end;

procedure TForm1.btnBmpClick(Sender: TObject);
begin
//�������ɵ�ͼƬΪbmp
  EtOcxEx1.CZUR_Format_Bmp();
end;

procedure TForm1.btnCloseClick(Sender: TObject);
begin
//�ر��豸
  EtOcxEx1.CZUR_CloseDevice();
end;

procedure TForm1.btnClrmodeClick(Sender: TObject);
begin
//0: ��ģʽ
//1: ��ɫģʽ
//2: ��ֽӡ��ģʽ
//3: ֤������ģʽ
//4: �ڰ�ģʽ
//5: �Ҷ�ģʽ
  EtOcxEx1.CZUR_ClrMode(cboClrmode.ItemIndex);
end;

procedure TForm1.btnCustomClick(Sender: TObject);
begin
//�Զ���ͼƬ��ʽ��ǰ׺+���
  EtOcxEx1.CZUR_Custom(edtPrefix.Text, StrToInt(edtNumber.Text));
end;

procedure TForm1.btnDeinitClick(Sender: TObject);
begin
//����EtOcxEx��Դ
  EtOcxEx1.CZUR_Deinitialize();
end;

procedure TForm1.btnDetectClick(Sender: TObject);
begin
//0: ����ⷭҳ����
//1: ��ⷭҳ����
  EtOcxEx1.CZUR_AutoPageDetect(cboDetect.ItemIndex);
end;

procedure TForm1.btnDPIClick(Sender: TObject);
begin
//����ͼƬ��DPI
  EtOcxEx1.CZUR_DPI(StrToInt(edtDPI.Text));
end;

procedure TForm1.btnEdgeCutClick(Sender: TObject);
begin
//���õ�ҳ�ñߴ���
  EtOcxEx1.CZUR_EdgeCutting();
end;

procedure TForm1.btnFlattenClick(Sender: TObject);
begin
//0: �鼮չƽ�������;
//1: �鼮չƽ�����
  EtOcxEx1.CZUR_CurveFlatten(cboSplit.ItemIndex);
end;

procedure TForm1.btnGrabClick(Sender: TObject);
begin
//�����豸��������
  EtOcxEx1.CZUR_GrabSingleImage();
end;

procedure TForm1.btnGridClick(Sender: TObject);
begin
//1: ��ʾ����
//0: ��������
  EtOcxEx1.CZUR_DisplayGrid(cboGrid.ItemIndex);
end;

procedure TForm1.btnHttpClick(Sender: TObject);
begin
//�Ա����ļ�����http�ϴ�������CZUR_Http_Upload�ӿ�
  EtOcxEx1.CZUR_Http_Upload(edtLocalfile.Text, edtURL.Text, edtName.Text, edtUser.Text, edtPwd.Text);
end;

procedure TForm1.btnInitClick(Sender: TObject);
begin
   EtOcxEx1.OnCZUR_CALLBACK := OCX_CZUR_CALLBACK;
   EtOcxEx1.OnCZUR_UPLOAD_CALLBACK := OCX_CZUR_UPLOAD_CALLBACK;
   EtOcxEx1.OnCZUR_PDF_CALLBACK := OCX_CZUR_PDF_CALLBACK;

//��ʼ��EtOcxEx��Դ
  EtOcxEx1.CZUR_Initialize('delphi.log');
end;

procedure TForm1.btnJpgClick(Sender: TObject);
begin
//�������ɵ�ͼƬΪjpg
  EtOcxEx1.CZUR_Format_Jpg(StrToInt(edtQuality.Text));
end;

procedure TForm1.btnOpenClick(Sender: TObject);
var
  ret : Integer;
begin
  //���豸
  ret := EtOcxEx1.CZUR_OpenDevice();
  If ret = 0  then
     showmessage('���豸ʧ��');
  If ret = 1  then
     showmessage('�ɹ����豸');
  if ret = 2  then
     showmessage('�����豸�Ƿ����ӻ��ͺ��Ƿ�֧��');
end;

procedure TForm1.btnOriginalClick(Sender: TObject);
begin
//ԭͼ
  EtOcxEx1.CZUR_Original();
end;

procedure TForm1.btnImageClick(Sender: TObject);
begin
//��Ӻϳ�pdf��ͼƬ�ļ�����D:\1.jpg��֧��jpg(jpeg)��png��ʽ
  EtOcxEx1.CZUR_Pdf_Image(edtImage.Text);
end;

procedure TForm1.btnPathClick(Sender: TObject);
begin
//����ͼƬ����·��
  EtOcxEx1.CZUR_Path(edtPath.Text);
end;

procedure TForm1.btnPdfClick(Sender: TObject);
begin
//���úϳ�pdf���ļ����ƣ���D:\1.pdf
  EtOcxEx1.CZUR_Pdf_Submit(edtPdf.Text);
end;

procedure TForm1.btnRotateClick(Sender: TObject);
begin
  EtOcxEx1.CZUR_Rotate(cboRotate.ItemIndex * 90);
end;

procedure TForm1.btnZoomClick(Sender: TObject);
begin
//����Ŀ��ͼƬ�ķֱ���
  EtOcxEx1.CZUR_Zoom(StrToInt(edtX.Text), StrToInt(edtY.Text));
end;

procedure TForm1.OnFormCreate(Sender: TObject);
begin
  cboSplit.Items.AddObject('�����', Self);
  cboSplit.Items.AddObject('���', Self);
  cboSplit.ItemIndex := 0;

  cboClrmode.Items.AddObject('��ģʽ', Self);
  cboClrmode.Items.AddObject('��ɫģʽ', Self);
  cboClrmode.Items.AddObject('��ֽӡ��ģʽ', Self);
  cboClrmode.Items.AddObject('֤������ģʽ', Self);
  cboClrmode.Items.AddObject('�ڰ�ģʽ', Self);
  cboClrmode.Items.AddObject('�Ҷ�ģʽ', Self);
  cboClrmode.ItemIndex := 0;

  cboRotate.Items.AddObject('����ת', Self);
  cboRotate.Items.AddObject('��ת90��', Self);
  cboRotate.Items.AddObject('��ת180��', Self);
  cboRotate.Items.AddObject('��ת270��', Self);
  cboRotate.ItemIndex := 0;

  cboGrid.Items.AddObject('��������', Self);
  cboGrid.Items.AddObject('��ʾ����', Self);
  cboGrid.ItemIndex := 0;

  cboDetect.Items.AddObject('����ⷭҳ����', Self);
  cboDetect.Items.AddObject('��ⷭҳ����', Self);
  cboDetect.ItemIndex := 0;
end;

end.
