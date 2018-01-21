<template lang="pug">

  div
    ul(class="list-reset flex justify-between border-b")
      li(class="-mb-px mr-1")
        a(class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold cursor-pointer") Login

      li(class="ml-1")
        a(class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold cursor-pointer" @click='$emit("registerTab")') Register

    input-box(placeholder="Jane Doe" type="text" v-model='username')
      | Username

    input-box(placeholder="hunter2" type="password" v-model='password')
      | Password

    button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mr-6 py-2 px-4 rounded-full float-right" @click='AttemptLogin') Login
</template>

<script>
import InputBox from './InputBox'
export default {
  components: {
    InputBox,
  },
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    AttemptLogin() {
      console.error("can't Login")
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
