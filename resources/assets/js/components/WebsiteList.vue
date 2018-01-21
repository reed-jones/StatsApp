<template lang="pug">
div(class="bg-white container mx-auto rounded overflow-hidden shadow-lg")
    div(class='px-6 py-4 text-center border-b bg-grey')
      h2 Website List
    div(class="flex flex-col px-6 py-4")
      div(class="flex flex-row border-b border-t p-2")
        div(:class='classes.name')
          div #[strong Name]
        div(:class="classes.url")
          strong URL
        div(:class="classes.uptime")
          strong uptime
        div(:class="classes.btn")
          strong Details
      div(class="flex flex-row border-b border-t p-2" v-for='site in websites')
        div(:class='classes.name')
          | {{ site.name }}
        div(:class="classes.url")
          | {{ site.url }}
        div(:class="classes.uptime")
          | 100%
        div(:class="classes.btn")
          button(class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded-full" @click='deleteSite(site.id)') Remove

</template>

<script>
export default {
  data() {
    return {
      websites: [],
      classes: {
        name: 'w-1/3 md:w-1/4 flex items-center px-2',
        url: 'md:w-2/5 hidden md:flex items-center px-2',
        uptime: 'w-1/3 m:w-1/5 flex items-center px-2',
        btn: 'w-1/3 md:w-1/4 flex items-center px-2',
      },
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