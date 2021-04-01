<template>
  <Main />
</template>

<script>
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  components: { Main }
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}

/* purgecss start ignore */
@tailwind base;
@tailwind components;
/* purgecss end ignore */

@tailwind utilities;
</style>
