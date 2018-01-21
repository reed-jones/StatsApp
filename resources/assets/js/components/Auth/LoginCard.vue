<template lang="pug">

  form(@submit.prevent='AttemptLogin')
    ul(class="list-reset flex justify-between border-b")
      li(class="-mb-px mr-1")
        a(class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-dark font-semibold cursor-pointer") Login

      li(class="ml-1")
        a(class="bg-white inline-block py-2 px-4 text-blue hover:text-blue-darker font-semibold cursor-pointer" @click='$emit("registerTab")') Register

    input-box(placeholder="Jane Doe" type="text" id='email' v-model.trim='form.email' :errors='errors' @input='resetErrors')
      | Email

    input-box(placeholder="hunter2" type="password" id='password' v-model='form.password' :errors='errors' @input='resetErrors')
      | Password

    button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mr-6 py-2 px-4 rounded-full float-right" type='submit' :disabled='submitting') Login
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
        email: '',
        password: '',
      },
      errors: '',
      submitting: false,
    }
  },
  methods: {
    AttemptLogin() {
      this.submitting = true
      axios
        .post('/api/auth/login', { ...this.form })
        .then(response => {
          let jwt
          if ((jwt = response.data.access_token)) {
            this.$store.commit('setJWT', jwt)
            this.getUserInfo()
          }
        })
        .catch(errors => {
          this.errors = ' '
          this.submitting = false
        })
    },
    getUserInfo() {
      axios.post('/api/auth/me').then(data => {
        this.$store.commit('setUser', {
          ...data.data,
        })
        this.$router.push({ name: 'dashboard' })
      })
    },
    resetErrors() {
      this.errors = ''
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>
