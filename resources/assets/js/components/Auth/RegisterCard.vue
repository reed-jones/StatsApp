<template lang="pug">
div
  ul(class="list-reset flex justify-between border-b")
    li(class="mr-1")
      a(class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold cursor-pointer" @click='$emit("loginTab")') Login

    li(class="-mb-px ml-1")
      a(class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold cursor-pointer") Register

  input-box(placeholder="Jane Doe" type="text" v-model='name')
    | Name
  input-box(placeholder="Jane Doe" type="text" v-model='username')
    | Username
  input-box(placeholder="hunter2" type="password" v-model='password')
    | Password
  input-box(placeholder="hunter2" type="password" v-model='passwordConfirm')
    | Password Confirmation

  button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mr-6 py-2 px-4 rounded-full float-right" @click='AttemptRegister') Register
</template>

<script>
import InputBox from './InputBox'
export default {
  components: {
    InputBox,
  },
  data() {
    return {
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
    }
  },
  methods: {
    AttemptRegister() {
      console.error('user not registered')
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
