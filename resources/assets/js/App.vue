<template lang="pug">
.page.min-h-full.flex.flex-col
  spa-navbar.flex.flex-row.items-center.justify-between
  router-view.router-view.p-8.justify-center.items-center
  spa-footer.flex.flex-row.items-center.justify-center
</template>

<script>
import spaNavbar from './components/Navbar'
import spaFooter from './components/Footer'
export default {
  components: {
    spaNavbar,
    spaFooter,
  },
  mounted() {
    if (localStorage.jwtToken) {
      this.$store.commit('setJWT', localStorage.jwtToken)

      this.getUser()
    }
  },
  methods: {
    getUser() {
      axios
        .post('/api/auth/me')
        .then(data => {
          this.$store.commit('setUser', {
            ...data.data,
          })
        })
        .catch(data => {
          this.$store.commit('logout')
          this.$router.push({ name: 'home' })
        })
    },
  },
}
</script>

<style lang="stylus">
*
  box-sizing border-box
html, body
  height 100%
  margin 0
  font-size 16px

/* Layout */
navHeight = 75px
footHeight = 150px

.router-view
  min-height "calc(100vh - %s)" % (navHeight + footHeight) // ie fix
  flex 1 0 auto
.nav
  height navHeight
.footer
  height footHeight
</style>


