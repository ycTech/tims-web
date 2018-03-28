export default {
  methods: {
    $alert (msg) {
      this.$Message.info(msg)
    },
    $info (title, desc = '') {
      this.$Notice.info({title, desc})
    },
    $success (title, desc = '') {
      this.$Notice.success({title, desc})
    },
    $warning (title, desc = '') {
      this.$Notice.warning({title, desc})
    },
    $error (title, desc = '') {
      this.$Notice.error({title, desc})
    },
    getDateTimeString () {
      let date = new Date()
      let Year = date.getFullYear()
      let Month = date.getMonth() + 1
      let Dates = date.getDate()
      let Hour = date.getHours()
      let Minite = date.getMinutes()
      let Second = date.getSeconds()
      return `${Year}${Month}${Dates}${Hour}${Minite}${Second}`
    }
  }
}
