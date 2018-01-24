<template lang="pug">
  div(class="bg-white flex-col rounded overflow-hidden shadow-lg")
    div(class='px-6 py-4 text-center border-b bg-grey')
      h2 Stats
    .flex.flex-col.px-6.py-4
      h1 {{ details.name || details.url }}
      h2 {{ details.url }}
      h3 {{ details.ipv4 }}
      hr
      div(v-if='details.ssl')
        p {{ details.ssl_latest.days_left }} Days Left
        p {{ details.ssl_latest.issuer }}
        p Last Updated: {{ details.ssl_latest.updated_at }}
      hr
      div
        p Fastest Latency: {{ latency.fastest | round }} ms
        p Slowest Latency: {{ latency.slowest | round }} ms
        p Average Latency: {{ latency.average | round }} ms
      hr
      div
        p Fastest Pageload speed: {{ loadSpeed.fastest | fourDecimal }} s
        p Slowest Pageload speed: {{ loadSpeed.slowest | fourDecimal }} s
        p Average Pageload speed: {{ loadSpeed.average | fourDecimal }} s
      hr
      div
        p Uptime: (Coming Soon!)
      //- div
      //-   p {{ details.uptime_all | loadSpeedFastest }}
      //-   p {{ details.uptime_all | loadSpeedSlowest }}
      //-   p {{ details.uptime_all | loadSpeedAverage }}
      button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mx-6 my-4 py-2  px-4 rounded-full float-right opacity-50 cursor-not-allowed" type='submit') More Stats...
</template>

<script>
export default {
  props: {
    details: {
      type: Object,
      default: {},
    },
  },
  computed: {
    latency() {
      let latency = {
        fastest: this.details.uptime_all[0].latency,
        slowest: this.details.uptime_all[0].latency,
        average: 0,
      }

      for (let i = 0; i < this.details.uptime_all.length; ++i) {
        let cur = this.details.uptime_all[i]
        latency.average += cur.latency
        latency.fastest =
          latency.fastest < cur.latency ? latency.fastest : cur.latency
        latency.slowest =
          latency.slowest > cur.latency ? latency.slowest : cur.latency
      }

      latency.average /= this.details.uptime_all.length

      return latency
    },
    loadSpeed() {
      let loadSpeed = {
        fastest: this.details.uptime_all[0].loadSpeed,
        slowest: this.details.uptime_all[0].loadSpeed,
        average: 0,
      }

      for (let i = 0; i < this.details.uptime_all.length; ++i) {
        let cur = this.details.uptime_all[i]
        // console.log(cur.loadSpeed)
        loadSpeed.average += +cur.loadSpeed
        loadSpeed.fastest =
          loadSpeed.fastest < cur.loadSpeed ? loadSpeed.fastest : cur.loadSpeed
        loadSpeed.slowest =
          loadSpeed.slowest > cur.loadSpeed ? loadSpeed.slowest : cur.loadSpeed
      }
      loadSpeed.average /= this.details.uptime_all.length

      return loadSpeed
    },
  },
  filters: {
    round(val) {
      return Math.round(val)
    },
    fourDecimal(val) {
      return parseFloat(val).toFixed(4)
    },
    // latencyFastest(all) {
    //   fastest = all[0]
    //   // all.foreach(a => if)
    //   all.reduce(function(prev, cur, index, array) {
    //     smallest = prev.latency < cur.latency ? prev : cur
    //     biggest = prev.latency > cur.latency ? prev : cur
    //   })
    // },
    // latencySlowest(all) {
    //   return all.fin
    // },
    // latencyAverage(all) {
    // },
    // loadSpeedFastest(all) {
    // },
    // loadSpeedSlowest(all) {
    // },
    // loadSpeedAverage(all) {
    // },
  },
}
</script>

<style lang="stylus" scoped>

</style>


