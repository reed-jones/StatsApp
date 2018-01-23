<template lang="pug">
div(class="bg-white container mx-auto rounded overflow-hidden shadow-lg")
    div(class='px-6 py-4 text-center border-b bg-grey')
      h2 Website List
    div(class="flex flex-col px-6 py-4")
      div(class="flex flex-row border-b border-t p-2")
        div.cursor-pointer(:class='classes.name' @click='sortByName')
          strong Name
        div.cursor-pointer(:class="classes.url" @click='sortByURL')
          strong URL
        div.cursor-pointer(:class="classes.uptime" @click='sortBySSL')
          strong SSL Days Left
        div(:class="classes.btn")
          strong Details
      div(class="flex flex-row border-b border-t p-2" v-for='site in websites')
        div(:class='classes.name')
          | {{ site.name }}
        div(:class="classes.url")
          | {{ site.url }}
        div(:class="classes.uptime")
          | {{ site.ssl_latest.days_left }} Days Left
        div(:class="classes.btn")
          button(class="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded-full" @click='deleteSite(site.id)') Remove

</template>

<script>
export default {
  data() {
    return {
      websites: [],
      sortBy: {
        column: '',
        order: 0,
      },
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
        console.log(JSON.parse(JSON.stringify(data.data)))
        this.websites = data.data
      })
    },
    deleteSite(id) {
      axios.delete('/api/website/' + id).then(data => {
        console.log('Website Deleted')
        this.getWebsites()
      })
    },
    sortBySSL() {
      if (this.sortBy.column === 'SSL') {
        this.sortBy.order = ++this.sortBy.order % 2
      } else {
        this.sortBy = {
          column: 'SSL',
          order: 0,
        }
      }
      this.websites = this.websites.sort((a, b) => {
        return this.sortBy.order === 0
          ? a.ssl_latest.days_left - b.ssl_latest.days_left
          : b.ssl_latest.days_left - a.ssl_latest.days_left
      })
    },
    sortByURL() {
      if (this.sortBy.column === 'URL') {
        this.sortBy.order = ++this.sortBy.order % 2
      } else {
        this.sortBy = {
          column: 'URL',
          order: 0,
        }
      }
      this.websites = this.websites.sort((a, b) => {
        const nameA = a.url.toLowerCase() // ignore upper and lowercase
        const nameB = b.url.toLowerCase() // ignore upper and lowercase
        return this.sortBy.order === 0
          ? nameA > nameB ? 1 : nameA < nameB ? -1 : 0
          : nameA > nameB ? -1 : nameA < nameB ? 1 : 0
      })
    },
    sortByName() {
      if (this.sortBy.column === 'Name') {
        this.sortBy.order = ++this.sortBy.order % 2
      } else {
        this.sortBy = {
          column: 'Name',
          order: 0,
        }
      }
      this.websites = this.websites.sort((a, b) => {
        const nameA = a.name.toUpperCase() // ignore upper and lowercase
        const nameB = b.name.toUpperCase() // ignore upper and lowercase
        return this.sortBy.order === 0
          ? nameA > nameB ? 1 : nameA < nameB ? -1 : 0
          : nameA > nameB ? -1 : nameA < nameB ? 1 : 0
      })
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>