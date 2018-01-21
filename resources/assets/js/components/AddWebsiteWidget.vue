<template lang="pug">
div(class="bg-white max-w-xs rounded overflow-hidden shadow-lg")
    div(class='px-6 py-4 text-center border-b bg-grey')
      h2 Quick Add A Website
    form.flex.flex-col(@submit.prevent='AddWebsite')
      input-box(
        placeholder="example.com"
        type="text" id='website' v-model='preValidation.url' :errors='errors' @input='resetErrors') URL
      input-box(
        placeholder="My Awesome Site"
        type="text" id='website' v-model='preValidation.name') Name (optional)
      button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mx-6 my-4 py-2  px-4 rounded-full float-right" type='submit') Add Website
</template>

<script>
import InputBox from './InputBox'
export default {
  name: 'AddWebsiteWidget',
  components: {
    InputBox,
  },
  data() {
    return {
      preValidation: {
        url: '',
        name: '',
      },
      errors: '',
      // urlRegex: /^https?:\/\/.+\..{2,}$/,
      urlRegex: /^(https?:\/\/)?(.+\..{2,})$/,
    }
  },
  computed: {
    sitesForm() {
      let localurl = this.preValidation.url
      let m = localurl.match(this.urlRegex) || []
      let [, protocol, site] = m
      protocol = protocol || 'http://'
      return {
        url: protocol + site,
        name: this.preValidation.name,
      }
    },
  },
  methods: {
    resetErrors() {
      this.errors = ''
    },
    AddWebsite() {
      axios
        .post('/api/website', { ...this.sitesForm })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          this.errors = error.response.data.errors.url[0]
        })
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>


