<template lang="pug">
  div(class="md:flex md:items-center px-6 py-4")
    div(class="md:w-1/3")
      label(:class='labelCSS' :for="id")
        slot
    div(class="md:w-2/3")
      input(:class="inputCSS" :id='id' ref='inputValue' :type="type" :placeholder="placeholder" :value='value' @input='updateValue')
      p(class="text-red text-xs italic pt-2") {{ errors }}
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
    id: {
      type: String,
      default: '',
    },
    errors: {
      type: String,
      default: '',
    },
    value: '',
  },
  data() {
    return {
      labelCSS: 'block text-grey font-bold md:text-right mb-1 md:mb-0 pr-4',
    }
  },
  computed: {
    inputCSS() {
      let base =
        'bg-grey-lighter appearance-none border-2 border-grey-lighter hover:border-purple rounded w-full py-2 px-4 text-grey-darker'
      if (this.errors) base += ' border-red'
      return base
    },
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.inputValue.value)
    },
  },
}
</script>