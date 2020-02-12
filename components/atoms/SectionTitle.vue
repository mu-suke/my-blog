<template>
  <h2 class="display-1 text-center">
    <v-icon class="pb-2" size="48">mdi-{{icon}}</v-icon>
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
  },
}
</script>