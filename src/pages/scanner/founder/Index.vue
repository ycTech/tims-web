<template>
  <div class="wrapper">
    <div>
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScannerFounder',
  data () {
    return {
      name: '方正高速扫描仪'
    }
  },
  methods: {
    startDevice () {
      console.log(this.name + 'startDevice')
    },
    closeDevice () {

    },
    scan () {

    },
    mergeImageToPdf () {

    }
  }
}
</script>

<style lang="less" scoped>
</style>
