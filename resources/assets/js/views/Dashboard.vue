<template lang="pug">
.dashboard-page.flex.flex-col
  .flex
    add-website-widget(class='m-6')
  .full-width
    website-list(class='m-6')

</template>

<script>
import AddWebsiteWidget from '../components/AddWebsiteWidget'
import WebsiteList from '../components/WebsiteList'
export default {
  components: {
    AddWebsiteWidget,
    WebsiteList,
  },
}
</script>

<style lang="stylus">
.dashboard-page
  background-image linear-gradient(to top, #a3bded 0%, #6991c7 100%)
</style>
