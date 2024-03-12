<script setup lang="ts">
import { useRoute } from 'vue-router';
import LayoutDefault from './layouts/default.vue'
import LayoutAuth from './layouts/auth.vue'
import { computed } from 'vue';
const route = useRoute();
const currentMeta = computed(()=>route.meta.layout || "default")
const layoutMap = {
  default: LayoutDefault,
  auth: LayoutAuth
}
const VNodeLayout = computed(()=> layoutMap[currentMeta.value] )
</script>

<template>
  <div>
    <component  :is="VNodeLayout">
      <RouterView/>
    </component>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
