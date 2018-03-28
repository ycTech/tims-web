<template>
  <div>
    <div>
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScannerZhelin',
  data () {
    return {
      name: '哲林高拍仪'
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

<style>

</style>
