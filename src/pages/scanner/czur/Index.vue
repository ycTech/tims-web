<template>
  <div class="wrapper">
    <SCRIPT type="text/javascript" FOR="CZUROcx" EVENT="CZUR_CALLBACK(uploadcnt, barcode, httpinfo, imagefile1, imagefile2)" >
      window.JS_CZUR_CALLBACK(uploadcnt, barcode, httpinfo, imagefile1, imagefile2);
    </SCRIPT>
    <SCRIPT type="text/javascript" FOR="CZUROcx" EVENT="CZUR_UPLOAD_CALLBACK(uploadcnt, localfile, errcode, errmsg)" >
      window.JS_CZUR_UPLOAD_CALLBACK(uploadcnt, localfile, errcode, errmsg);
    </SCRIPT>
    <SCRIPT type="text/javascript" FOR="CZUROcx" EVENT="CZUR_PDF_CALLBACK(pdfstatus)" >
      window.JS_CZUR_PDF_CALLBACK(pdfstatus);
    </SCRIPT>
    <div class="ocx-wrapper">
      <object
        id="CZUROcx"
        wmode="opaque"
        classid="CLSID:6BA87457-4473-41A1-9A48-6AC45389B971"
        style="width: 60%; height: 100%; z-index:1;"
        >
        <param name="wmode" value="opaque" />
      </object>
    </div>
    {{ name }}
  </div>
</template>

