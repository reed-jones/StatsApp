<template lang="pug">
.flex.flex-row.items-center.justify-center.authorization-page
  .max-w-sm.rounded.overflow-hidden.shadow-lg.bg-white.relative
    transition(name="fade" mode='out-in')
      register-card(v-if='RegisterTab' @loginTab='$router.push({name: "login" })')
      login-card(v-else @registerTab='$router.push({name: "register" })')



</template>

<script>
import LoginCard from '../components/Auth/LoginCard'
import RegisterCard from '../components/Auth/RegisterCard'
export default {
  props: {
    RegisterTab: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LoginCard,
    RegisterCard,
  },
  watch: {
    RegisterTab(tabNow, tabThen) {
      this.newUser = tabNow
    },
  },
}
</script>

<style lang="stylus">
.authorization-page
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
// .tab-bar
//   cursor pointer

.fade-enter-active, .fade-leave-active
  transition: opacity .3s
.fade-enter, .fade-leave-to
  opacity 0
</style>
