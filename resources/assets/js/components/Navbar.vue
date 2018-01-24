<template lang="pug">
nav.nav.flex-center
  .left
    h1 #[router-link(to="/") Updog]
  .right(v-if='$store.state.jwtToken')
    router-link(to='/dash') Dashboard
    a(href='/' @click.prevent='logout') Logout
  .right(v-else)
    router-link(to='/login') Login
    router-link(to='/register') Signup
</template>

<script>
export default {
  data() {
    return {
      navbar: true,
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout')
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav
  justify-content space-between
  position relative
  background-image linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
  .right a
    padding 0 15px
    font 1.2rem  'Righteous', cursive
    text-decoration-skip ink
    text-decoration-skip-ink auto
    text-decoration none
  h1 a
    font 4rem 'Sedgwick Ave', cursive
    font  4rem   'Righteous', cursive
    text-decoration none
    &,
    &:active,
    &:visited
      color #333
    &:hover
      color #000
  a,
  a:active,
  a:visited
    color #333
  a:hover
    color #000


</style>
