<template>
  <div class="scanner">
    <div class="header">
      <Row>
        <Col span="12">
          <h2>
            影像采集系统
          </h2>
        </Col>
        <Col span="12" class="text-right">
          <Form ref="toolbar-form" :label-width="120" inline >
            <FormItem label="选择影像设备">
              <Select v-model="scannerType" style="width: 200px;">
                <Option
                  v-for="item in scannerTypeList"
                  :value="item.value"
                  :label="item.label"
                  :key="item.value">
                </Option>
              </Select>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>
    <div class="layout">
      <div class="layout-sider layout-sider__left"></div>
      <div class="layout-content">
        <component
          :ref="currentView.name"
          :is="currentView"
          @scan-single-image="onScanSingleImage"
          @before-destroy="onScannerDestroy"></component>
      </div>
      <div class="layout-sider layout-sider__right">
        <div class="button-wrapper">
          <Tooltip :transfer="true" content="启动设备" placement="left">
            <Button
              type="primary"
              icon="play"
              title="启动设备"
              @click="onStartDevice"
            />
          </Tooltip>
        </div>
        <div class="button-wrapper">
          <Tooltip :transfer="true" content="开始扫描" placement="left">
            <Button
              type="primary"
              icon="camera"
              title="开始扫描"
              @click="onScan"
            />
          </Tooltip>
        </div>
        <div class="button-wrapper">
          <Tooltip :transfer="true" content="合并PDF" placement="left">
            <Button
              type="primary"
              icon="ios-bookmarks"
              title="合并PDF"
              @click="onMergeImageToPdf">
            </Button>
          </Tooltip>
        </div>
        <div class="button-wrapper">
          <Tooltip :transfer="true" content="上传PDF" placement="left">
            <Button type="primary" icon="upload" title="上传PDF"></Button>
          </Tooltip>
        </div>
        <div class="button-wrapper">
          <Tooltip :transfer="true" content="设置" placement="left">
            <Button type="primary" icon="gear-a" title="设置"></Button>
          </Tooltip>
        </div>
      </div>
      <div class="layout-footer">
        <div v-for="(path, index) in imageList" :key="index">
          {{ path }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScannerFounder from './founder'
import ScannerCzur from './czur'
import ScannerZhelin from './zhelin'
const ScannerMap = {
  ScannerFounder: ScannerFounder,
  ScannerCzur: ScannerCzur,
  ScannerZhelin: ScannerZhelin
}
export default {
  components: {
    ScannerFounder,
    ScannerCzur,
    ScannerZhelin
  },
  data () {
    return {
      scannerType: 'ScannerCzur',
      imageList: [],
      scannerTypeList: [
        { value: 'ScannerFounder', label: '方正高速扫描仪' },
        { value: 'ScannerCzur', label: '成者高拍仪' },
        { value: 'ScannerZhelin', label: '哲林高拍仪' }
      ]
    }
  },
  computed: {
    currentView () {
      return ScannerMap[this.scannerType] || null
    }
  },
  methods: {
    getScannerRef () {
      if (this.currentView) {
        return this.$refs[this.currentView.name]
      } else {
        return false
      }
    },
    onStartDevice () {
      this.getScannerRef() &&
      this.getScannerRef().startDevice()
    },
    onScan () {
      this.getScannerRef() &&
      this.getScannerRef().scan()
    },
    onScanSingleImage (imagePath) {
      console.log('onScanSingleImage')
      console.log(imagePath)
      this.imageList.push(imagePath)
    },
    onScannerDestroy () {
      this.imageList.splice(0, this.imageList.length)
    },
    onMergeImageToPdf () {
      this.getScannerRef() &&
      this.getScannerRef().mergeImageToPdf(this.imageList)
    }
  }
}
</script>

<style lang="less">
.scanner {
  .header {
    z-index: 999;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    height: 60px;
    padding: 15px 20px;
    background-color: #2c3448;
    color: #f1f2f3;
    .ivu-form .ivu-form-item-label {
      color: #f1f2f3;
    }
  }
  .layout {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 600px;
  }
  .layout-sider {
    position: absolute;
    background: #0c1428;
    top: 0;
    bottom: 160px;
    overflow: auto;
  }
  .layout-content {
    position: absolute;
    top: 0;
    left: 220px;
    right: 96px;
    bottom: 160px;
  }
  .layout-sider__left {
    left: 0;
    width: 220px;
  }
  .layout-sider__right {
    width: 96px;
    right: 0;
    padding: 0 20px;
    .button-wrapper {
      margin: 30px 0;
      text-align: center;
      .ivu-btn {
        font-size: 24px;
        width: 48px;
        height: 48px;
        line-height: 48px;
        padding: 0;
        text-align: center;
        border: 0;
        background-color: rgba(200, 210, 220, 0.3);
        &:hover {
          background-color: rgba(200, 210, 220, 0.6);
        }
      }
    }
  }
  .layout-footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 160px;
    background: #2c3448;
  }
}
</style>
