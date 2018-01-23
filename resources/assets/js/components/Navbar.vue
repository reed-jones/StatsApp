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
  h1,
  a
    padding 0 15px

</style>
