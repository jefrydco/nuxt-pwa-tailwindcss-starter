<template>
  <div>
    <h1>Home</h1>
    <validation-provider v-slot="{ errors }" rules="numeric">
      <input
        v-model="example"
        name="Example"
        placeholder="Example"
        class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 px-4 block w-full appearance-none leading-normal ds-input"
      />
      <span class="error">{{ errors[0] }}</span>
    </validation-provider>
    <nuxt-link
      to="/inspire"
      class="px-2 -mx-2 py-1 transition duration-200 ease-in-out relative block text-teal-600 font-medium underline"
    >
      Inspire
    </nuxt-link>
  </div>
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate'
import { numeric } from 'vee-validate/dist/rules'

export default {
  components: {
    ValidationProvider
  },
  data() {
    return {
      example: null
    }
  },
  mounted() {
    extend('numeric', numeric)
  }
}
</script>

<style>
.error {
  @apply text-red-500;
}
</style>
