object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 487
  ClientWidth = 852
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = OnFormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Label2: TLabel
    Left = 344
    Top = 360
    Width = 89
    Height = 13
    AutoSize = False
    Caption = #26412#22320#22270#29255#25991#20214#65306
    Color = clBlack
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentColor = False
    ParentFont = False
  end
  object Label3: TLabel
    Left = 344
    Top = 387
    Width = 54
    Height = 11
    Caption = 'PDF'#25991#20214':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label1: TLabel
    Left = 344
    Top = 96
    Width = 99
    Height = 15
    AutoSize = False
    Caption = #22270#29255#20445#23384#36335#24452':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label4: TLabel
    Left = 344
    Top = 122
    Width = 65
    Height = 11
    AutoSize = False
    Caption = #22270#29255#21069#32512':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label5: TLabel
    Left = 535
    Top = 122
    Width = 65
    Height = 11
    AutoSize = False
    Caption = #36215#22987#24207#21495':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label6: TLabel
    Left = 344
    Top = 154
    Width = 81
    Height = 11
    AutoSize = False
    Caption = #27178#21521#20998#36776#29575':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label7: TLabel
    Left = 535
    Top = 154
    Width = 81
    Height = 11
    AutoSize = False
    Caption = #32437#21521#20998#36776#29575':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label8: TLabel
    Left = 344
    Top = 183
    Width = 65
    Height = 18
    AutoSize = False
    Caption = #22270#29255'DPI:'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label9: TLabel
    Left = 344
    Top = 419
    Width = 59
    Height = 11
    Caption = #26412#22320#25991#20214':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label10: TLabel
    Left = 535
    Top = 418
    Width = 28
    Height = 11
    Caption = 'URL:'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label11: TLabel
    Left = 679
    Top = 419
    Width = 61
    Height = 11
    Caption = 'Name'#23646#24615':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label12: TLabel
    Left = 344
    Top = 451
    Width = 46
    Height = 11
    Caption = #29992#25143#21517':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label13: TLabel
    Left = 535
    Top = 451
    Width = 33
    Height = 11
    Caption = #23494#30721':'
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentFont = False
  end
  object Label14: TLabel
    Left = 465
    Top = 222
    Width = 89
    Height = 13
    AutoSize = False
    Caption = 'JPG'#22270#29255#36136#37327#65306
    Color = clBlack
    Font.Charset = ANSI_CHARSET
    Font.Color = clWindowText
    Font.Height = -11
    Font.Name = #40657#20307
    Font.Style = [fsBold]
    ParentColor = False
    ParentFont = False
  end
  object EtOcxEx1: TEtOcxEx
    Left = 0
    Top = 57
    Width = 329
    Height = 369
    TabOrder = 0
    ControlData = {00000100012200002326000000000000}
  end
  object btnInit: TButton
    Left = 344
    Top = 8
    Width = 99
    Height = 25
    Caption = 'CZUR_Initialize'
    TabOrder = 1
    OnClick = btnInitClick
  end
  object btnOpen: TButton
    Left = 344
    Top = 55
    Width = 99
    Height = 25
    Caption = 'CZUR_OpenDevice'
    TabOrder = 2
    OnClick = btnOpenClick
  end
  object btnGrab: TButton
    Left = 449
    Top = 55
    Width = 136
    Height = 25
    Caption = 'CZUR_GrabSingleImage'
    TabOrder = 3
    OnClick = btnGrabClick
  end
  object btnClose: TButton
    Left = 591
    Top = 55
    Width = 120
    Height = 25
    Caption = 'CZUR_CloseDevice'
    TabOrder = 4
    OnClick = btnCloseClick
  end
  object btnOriginal: TButton
    Left = 344
    Top = 247
    Width = 99
    Height = 25
    Caption = 'CZUR_Original'
    TabOrder = 5
    OnClick = btnOriginalClick
  end
  object btnEdgeCut: TButton
    Left = 449
    Top = 247
    Width = 136
    Height = 25
    Caption = 'CZUR_EdgeCutting'
    TabOrder = 6
    OnClick = btnEdgeCutClick
  end
  object btnFlatten: TButton
    Left = 717
    Top = 247
    Width = 120
    Height = 25
    Caption = 'CZUR_CurveFlatten'
    TabOrder = 7
    OnClick = btnFlattenClick
  end
  object cboSplit: TComboBox
    Left = 606
    Top = 249
    Width = 105
    Height = 21
    Style = csDropDownList
    TabOrder = 8
  end
  object cboClrmode: TComboBox
    Left = 344
    Top = 280
    Width = 99
    Height = 21
    Style = csDropDownList
    TabOrder = 9
  end
  object btnClrmode: TButton
    Left = 449
    Top = 278
    Width = 136
    Height = 25
    Caption = 'CZUR_ClrMode'
    TabOrder = 10
    OnClick = btnClrmodeClick
  end
  object cboRotate: TComboBox
    Left = 606
    Top = 280
    Width = 105
    Height = 21
    Style = csDropDownList
    TabOrder = 11
  end
  object btnRotate: TButton
    Left = 717
    Top = 278
    Width = 120
    Height = 25
    Caption = 'CZUR_Rotate'
    TabOrder = 12
    OnClick = btnRotateClick
  end
  object cboGrid: TComboBox
    Left = 344
    Top = 320
    Width = 99
    Height = 21
    Style = csDropDownList
    TabOrder = 13
  end
  object btnGrid: TButton
    Left = 449
    Top = 320
    Width = 136
    Height = 25
    Caption = 'CZUR_DisplayGrid'
    TabOrder = 14
    OnClick = btnGridClick
  end
  object cboDetect: TComboBox
    Left = 606
    Top = 320
    Width = 105
    Height = 21
    Style = csDropDownList
    TabOrder = 15
  end
  object btnDetect: TButton
    Left = 717
    Top = 318
    Width = 120
    Height = 25
    Caption = 'CZUR_AutoPageDetect'
    TabOrder = 16
    OnClick = btnDetectClick
  end
  object edtImage: TEdit
    Left = 449
    Top = 355
    Width = 262
    Height = 21
    TabOrder = 17
  end
  object edtPDF: TEdit
    Left = 449
    Top = 384
    Width = 262
    Height = 21
    TabOrder = 18
  end
  object btnPdf: TButton
    Left = 717
    Top = 382
    Width = 120
    Height = 25
    Caption = 'CZUR_Pdf_Submit'
    TabOrder = 19
    OnClick = btnPdfClick
  end
  object btnImage: TButton
    Left = 717
    Top = 353
    Width = 120
    Height = 25
    Caption = 'CZUR_Pdf_Image'
    TabOrder = 20
    OnClick = btnImageClick
  end
  object edtPath: TEdit
    Left = 449
    Top = 90
    Width = 262
    Height = 21
    TabOrder = 21
  end
  object btnPath: TButton
    Left = 717
    Top = 86
    Width = 120
    Height = 25
    Caption = 'CZUR_Path'
    TabOrder = 22
    OnClick = btnPathClick
  end
  object edtPrefix: TEdit
    Left = 424
    Top = 117
    Width = 105
    Height = 21
    TabOrder = 23
    Text = 'image'
  end
  object edtNumber: TEdit
    Left = 606
    Top = 117
    Width = 105
    Height = 21
    TabOrder = 24
    Text = '1'
  end
  object btnCustom: TButton
    Left = 717
    Top = 117
    Width = 120
    Height = 25
    Caption = 'CZUR_Custom'
    TabOrder = 25
    OnClick = btnCustomClick
  end
  object edtX: TEdit
    Left = 424
    Top = 149
    Width = 105
    Height = 21
    TabOrder = 26
    Text = '0'
  end
  object edtY: TEdit
    Left = 606
    Top = 149
    Width = 105
    Height = 21
    TabOrder = 27
    Text = '0'
  end
  object btnZoom: TButton
    Left = 717
    Top = 148
    Width = 120
    Height = 25
    Caption = 'CZUR_Zoom'
    TabOrder = 28
    OnClick = btnZoomClick
  end
  object edtDPI: TEdit
    Left = 424
    Top = 180
    Width = 176
    Height = 21
    TabOrder = 29
    Text = '96'
  end
  object btnDPI: TButton
    Left = 606
    Top = 178
    Width = 105
    Height = 25
    Caption = 'CZUR_DPI'
    TabOrder = 30
    OnClick = btnDPIClick
  end
  object edtLocalfile: TEdit
    Left = 408
    Top = 414
    Width = 121
    Height = 21
    TabOrder = 31
  end
  object edtURL: TEdit
    Left = 569
    Top = 414
    Width = 104
    Height = 21
    TabOrder = 32
  end
  object edtName: TEdit
    Left = 743
    Top = 413
    Width = 94
    Height = 21
    TabOrder = 33
  end
  object edtUser: TEdit
    Left = 408
    Top = 448
    Width = 121
    Height = 21
    TabOrder = 34
  end
  object edtPwd: TEdit
    Left = 569
    Top = 448
    Width = 104
    Height = 21
    TabOrder = 35
  end
  object btnHttp: TButton
    Left = 679
    Top = 446
    Width = 158
    Height = 25
    Caption = 'CZUR_Http_Upload'
    TabOrder = 36
    OnClick = btnHttpClick
  end
  object btnBmp: TButton
    Left = 343
    Top = 215
    Width = 100
    Height = 25
    Caption = 'CZUR_Format_Bmp'
    TabOrder = 37
    OnClick = btnBmpClick
  end
  object edtQuality: TEdit
    Left = 552
    Top = 220
    Width = 159
    Height = 21
    TabOrder = 38
    Text = '70'
  end
  object btnJpg: TButton
    Left = 717
    Top = 216
    Width = 120
    Height = 25
    Caption = 'CZUR_Format_Jpg'
    TabOrder = 39
    OnClick = btnJpgClick
  end
  object btnDeinit: TButton
    Left = 449
    Top = 8
    Width = 136
    Height = 25
    Caption = 'CZUR_Deinitialize'
    TabOrder = 40
    OnClick = btnDeinitClick
  end
end
