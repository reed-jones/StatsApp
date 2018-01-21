<template lang="pug">
  div(class="md:flex md:items-center px-6 py-4")
    div(class="md:w-1/3")
      label(:class='labelCSS' for="username")
        slot
    div(class="md:w-2/3")
      input#username(:class='inputCSS' ref='inputValue' :type="type" :placeholder="placeholder" :value='value' @input='updateValue')
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: '',
  },
  data() {
    return {
      inputCSS:
        'bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker',
      labelCSS: 'block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4',
    }
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.inputValue.value)
    },
  },
}
</script>

