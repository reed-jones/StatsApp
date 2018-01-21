<template lang="pug">
.dashboard-page.flex.flex-col
  div(class='flex flex-col md:flex-row container mx-auto')
    add-website-widget(class='my-3 md:m-6')
    stats-widget(class='my-3 md:m-6')
  div(class='flex flex-col md:flex-row container')
    website-list(class='my-3 md:m-6')

</template>

<script>
import AddWebsiteWidget from '../components/AddWebsiteWidget'
import StatsWidget from '../components/StatsWidget'
import WebsiteList from '../components/WebsiteList'
export default {
  components: {
    AddWebsiteWidget,
    StatsWidget,
    WebsiteList,
  },
}
</script>

<style lang="stylus">
.dashboard-page
  background-image linear-gradient(to top, #a3bded 0%, #6991c7 100%)
</style>
