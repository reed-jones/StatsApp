<template lang="pug">
  div(class="bg-white flex-col rounded overflow-hidden shadow-lg")
    div(class='px-6 py-4 text-center border-b bg-grey')
      h2 Stats
    .flex.flex-col
      //- input-box(
      //-   placeholder="example.com"
      //-   type="text" id='website' v-model='preValidation.url' :errors='errors' @input='resetErrors') URL
      //- input-box(
      //-   placeholder="My Awesome Site"
      //-   type="text" id='website' v-model='preValidation.name') Name (optional)
      button(class="bg-blue hover:bg-blue-dark text-white font-bold mb-6 mx-6 my-4 py-2  px-4 rounded-full float-right" type='submit') More Stats...
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>

</style>


