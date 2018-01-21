<template lang="pug">
div(class="bg-white max-w-lg rounded overflow-hidden shadow-lg")
    div(class='px-6 py-4 text-center border-b bg-grey')
      h2 Website List
    div(class="flex flex-col px-6 py-4")
      div(class="flex flex-row border-b border-t p-2")
        div(class="md:w-1/4 flex items-center")
          div #[strong Name]
        div(class="md:w-1/2 flex items-center")
          strong URL
        div(class="md:w-1/4 flex items-center")
          strong Details
      div(class="flex flex-row border-b border-t p-2" v-for='site in websites')
        div(class="md:w-1/4 flex items-center")
          | {{ site.name }}
        div(class="md:w-1/2 flex items-center")
          | {{ site.url }}
        div(class="md:w-1/4 flex items-center")
          button(class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded-full" @click='deleteSite(site.id)') Remove

</template>

<script>
export default {
  data() {
    return {
      websites: [],
    }
  },
  mounted() {
    this.getWebsites()
  },
  methods: {
    getWebsites() {
      axios.get('/api/website').then(data => {
        console.log(data.data)
        this.websites = data.data
      })
    },
    deleteSite(id) {
      axios.delete('/api/website/' + id).then(data => {
        console.log('Website Deleted')
        this.getWebsites()
      })
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>