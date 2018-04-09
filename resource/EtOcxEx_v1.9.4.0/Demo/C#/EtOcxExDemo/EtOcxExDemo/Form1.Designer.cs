namespace EtOcxExDemo
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.CZUR_Initialize = new System.Windows.Forms.Button();
            this.CZUR_Deinitialize = new System.Windows.Forms.Button();
            this.HttpURL = new System.Windows.Forms.Label();
            this.HttpURL_Text = new System.Windows.Forms.TextBox();
            this.HttpFile = new System.Windows.Forms.Label();
            this.HttpFile_Text = new System.Windows.Forms.TextBox();
            this.CZUR_Http_URL = new System.Windows.Forms.Button();
            this.HttpUser = new System.Windows.Forms.Label();
            this.HttpUser_Text = new System.Windows.Forms.TextBox();
            this.HttpPwd = new System.Windows.Forms.Label();
            this.HttpPwd_Text = new System.Windows.Forms.TextBox();
            this.CZUR_Http_User_Pwd = new System.Windows.Forms.Button();
            this.HttpForm = new System.Windows.Forms.Label();
            this.HttpForm_Text = new System.Windows.Forms.TextBox();
            this.HttpContent = new System.Windows.Forms.Label();
            this.HttpContent_Text = new System.Windows.Forms.TextBox();
            this.CZUR_Http_Form = new System.Windows.Forms.Button();
            this.CZUR_OpenDevice = new System.Windows.Forms.Button();
            this.CZUR_CloseDevice = new System.Windows.Forms.Button();
            this.CZUR_GrabSingleImage = new System.Windows.Forms.Button();
            this.ImagePath = new System.Windows.Forms.Label();
            this.CZURPath_Text = new System.Windows.Forms.TextBox();
            this.CZUR_Path = new System.Windows.Forms.Button();
            this.ImageDPI = new System.Windows.Forms.Label();
            this.CZURDPI_Text = new System.Windows.Forms.TextBox();
            this.CZUR_DPI = new System.Windows.Forms.Button();
            this.ImagePrefix = new System.Windows.Forms.Label();
            this.CZURPrefix_Text = new System.Windows.Forms.TextBox();
            this.ImageNumber = new System.Windows.Forms.Label();
            this.CUZRNumber_Text = new System.Windows.Forms.TextBox();
            this.CZUR_Custom = new System.Windows.Forms.Button();
            this.HorResolut = new System.Windows.Forms.Label();
            this.HORResolut_Text = new System.Windows.Forms.TextBox();
            this.VertResolut = new System.Windows.Forms.Label();
            this.VertResolut_Text = new System.Windows.Forms.TextBox();
            this.CZUR_Zoom = new System.Windows.Forms.Button();
            this.CZURRatate = new System.Windows.Forms.ComboBox();
            this.CZURClrMode = new System.Windows.Forms.ComboBox();
            this.CZURGrid = new System.Windows.Forms.ComboBox();
            this.CZURMode = new System.Windows.Forms.ComboBox();
            this.CZUR_Format_Bmp = new System.Windows.Forms.Button();
            this.BmpFormat = new System.Windows.Forms.Label();
            this.JpgFormat = new System.Windows.Forms.Label();
            this.CZUR_Format_Jpg = new System.Windows.Forms.Button();
            this.JPGQuality = new System.Windows.Forms.Label();
            this.JpgQuality_Text = new System.Windows.Forms.TextBox();
            this.CZURSelect = new System.Windows.Forms.ComboBox();
            this.CZURBlankDetect = new System.Windows.Forms.ComboBox();
            this.axEtOcxEx1 = new AxEtOcxExLib.AxEtOcxEx();
            this.imgFile = new System.Windows.Forms.Label();
            this.CZUR_ImageFile = new System.Windows.Forms.TextBox();
            this.CZUR_PDF_Image = new System.Windows.Forms.Button();
            this.PDFFile = new System.Windows.Forms.Label();
            this.CZUR_PDFFile = new System.Windows.Forms.TextBox();
            this.CZUR_PDF_Submit = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.axEtOcxEx1)).BeginInit();
            this.SuspendLayout();
            // 
            // CZUR_Initialize
            // 
            this.CZUR_Initialize.Location = new System.Drawing.Point(626, 16);
            this.CZUR_Initialize.Name = "CZUR_Initialize";
            this.CZUR_Initialize.Size = new System.Drawing.Size(152, 23);
            this.CZUR_Initialize.TabIndex = 1;
            this.CZUR_Initialize.Text = "CZUR_Initialize";
            this.CZUR_Initialize.UseVisualStyleBackColor = true;
            this.CZUR_Initialize.Click += new System.EventHandler(this.CZUR_Initialize_Click);
            // 
            // CZUR_Deinitialize
            // 
            this.CZUR_Deinitialize.Location = new System.Drawing.Point(893, 16);
            this.CZUR_Deinitialize.Name = "CZUR_Deinitialize";
            this.CZUR_Deinitialize.Size = new System.Drawing.Size(152, 23);
            this.CZUR_Deinitialize.TabIndex = 2;
            this.CZUR_Deinitialize.Text = "CZUR_Deinitialize";
            this.CZUR_Deinitialize.UseVisualStyleBackColor = true;
            this.CZUR_Deinitialize.Click += new System.EventHandler(this.CZUR_Deinitialize_Click);
            // 
            // HttpURL
            // 
            this.HttpURL.AutoSize = true;
            this.HttpURL.Location = new System.Drawing.Point(559, 72);
            this.HttpURL.Name = "HttpURL";
            this.HttpURL.Size = new System.Drawing.Size(39, 15);
            this.HttpURL.TabIndex = 3;
            this.HttpURL.Text = "URL:";
            // 
            // HttpURL_Text
            // 
            this.HttpURL_Text.Location = new System.Drawing.Point(644, 67);
            this.HttpURL_Text.Name = "HttpURL_Text";
            this.HttpURL_Text.Size = new System.Drawing.Size(150, 25);
            this.HttpURL_Text.TabIndex = 4;
            // 
            // HttpFile
            // 
            this.HttpFile.AutoSize = true;
            this.HttpFile.Location = new System.Drawing.Point(807, 70);
            this.HttpFile.Name = "HttpFile";
            this.HttpFile.Size = new System.Drawing.Size(47, 15);
            this.HttpFile.TabIndex = 5;
            this.HttpFile.Text = "File:";
            // 
            // HttpFile_Text
            // 
            this.HttpFile_Text.Location = new System.Drawing.Point(863, 67);
            this.HttpFile_Text.Name = "HttpFile_Text";
            this.HttpFile_Text.Size = new System.Drawing.Size(80, 25);
            this.HttpFile_Text.TabIndex = 6;
            // 
            // CZUR_Http_URL
            // 
            this.CZUR_Http_URL.Location = new System.Drawing.Point(959, 66);
            this.CZUR_Http_URL.Name = "CZUR_Http_URL";
            this.CZUR_Http_URL.Size = new System.Drawing.Size(163, 23);
            this.CZUR_Http_URL.TabIndex = 7;
            this.CZUR_Http_URL.Text = "CZUR_Http_URL";
            this.CZUR_Http_URL.UseVisualStyleBackColor = true;
            this.CZUR_Http_URL.Click += new System.EventHandler(this.CZUR_Http_URL_Click);
            // 
            // HttpUser
            // 
            this.HttpUser.AutoSize = true;
            this.HttpUser.Location = new System.Drawing.Point(559, 107);
            this.HttpUser.Name = "HttpUser";
            this.HttpUser.Size = new System.Drawing.Size(79, 15);
            this.HttpUser.TabIndex = 8;
            this.HttpUser.Text = "UserName:";
            // 
            // HttpUser_Text
            // 
            this.HttpUser_Text.Location = new System.Drawing.Point(644, 104);
            this.HttpUser_Text.Name = "HttpUser_Text";
            this.HttpUser_Text.Size = new System.Drawing.Size(106, 25);
            this.HttpUser_Text.TabIndex = 9;
            // 
            // HttpPwd
            // 
            this.HttpPwd.AutoSize = true;
            this.HttpPwd.Location = new System.Drawing.Point(770, 108);
            this.HttpPwd.Name = "HttpPwd";
            this.HttpPwd.Size = new System.Drawing.Size(79, 15);
            this.HttpPwd.TabIndex = 10;
            this.HttpPwd.Text = "Password:";
            // 
            // HttpPwd_Text
            // 
            this.HttpPwd_Text.Location = new System.Drawing.Point(863, 102);
            this.HttpPwd_Text.Name = "HttpPwd_Text";
            this.HttpPwd_Text.Size = new System.Drawing.Size(80, 25);
            this.HttpPwd_Text.TabIndex = 11;
            // 
            // CZUR_Http_User_Pwd
            // 
            this.CZUR_Http_User_Pwd.Location = new System.Drawing.Point(959, 104);
            this.CZUR_Http_User_Pwd.Name = "CZUR_Http_User_Pwd";
            this.CZUR_Http_User_Pwd.Size = new System.Drawing.Size(163, 23);
            this.CZUR_Http_User_Pwd.TabIndex = 12;
            this.CZUR_Http_User_Pwd.Text = "CZUR_Http_User_Pwd";
            this.CZUR_Http_User_Pwd.UseVisualStyleBackColor = true;
            this.CZUR_Http_User_Pwd.Click += new System.EventHandler(this.CZUR_Http_User_Pwd_Click);
            // 
            // HttpForm
            // 
            this.HttpForm.AutoSize = true;
            this.HttpForm.Location = new System.Drawing.Point(559, 142);
            this.HttpForm.Name = "HttpForm";
            this.HttpForm.Size = new System.Drawing.Size(79, 15);
            this.HttpForm.TabIndex = 13;
            this.HttpForm.Text = "FormName:";
            // 
            // HttpForm_Text
            // 
            this.HttpForm_Text.Location = new System.Drawing.Point(644, 139);
            this.HttpForm_Text.Name = "HttpForm_Text";
            this.HttpForm_Text.Size = new System.Drawing.Size(106, 25);
            this.HttpForm_Text.TabIndex = 14;
            // 
            // HttpContent
            // 
            this.HttpContent.AutoSize = true;
            this.HttpContent.Location = new System.Drawing.Point(778, 146);
            this.HttpContent.Name = "HttpContent";
            this.HttpContent.Size = new System.Drawing.Size(71, 15);
            this.HttpContent.TabIndex = 15;
            this.HttpContent.Text = "Content:";
            // 
            // HttpContent_Text
            // 
            this.HttpContent_Text.Location = new System.Drawing.Point(863, 139);
            this.HttpContent_Text.Name = "HttpContent_Text";
            this.HttpContent_Text.Size = new System.Drawing.Size(80, 25);
            this.HttpContent_Text.TabIndex = 16;
            // 
            // CZUR_Http_Form
            // 
            this.CZUR_Http_Form.Location = new System.Drawing.Point(959, 142);
            this.CZUR_Http_Form.Name = "CZUR_Http_Form";
            this.CZUR_Http_Form.Size = new System.Drawing.Size(163, 23);
            this.CZUR_Http_Form.TabIndex = 17;
            this.CZUR_Http_Form.Text = "CZUR_Http_Form";
            this.CZUR_Http_Form.UseVisualStyleBackColor = true;
            this.CZUR_Http_Form.Click += new System.EventHandler(this.CZUR_Http_Form_Click);
            // 
            // CZUR_OpenDevice
            // 
            this.CZUR_OpenDevice.Location = new System.Drawing.Point(574, 187);
            this.CZUR_OpenDevice.Name = "CZUR_OpenDevice";
            this.CZUR_OpenDevice.Size = new System.Drawing.Size(186, 23);
            this.CZUR_OpenDevice.TabIndex = 18;
            this.CZUR_OpenDevice.Text = "CZUR_OpenDevice";
            this.CZUR_OpenDevice.UseVisualStyleBackColor = true;
            this.CZUR_OpenDevice.Click += new System.EventHandler(this.CZUR_OpenDevice_Click);
            // 
            // CZUR_CloseDevice
            // 
            this.CZUR_CloseDevice.Location = new System.Drawing.Point(970, 187);
            this.CZUR_CloseDevice.Name = "CZUR_CloseDevice";
            this.CZUR_CloseDevice.Size = new System.Drawing.Size(152, 23);
            this.CZUR_CloseDevice.TabIndex = 21;
            this.CZUR_CloseDevice.Text = "CZUR_CloseDevice";
            this.CZUR_CloseDevice.UseVisualStyleBackColor = true;
            this.CZUR_CloseDevice.Click += new System.EventHandler(this.CZUR_CloseDevice_Click);
            // 
            // CZUR_GrabSingleImage
            // 
            this.CZUR_GrabSingleImage.Location = new System.Drawing.Point(773, 187);
            this.CZUR_GrabSingleImage.Name = "CZUR_GrabSingleImage";
            this.CZUR_GrabSingleImage.Size = new System.Drawing.Size(186, 23);
            this.CZUR_GrabSingleImage.TabIndex = 22;
            this.CZUR_GrabSingleImage.Text = "CZUR_GrabSingleImage";
            this.CZUR_GrabSingleImage.UseVisualStyleBackColor = true;
            this.CZUR_GrabSingleImage.Click += new System.EventHandler(this.CZUR_GrabSingleImage_Click);
            // 
            // ImagePath
            // 
            this.ImagePath.AutoSize = true;
            this.ImagePath.Location = new System.Drawing.Point(575, 310);
            this.ImagePath.Name = "ImagePath";
            this.ImagePath.Size = new System.Drawing.Size(75, 15);
            this.ImagePath.TabIndex = 24;
            this.ImagePath.Text = "保存路径:";
            // 
            // CZURPath_Text
            // 
            this.CZURPath_Text.Location = new System.Drawing.Point(656, 307);
            this.CZURPath_Text.Name = "CZURPath_Text";
            this.CZURPath_Text.Size = new System.Drawing.Size(94, 25);
            this.CZURPath_Text.TabIndex = 25;
            // 
            // CZUR_Path
            // 
            this.CZUR_Path.Location = new System.Drawing.Point(758, 310);
            this.CZUR_Path.Name = "CZUR_Path";
            this.CZUR_Path.Size = new System.Drawing.Size(96, 23);
            this.CZUR_Path.TabIndex = 26;
            this.CZUR_Path.Text = "CZUR_Path";
            this.CZUR_Path.UseVisualStyleBackColor = true;
            this.CZUR_Path.Click += new System.EventHandler(this.CZUR_Path_Click);
            // 
            // ImageDPI
            // 
            this.ImageDPI.AutoSize = true;
            this.ImageDPI.Location = new System.Drawing.Point(860, 313);
            this.ImageDPI.Name = "ImageDPI";
            this.ImageDPI.Size = new System.Drawing.Size(69, 15);
            this.ImageDPI.TabIndex = 27;
            this.ImageDPI.Text = "图片DPI:";
            // 
            // CZURDPI_Text
            // 
            this.CZURDPI_Text.Location = new System.Drawing.Point(935, 310);
            this.CZURDPI_Text.Name = "CZURDPI_Text";
            this.CZURDPI_Text.Size = new System.Drawing.Size(56, 25);
            this.CZURDPI_Text.TabIndex = 28;
            // 
            // CZUR_DPI
            // 
            this.CZUR_DPI.Location = new System.Drawing.Point(1018, 310);
            this.CZUR_DPI.Name = "CZUR_DPI";
            this.CZUR_DPI.Size = new System.Drawing.Size(106, 23);
            this.CZUR_DPI.TabIndex = 29;
            this.CZUR_DPI.Text = "CZUR_DPI";
            this.CZUR_DPI.UseVisualStyleBackColor = true;
            this.CZUR_DPI.Click += new System.EventHandler(this.CZUR_DPI_Click);
            // 
            // ImagePrefix
            // 
            this.ImagePrefix.AutoSize = true;
            this.ImagePrefix.Location = new System.Drawing.Point(576, 350);
            this.ImagePrefix.Name = "ImagePrefix";
            this.ImagePrefix.Size = new System.Drawing.Size(75, 15);
            this.ImagePrefix.TabIndex = 30;
            this.ImagePrefix.Text = "图片前缀:";
            // 
            // CZURPrefix_Text
            // 
            this.CZURPrefix_Text.Location = new System.Drawing.Point(656, 347);
            this.CZURPrefix_Text.Name = "CZURPrefix_Text";
            this.CZURPrefix_Text.Size = new System.Drawing.Size(94, 25);
            this.CZURPrefix_Text.TabIndex = 31;
            // 
            // ImageNumber
            // 
            this.ImageNumber.AutoSize = true;
            this.ImageNumber.Location = new System.Drawing.Point(764, 353);
            this.ImageNumber.Name = "ImageNumber";
            this.ImageNumber.Size = new System.Drawing.Size(75, 15);
            this.ImageNumber.TabIndex = 32;
            this.ImageNumber.Text = "起始序号:";
            // 
            // CUZRNumber_Text
            // 
            this.CUZRNumber_Text.Location = new System.Drawing.Point(860, 347);
            this.CUZRNumber_Text.Name = "CUZRNumber_Text";
            this.CUZRNumber_Text.Size = new System.Drawing.Size(130, 25);
            this.CUZRNumber_Text.TabIndex = 33;
            // 
            // CZUR_Custom
            // 
            this.CZUR_Custom.Location = new System.Drawing.Point(1018, 350);
            this.CZUR_Custom.Name = "CZUR_Custom";
            this.CZUR_Custom.Size = new System.Drawing.Size(106, 23);
            this.CZUR_Custom.TabIndex = 34;
            this.CZUR_Custom.Text = "CZUR_Custom";
            this.CZUR_Custom.UseVisualStyleBackColor = true;
            this.CZUR_Custom.Click += new System.EventHandler(this.CZUR_Custom_Click);
            // 
            // HorResolut
            // 
            this.HorResolut.AutoSize = true;
            this.HorResolut.Location = new System.Drawing.Point(575, 386);
            this.HorResolut.Name = "HorResolut";
            this.HorResolut.Size = new System.Drawing.Size(90, 15);
            this.HorResolut.TabIndex = 35;
            this.HorResolut.Text = "横向分辨率:";
            // 
            // HORResolut_Text
            // 
            this.HORResolut_Text.Location = new System.Drawing.Point(671, 383);
            this.HORResolut_Text.Name = "HORResolut_Text";
            this.HORResolut_Text.Size = new System.Drawing.Size(79, 25);
            this.HORResolut_Text.TabIndex = 36;
            // 
            // VertResolut
            // 
            this.VertResolut.AutoSize = true;
            this.VertResolut.Location = new System.Drawing.Point(764, 389);
            this.VertResolut.Name = "VertResolut";
            this.VertResolut.Size = new System.Drawing.Size(90, 15);
            this.VertResolut.TabIndex = 37;
            this.VertResolut.Text = "纵向分辨率:";
            // 
            // VertResolut_Text
            // 
            this.VertResolut_Text.Location = new System.Drawing.Point(863, 386);
            this.VertResolut_Text.Name = "VertResolut_Text";
            this.VertResolut_Text.Size = new System.Drawing.Size(127, 25);
            this.VertResolut_Text.TabIndex = 38;
            // 
            // CZUR_Zoom
            // 
            this.CZUR_Zoom.Location = new System.Drawing.Point(1018, 386);
            this.CZUR_Zoom.Name = "CZUR_Zoom";
            this.CZUR_Zoom.Size = new System.Drawing.Size(106, 23);
            this.CZUR_Zoom.TabIndex = 39;
            this.CZUR_Zoom.Text = "CZUR_Zoom";
            this.CZUR_Zoom.UseVisualStyleBackColor = true;
            this.CZUR_Zoom.Click += new System.EventHandler(this.CZUR_Zoom_Click);
            // 
            // CZURRatate
            // 
            this.CZURRatate.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CZURRatate.FormattingEnabled = true;
            this.CZURRatate.Location = new System.Drawing.Point(568, 500);
            this.CZURRatate.Name = "CZURRatate";
            this.CZURRatate.Size = new System.Drawing.Size(148, 23);
            this.CZURRatate.TabIndex = 40;
            this.CZURRatate.DropDownClosed += new System.EventHandler(this.ComboRatateDropClosede);
            // 
            // CZURClrMode
            // 
            this.CZURClrMode.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CZURClrMode.FormattingEnabled = true;
            this.CZURClrMode.Location = new System.Drawing.Point(773, 500);
            this.CZURClrMode.Name = "CZURClrMode";
            this.CZURClrMode.Size = new System.Drawing.Size(148, 23);
            this.CZURClrMode.TabIndex = 41;
            this.CZURClrMode.DropDownClosed += new System.EventHandler(this.ComboClrModeDropClosed);
            // 
            // CZURGrid
            // 
            this.CZURGrid.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CZURGrid.FormattingEnabled = true;
            this.CZURGrid.Location = new System.Drawing.Point(568, 537);
            this.CZURGrid.Name = "CZURGrid";
            this.CZURGrid.Size = new System.Drawing.Size(148, 23);
            this.CZURGrid.TabIndex = 42;
            this.CZURGrid.DropDownClosed += new System.EventHandler(this.ComboGridDropClosed);
            // 
            // CZURMode
            // 
            this.CZURMode.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CZURMode.FormattingEnabled = true;
            this.CZURMode.Location = new System.Drawing.Point(976, 500);
            this.CZURMode.Name = "CZURMode";
            this.CZURMode.Size = new System.Drawing.Size(148, 23);
            this.CZURMode.TabIndex = 43;
            this.CZURMode.DropDownClosed += new System.EventHandler(this.ComboModeDropClosed);
            // 
            // CZUR_Format_Bmp
            // 
            this.CZUR_Format_Bmp.Location = new System.Drawing.Point(644, 420);
            this.CZUR_Format_Bmp.Name = "CZUR_Format_Bmp";
            this.CZUR_Format_Bmp.Size = new System.Drawing.Size(163, 23);
            this.CZUR_Format_Bmp.TabIndex = 44;
            this.CZUR_Format_Bmp.Text = "CZUR_Format_Bmp";
            this.CZUR_Format_Bmp.UseVisualStyleBackColor = true;
            this.CZUR_Format_Bmp.Click += new System.EventHandler(this.CZUR_Format_Bmp_Click);
            // 
            // BmpFormat
            // 
            this.BmpFormat.AutoSize = true;
            this.BmpFormat.Location = new System.Drawing.Point(571, 424);
            this.BmpFormat.Name = "BmpFormat";
            this.BmpFormat.Size = new System.Drawing.Size(67, 15);
            this.BmpFormat.TabIndex = 45;
            this.BmpFormat.Text = "图片格式";
            // 
            // JpgFormat
            // 
            this.JpgFormat.AutoSize = true;
            this.JpgFormat.Location = new System.Drawing.Point(576, 460);
            this.JpgFormat.Name = "JpgFormat";
            this.JpgFormat.Size = new System.Drawing.Size(61, 15);
            this.JpgFormat.TabIndex = 46;
            this.JpgFormat.Text = "JPG格式";
            // 
            // CZUR_Format_Jpg
            // 
            this.CZUR_Format_Jpg.Location = new System.Drawing.Point(644, 456);
            this.CZUR_Format_Jpg.Name = "CZUR_Format_Jpg";
            this.CZUR_Format_Jpg.Size = new System.Drawing.Size(163, 23);
            this.CZUR_Format_Jpg.TabIndex = 47;
            this.CZUR_Format_Jpg.Text = "CZUR_Format_Jpg";
            this.CZUR_Format_Jpg.UseVisualStyleBackColor = true;
            this.CZUR_Format_Jpg.Click += new System.EventHandler(this.CZUR_Format_Jpg_Click);
            // 
            // JPGQuality
            // 
            this.JPGQuality.AutoSize = true;
            this.JPGQuality.Location = new System.Drawing.Point(828, 460);
            this.JPGQuality.Name = "JPGQuality";
            this.JPGQuality.Size = new System.Drawing.Size(117, 15);
            this.JPGQuality.TabIndex = 48;
            this.JPGQuality.Text = "JPG质量(0~100)";
            // 
            // JpgQuality_Text
            // 
            this.JpgQuality_Text.Location = new System.Drawing.Point(951, 454);
            this.JpgQuality_Text.Name = "JpgQuality_Text";
            this.JpgQuality_Text.Size = new System.Drawing.Size(100, 25);
            this.JpgQuality_Text.TabIndex = 49;
            // 
            // CZURSelect
            // 
            this.CZURSelect.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CZURSelect.FormattingEnabled = true;
            this.CZURSelect.Location = new System.Drawing.Point(773, 539);
            this.CZURSelect.Name = "CZURSelect";
            this.CZURSelect.Size = new System.Drawing.Size(148, 23);
            this.CZURSelect.TabIndex = 51;
            this.CZURSelect.DropDownClosed += new System.EventHandler(this.ComboSelectDropClosed);
            // 
            // CZURBlankDetect
            // 
            this.CZURBlankDetect.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.CZURBlankDetect.FormattingEnabled = true;
            this.CZURBlankDetect.Location = new System.Drawing.Point(976, 539);
            this.CZURBlankDetect.Name = "CZURBlankDetect";
            this.CZURBlankDetect.Size = new System.Drawing.Size(146, 23);
            this.CZURBlankDetect.TabIndex = 52;
            this.CZURBlankDetect.DropDownClosed += new System.EventHandler(this.ComboBlankDropClosed);
            // 
            // axEtOcxEx1
            // 
            this.axEtOcxEx1.Enabled = true;
            this.axEtOcxEx1.Location = new System.Drawing.Point(13, 15);
            this.axEtOcxEx1.Name = "axEtOcxEx1";
            this.axEtOcxEx1.OcxState = ((System.Windows.Forms.AxHost.State)(resources.GetObject("axEtOcxEx1.OcxState")));
            this.axEtOcxEx1.Size = new System.Drawing.Size(525, 532);
            this.axEtOcxEx1.TabIndex = 50;
            this.axEtOcxEx1.CZUR_CALLBACK += new AxEtOcxExLib._DEtOcxExEvents_CZUR_CALLBACKEventHandler(this.axEtOcxEx1_CZUR_CALLBACK);
            this.axEtOcxEx1.CZUR_UPLOAD_CALLBACK += new AxEtOcxExLib._DEtOcxExEvents_CZUR_UPLOAD_CALLBACKEventHandler(this.axEtOcxEx1_CZUR_UPLOAD_CALLBACK);
            this.axEtOcxEx1.CZUR_PDF_CALLBACK += new AxEtOcxExLib._DEtOcxExEvents_CZUR_PDF_CALLBACKEventHandler(this.axEtOcxEx1_CZUR_PDF_CALLBACK);
            // 
            // imgFile
            // 
            this.imgFile.AutoSize = true;
            this.imgFile.Location = new System.Drawing.Point(574, 237);
            this.imgFile.Name = "imgFile";
            this.imgFile.Size = new System.Drawing.Size(67, 15);
            this.imgFile.TabIndex = 53;
            this.imgFile.Text = "图片文件";
            // 
            // CZUR_ImageFile
            // 
            this.CZUR_ImageFile.Location = new System.Drawing.Point(650, 234);
            this.CZUR_ImageFile.Name = "CZUR_ImageFile";
            this.CZUR_ImageFile.Size = new System.Drawing.Size(245, 25);
            this.CZUR_ImageFile.TabIndex = 54;
            // 
            // CZUR_PDF_Image
            // 
            this.CZUR_PDF_Image.Location = new System.Drawing.Point(916, 234);
            this.CZUR_PDF_Image.Name = "CZUR_PDF_Image";
            this.CZUR_PDF_Image.Size = new System.Drawing.Size(174, 23);
            this.CZUR_PDF_Image.TabIndex = 55;
            this.CZUR_PDF_Image.Text = "CZUR_PDF_Image";
            this.CZUR_PDF_Image.UseVisualStyleBackColor = true;
            this.CZUR_PDF_Image.Click += new System.EventHandler(this.CZUR_PDF_Image_Click);
            // 
            // PDFFile
            // 
            this.PDFFile.AutoSize = true;
            this.PDFFile.Location = new System.Drawing.Point(578, 271);
            this.PDFFile.Name = "PDFFile";
            this.PDFFile.Size = new System.Drawing.Size(61, 15);
            this.PDFFile.TabIndex = 56;
            this.PDFFile.Text = "pdf文件";
            // 
            // CZUR_PDFFile
            // 
            this.CZUR_PDFFile.Location = new System.Drawing.Point(650, 266);
            this.CZUR_PDFFile.Name = "CZUR_PDFFile";
            this.CZUR_PDFFile.Size = new System.Drawing.Size(245, 25);
            this.CZUR_PDFFile.TabIndex = 57;
            // 
            // CZUR_PDF_Submit
            // 
            this.CZUR_PDF_Submit.Location = new System.Drawing.Point(916, 267);
            this.CZUR_PDF_Submit.Name = "CZUR_PDF_Submit";
            this.CZUR_PDF_Submit.Size = new System.Drawing.Size(174, 23);
            this.CZUR_PDF_Submit.TabIndex = 58;
            this.CZUR_PDF_Submit.Text = "CZUR_PDF_Submit";
            this.CZUR_PDF_Submit.UseVisualStyleBackColor = true;
            this.CZUR_PDF_Submit.Click += new System.EventHandler(this.CZUR_PDF_Submit_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1135, 566);
            this.Controls.Add(this.CZUR_PDF_Submit);
            this.Controls.Add(this.CZUR_PDFFile);
            this.Controls.Add(this.PDFFile);
            this.Controls.Add(this.CZUR_PDF_Image);
            this.Controls.Add(this.CZUR_ImageFile);
            this.Controls.Add(this.imgFile);
            this.Controls.Add(this.CZURBlankDetect);
            this.Controls.Add(this.CZURSelect);
            this.Controls.Add(this.axEtOcxEx1);
            this.Controls.Add(this.JpgQuality_Text);
            this.Controls.Add(this.JPGQuality);
            this.Controls.Add(this.CZUR_Format_Jpg);
            this.Controls.Add(this.JpgFormat);
            this.Controls.Add(this.BmpFormat);
            this.Controls.Add(this.CZUR_Format_Bmp);
            this.Controls.Add(this.CZURMode);
            this.Controls.Add(this.CZURGrid);
            this.Controls.Add(this.CZURClrMode);
            this.Controls.Add(this.CZURRatate);
            this.Controls.Add(this.CZUR_Zoom);
            this.Controls.Add(this.VertResolut_Text);
            this.Controls.Add(this.VertResolut);
            this.Controls.Add(this.HORResolut_Text);
            this.Controls.Add(this.HorResolut);
            this.Controls.Add(this.CZUR_Custom);
            this.Controls.Add(this.CUZRNumber_Text);
            this.Controls.Add(this.ImageNumber);
            this.Controls.Add(this.CZURPrefix_Text);
            this.Controls.Add(this.ImagePrefix);
            this.Controls.Add(this.CZUR_DPI);
            this.Controls.Add(this.CZURDPI_Text);
            this.Controls.Add(this.ImageDPI);
            this.Controls.Add(this.CZUR_Path);
            this.Controls.Add(this.CZURPath_Text);
            this.Controls.Add(this.ImagePath);
            this.Controls.Add(this.CZUR_GrabSingleImage);
            this.Controls.Add(this.CZUR_CloseDevice);
            this.Controls.Add(this.CZUR_OpenDevice);
            this.Controls.Add(this.CZUR_Http_Form);
            this.Controls.Add(this.HttpContent_Text);
            this.Controls.Add(this.HttpContent);
            this.Controls.Add(this.HttpForm_Text);
            this.Controls.Add(this.HttpForm);
            this.Controls.Add(this.CZUR_Http_User_Pwd);
            this.Controls.Add(this.HttpPwd_Text);
            this.Controls.Add(this.HttpPwd);
            this.Controls.Add(this.HttpUser_Text);
            this.Controls.Add(this.HttpUser);
            this.Controls.Add(this.CZUR_Http_URL);
            this.Controls.Add(this.HttpFile_Text);
            this.Controls.Add(this.HttpFile);
            this.Controls.Add(this.HttpURL_Text);
            this.Controls.Add(this.HttpURL);
            this.Controls.Add(this.CZUR_Deinitialize);
            this.Controls.Add(this.CZUR_Initialize);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.CZUR_Load);
            ((System.ComponentModel.ISupportInitialize)(this.axEtOcxEx1)).EndInit();
           // this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        string[] rotate, clrmode, displaygrid, mode, select, blankdetect;

        private System.Windows.Forms.Button CZUR_Initialize;
        private System.Windows.Forms.Button CZUR_Deinitialize;
        private System.Windows.Forms.Label HttpURL;
        private System.Windows.Forms.TextBox HttpURL_Text;
        private System.Windows.Forms.Label HttpFile;
        private System.Windows.Forms.TextBox HttpFile_Text;
        private System.Windows.Forms.Button CZUR_Http_URL;
        private System.Windows.Forms.Label HttpUser;
        private System.Windows.Forms.TextBox HttpUser_Text;
        private System.Windows.Forms.Label HttpPwd;
        private System.Windows.Forms.TextBox HttpPwd_Text;
        private System.Windows.Forms.Button CZUR_Http_User_Pwd;
        private System.Windows.Forms.Label HttpForm;
        private System.Windows.Forms.TextBox HttpForm_Text;
        private System.Windows.Forms.Label HttpContent;
        private System.Windows.Forms.TextBox HttpContent_Text;
        private System.Windows.Forms.Button CZUR_Http_Form;
        private System.Windows.Forms.Button CZUR_OpenDevice;
        private System.Windows.Forms.Button CZUR_CloseDevice;
        private System.Windows.Forms.Button CZUR_GrabSingleImage;
        private System.Windows.Forms.Label ImagePath;
        private System.Windows.Forms.TextBox CZURPath_Text;
        private System.Windows.Forms.Button CZUR_Path;
        private System.Windows.Forms.Label ImageDPI;
        private System.Windows.Forms.TextBox CZURDPI_Text;
        private System.Windows.Forms.Button CZUR_DPI;
        private System.Windows.Forms.Label ImagePrefix;
        private System.Windows.Forms.TextBox CZURPrefix_Text;
        private System.Windows.Forms.Label ImageNumber;
        private System.Windows.Forms.TextBox CUZRNumber_Text;
        private System.Windows.Forms.Button CZUR_Custom;
        private System.Windows.Forms.Label HorResolut;
        private System.Windows.Forms.TextBox HORResolut_Text;
        private System.Windows.Forms.Label VertResolut;
        private System.Windows.Forms.TextBox VertResolut_Text;
        private System.Windows.Forms.Button CZUR_Zoom;
        private System.Windows.Forms.ComboBox CZURRatate;
        private System.Windows.Forms.ComboBox CZURClrMode;
        private System.Windows.Forms.ComboBox CZURGrid;
        private System.Windows.Forms.ComboBox CZURMode;
        private System.Windows.Forms.Button CZUR_Format_Bmp;
        private System.Windows.Forms.Label BmpFormat;
        private System.Windows.Forms.Label JpgFormat;
        private System.Windows.Forms.Button CZUR_Format_Jpg;
        private System.Windows.Forms.Label JPGQuality;
        private System.Windows.Forms.TextBox JpgQuality_Text;
        private AxEtOcxExLib.AxEtOcxEx axEtOcxEx1;
        private System.Windows.Forms.ComboBox CZURSelect;
        private System.Windows.Forms.ComboBox CZURBlankDetect;
        private System.Windows.Forms.Label imgFile;
        private System.Windows.Forms.TextBox CZUR_ImageFile;
        private System.Windows.Forms.Button CZUR_PDF_Image;
        private System.Windows.Forms.Label PDFFile;
        private System.Windows.Forms.TextBox CZUR_PDFFile;
        private System.Windows.Forms.Button CZUR_PDF_Submit;
    }
}

