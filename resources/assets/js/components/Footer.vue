<template lang="pug">
footer.footer.flex-center
  p &copy; Reed Jones #[a(href="https://www.reedjones.com") www.reedjones.com]
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.footer
  // display flex
  // flex-flow row wrap
  // align-items center
  // justify-content center
  color #fff
  background: linear-gradient(to top, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at bottom center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
  background-blend-mode: multiply,multiply;
  a
    color #e7f0fd
    &:hover
      color #74ebd5
</style>
