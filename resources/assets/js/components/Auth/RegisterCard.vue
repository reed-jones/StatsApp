<template lang="pug">
form(@submit.prevent='AttemptRegister')
  ul(class="list-reset flex justify-between border-b")
    li(class="mr-1")
      a(class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold cursor-pointer" @click='$emit("loginTab")') Login

    li(class="-mb-px ml-1")
      a(class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold cursor-pointer") Register

  input-box(
    placeholder="Jane Doe"
    type="text"
    id='name'
    v-model.trim='form.name')
    | Name
  input-box(
    placeholder="name@example.com"
    type="text"
    id='email'
    v-model.trim='form.email'
    :errors='emailError')
    | Email
  input-box(
    placeholder="hunter2"
    type="password"
    id='password'
    v-model='form.password'
    :errors='passwordError')
    | Password
  input-box(
    placeholder="hunter2"
    type="password"
    id='passconf'
    v-model='form.password_confirmation'
    :errors='passwordConfirmError')
    | Password Confirmation

  button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mr-6 py-2 px-4 rounded-full float-right" type='submit') Register
</template>

<script>
import InputBox from '../InputBox'
export default {
  components: {
    InputBox,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
    }
  },
  computed: {
    emailError() {
      return this.errors.email ? this.errors.email[0] : ''
    },
    passwordError() {
      return this.errors.password ? this.errors.password[0] : ''
    },
    passwordConfirmError() {
      return this.passwordError.length ? ' ' : ''
    },
  },
  methods: {
    AttemptRegister() {
      axios
        .post('/api/auth/register', { ...this.form })
        .then(data => {
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          console.log(error.response.data.errors)
          this.errors = { ...error.response.data.errors }
        })
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
