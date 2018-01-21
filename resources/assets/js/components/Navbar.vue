<template lang="pug">
nav.nav.flex-center
  .left
    h1 #[router-link(to="/") StatsApp]
  .right(v-if='$store.state.user')
    a Logout
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
