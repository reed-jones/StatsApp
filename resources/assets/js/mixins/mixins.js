const getWebsites = {
  methods: {
    getWebsites() {
      axios.get('/api/website').then(data => {
        // console.log(JSON.parse(JSON.stringify(data.data)))
        this.$store.commit('setWebsites', data.data)
      })
    }
  }
}

export {
  getWebsites
}