<script>
import mixin from '@/mixins/message'
export default {
  name: 'ScannerCzur',
  mixins: [mixin],
  data () {
    return {
      fileDirect: '',
      name: '成者高拍仪'
    }
  },
  // new Vue ()
  // Init Events & Lifecycle
  //   --> beforeCreate
  // 实例初始化之后，数据观测（data observer）和event/watch事件配置之前被调用
  beforeCreate () {},
  // Init injections & reactivity
  created () {
  },
  // Has 'el' option?
  //  |    |
  // yes  No-> when vm.$mount(el) is call
  //  |           |
  // Has 'template' option
  //  |
  // Yes-> Compile template into render function
  // No -> Compile el's outerHTML as template
  //  |
  // beforeMount
  beforeMount () {},
  // Create vm.$el and replace 'el' with it
  mounted () {
    console.log('mounted')
    this.initCzurEventListening()
  },
  // Mounted
  //  When data change
  //    -> beforeUpdate
  //  Virtrual DOM re-render and patch
  //    -> updated
  // when vm.$destory is called
  beforeDestroy () {
    console.log('beforeDestroy')
    this.$emit('before-destroy')
  },
  // Teardown watchers, child components and event listeners
  // Destroyed
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    startDevice () {
      let breadth = 0 // A3幅面
      let detect = 1 // 边缘检测
      this.initCzurEventListening()
      let res = this.czurInitialize() &&
        this.czurScanBreadth(breadth) &&
        this.czurEdgeDetect(detect) &&
        this.czurEdgeCutting() &&
        this.czurOpenDevice()
      if (res) {
        let breadthLabel = breadth === 0 ? 'A3幅面' : 'A4幅面'
        let detectLabel = detect === 1 ? '开启' : '关闭'
        this.$success(
          '启动设备成功',
          `扫描幅面：${detectLabel}；边缘检测:${breadthLabel}；开启自动裁边;`
        )
      }
    },
    scan () {
      this.czurGrabSingleImage()
    },
    closeDevice () {
      this.closeDevice()
      this.czurDeinitialize()
    },
    mergeImageToPdf (imageFilePathList = []) {
      for (var i = 0; i < imageFilePathList.length; i++) {
        this.czurPdfImage(imageFilePathList[i])
      }
      this.czurPdfSubmit()
    },
    czurInitialize () {
      var lInitialize = window.CZUROcx.CZUR_Initialize('JS_OCX.log')
      if (lInitialize === 0) {
        this.$alert('设备初始化失败！')
        return false
      }
      console.log('设备初始化成功！')
      return true
    },
    // 打开设备 0：失败，1：成功，2：设备未连接或型号不支持（不支持ET16、ET18U）
    czurOpenDevice () {
      console.log('打开设备')
      var bOpenDevice = window.CZUROcx.CZUR_OpenDevice()
      if (bOpenDevice === 0) {
        this.$error('打开设备失败！', `请确认设备是否已启动，如未启动，请再次点击启动按钮或刷新页面；
        如果设备已启动，无需重复点击。`)
        return false
      } else if (bOpenDevice === 1) {
        console.log('打开设备成功')
        return true
      } else {
        this.$warning('请检查设备是否连接或型号是否支持')
        return false
      }
    },
    // 触发设备进行拍照 0：失败，1：成功
    czurGrabSingleImage () {
      var res = window.CZUROcx.CZUR_GrabSingleImage()
      if (res === 0) {
        this.$error('扫描图像失败！')
        return false
      }
      this.$success('扫描图像成功！正在保存图片到本地...')
      return true
    },
    // 关闭设备
    czurCloseDevice () {
      var res = window.CZUROcx.CZUR_CloseDevice()
      if (res === 0) {
        this.$error('关闭设备失败')
      } else {
        this.$success('关闭设备成功')
      }
    },
    // 设置扫描幅面，0：A3幅面，1：A4幅面，默认A3幅面
    czurScanBreadth (breadth) {
      console.log('设置扫描幅面：' + (breadth === 0 ? 'A3幅面' : 'A4幅面'))
      window.CZUROcx.CZUR_ScanBreadth(breadth)
      return true
    },
    // 是否开启边缘检测，0：关闭，1：开启
    czurEdgeDetect (detect) {
      console.log((detect === 0 ? '关闭' : '开启') + '边缘检测')
      window.CZUROcx.CZUR_EdgeDetect(detect)
      return true
    },
    // 清除Ocx资源
    czurDeinitialize () {
      console.log('清除控件内存资源')
      window.CZUROcx.CZUR_Deinitialize()
    },
    // 设置图片保存路径
    czurPath (path) {
      console.log('设置图片保存路径', path)
      window.CZUROcx.CZUR_Path(path)
    },
    // 自定义图片命名规则
    czurCustom (prefix, initNumber = 1) {
      console.log('自定义图片命名规则', '前缀：' + prefix + ', 图片起始序号：' + initNumber)
      window.CZUROcx.CZUR_Custom(prefix, initNumber)
    },
    //  自动对图片进行裁边处理
    czurEdgeCutting () {
      console.log('自动对图片进行裁边处理')
      window.CZUROcx.CZUR_EdgeCutting()
      return true
    },
    // 添加用于合成pdf的图片文件
    czurPdfImage (filePath) {
      var res = window.CZUROcx.CZUR_Pdf_Image(filePath)
      if (res === 0) {
        this.$success('添加用于合成PDF的图片文件添加成功', '图片路径：' + filePath)
        return true
      }
      this.$error('添加图片失败', filePath)
      return false
    },
    // 将添加的图片文件合成PDF文档
    czurPdfSubmit (filePath) {
      let defaultPath = this.fileDirect || 'D:'
      let defaultFileName = 'CZUR_' + this.getDateTimeString() + '.pdf'
      filePath = filePath || defaultPath + '\\' + defaultFileName
      var res = window.CZUROcx.CZUR_Pdf_Submit(filePath)
      if (res === 0) {
        this.$success('合成pdf成功', '正在生成pdf并保存到本地：' + filePath)
      } else {
        this.$error('合成PDF失败')
      }
    },
    initCzurEventListening () {
      let me = this
      window.JS_CZUR_CALLBACK = function (uploadcnt, barcode, httpinfo, imagefile1, imagefile2) {
        me.$success('图片已保存到本地', imagefile1)
        me.$emit('scan-single-image', imagefile1)
        me.fileDirect = imagefile1.slice(0, imagefile1.lastIndexOf('\\'))
        console.log(me.fileDirect)
        console.log(imagefile1)
      }
      window.JS_CZUR_UPLOAD_CALLBACK = function (uploadcnt, localfile, errcode, errmsg) {
        me.$success('图片上传成功', '上传的本地图片地址为：' + localfile)
        console.log(uploadcnt, localfile, errcode, errmsg)
      }
      window.JS_CZUR_PDF_CALLBACK = function (pdfstatus) {
        if (pdfstatus === 0) {
          me.$success('生成PDF成功！')
        } else {
          me.$error('生成PDF失败！')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .ocx-wrapper {
    width: 100%;
    height: 100%;
  }
}
</style>
