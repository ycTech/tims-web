program EtOcxExDemo;

uses
  Forms,
  Unit1 in 'Unit1.pas' {Form1},
  EtOcxExLib_TLB in 'EtOcxExLib_TLB.pas';

{$R *.res}

begin
  Application.Initialize;
  //Application.MainFormOnTaskbar := True;
  Application.CreateForm(TForm1, Form1);
  Application.Run;
end.
